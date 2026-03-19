/**
 * Media Single Item API — Read, Update, Delete
 *
 * GET    /api/media/{slug}  — Get a single media item (public)
 * PUT    /api/media/{slug}  — Update a media item (requires API key)
 * DELETE /api/media/{slug}  — Delete a media item (requires API key)
 */
import type { APIRoute } from 'astro';
import { verifyApiKey } from '@/lib/cms/auth';
import { mediaUpdateSchema } from '@/lib/cms/validation';
import { getFile, createOrUpdateFile, deleteFile } from '@/lib/cms/github';
import {
  jsonResponse,
  errorResponse,
  notFoundResponse,
  unauthorizedResponse,
  validationErrorResponse,
} from '@/lib/cms/response';

export const prerender = false;

/**
 * Parse simple YAML key-value pairs.
 */
function parseYaml(raw: string): Record<string, string> {
  const data: Record<string, string> = {};

  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let value = trimmed.slice(colonIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  return data;
}

/**
 * Build a YAML string from key-value pairs.
 */
function buildYaml(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${k}: "${v}"`)
    .join('\n') + '\n';
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return notFoundResponse('Slug is required');
  }

  try {
    const path = `src/content/media/${slug}.yaml`;
    const file = await getFile(path);

    if (!file) {
      return notFoundResponse(`Media item "${slug}" not found`);
    }

    const data = parseYaml(file.content);

    return jsonResponse({ slug, ...data });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  const slug = params.slug;
  if (!slug) {
    return notFoundResponse('Slug is required');
  }

  try {
    const path = `src/content/media/${slug}.yaml`;
    const existing = await getFile(path);

    if (!existing) {
      return notFoundResponse(`Media item "${slug}" not found`);
    }

    const body = await request.json();
    const result = mediaUpdateSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error.flatten().fieldErrors);
    }

    const existingData = parseYaml(existing.content);

    // Merge existing data with updates
    const merged: Record<string, string> = { ...existingData };
    for (const [key, value] of Object.entries(result.data)) {
      if (value !== undefined) {
        merged[key] = String(value);
      }
    }

    const yamlContent = buildYaml(merged);
    await createOrUpdateFile(
      path,
      yamlContent,
      `cms: update media item "${slug}"`
    );

    return jsonResponse({ slug, path, message: 'Media item updated' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  const slug = params.slug;
  if (!slug) {
    return notFoundResponse('Slug is required');
  }

  try {
    const path = `src/content/media/${slug}.yaml`;
    await deleteFile(path, `cms: delete media item "${slug}"`);

    return jsonResponse({ slug, message: 'Media item deleted' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};
