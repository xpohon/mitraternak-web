/**
 * Media Collection API — List & Create
 *
 * GET  /api/media          — List media items (public)
 * POST /api/media          — Create a new media item (requires API key)
 */
import type { APIRoute } from 'astro';
import { verifyApiKey } from '@/lib/cms/auth';
import { mediaSchema } from '@/lib/cms/validation';
import { getFile, listDirectory, createOrUpdateFile } from '@/lib/cms/github';
import {
  jsonResponse,
  errorResponse,
  unauthorizedResponse,
  validationErrorResponse,
} from '@/lib/cms/response';

export const prerender = false;

/**
 * Parse simple YAML key-value pairs.
 * Handles single-level YAML files with string values.
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

    // Remove surrounding quotes
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

export const GET: APIRoute = async () => {
  try {
    const files = await listDirectory('src/content/media');
    const yamlFiles = files.filter((f) => f.name.endsWith('.yaml'));

    const items: Record<string, unknown>[] = [];

    for (const file of yamlFiles) {
      const result = await getFile(file.path);
      if (!result) continue;

      const data = parseYaml(result.content);
      const slug = file.name.replace(/\.yaml$/, '');

      items.push({ slug, ...data });
    }

    // Sort by date descending
    items.sort((a, b) => {
      const dateA = String(a.date || '');
      const dateB = String(b.date || '');
      return dateB.localeCompare(dateA);
    });

    return jsonResponse({ items, total: items.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};

export const POST: APIRoute = async ({ request }) => {
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  try {
    const body = await request.json();
    const result = mediaSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error.flatten().fieldErrors);
    }

    const data = result.data;

    // Generate slug from Indonesian title
    const slug = data.title_id
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const yamlContent = buildYaml({
      ...data,
      published: 'true',
    } as unknown as Record<string, string>);

    const path = `src/content/media/${slug}.yaml`;
    await createOrUpdateFile(
      path,
      yamlContent,
      `cms: create media item "${data.title_en}"`
    );

    return jsonResponse({ slug, path, message: 'Media item created' }, 201);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};
