/**
 * Blog Single Item API — Read, Update, Delete
 *
 * GET    /api/blog/{slug}  — Get a single blog post (public)
 * PUT    /api/blog/{slug}  — Update a blog post (requires API key)
 * DELETE /api/blog/{slug}  — Delete a blog post (requires API key)
 */
import type { APIRoute } from 'astro';
import { verifyApiKey } from '@/lib/cms/auth';
import { blogUpdateSchema } from '@/lib/cms/validation';
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
 * Parse markdown frontmatter from raw file content.
 */
function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw };
  }

  const frontmatterBlock = match[1];
  const content = match[2];
  const data: Record<string, string> = {};

  for (const line of frontmatterBlock.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, content };
}

/**
 * Rebuild a markdown file from frontmatter and content.
 */
function buildMarkdown(frontmatter: Record<string, string>, content: string): string {
  return [
    '---',
    ...Object.entries(frontmatter).map(([k, v]) => `${k}: "${v}"`),
    '---',
    '',
    content,
  ].join('\n');
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return notFoundResponse('Slug is required');
  }

  try {
    const path = `src/content/blog/${slug}.md`;
    const file = await getFile(path);

    if (!file) {
      return notFoundResponse(`Blog post "${slug}" not found`);
    }

    const { data, content } = parseFrontmatter(file.content);

    return jsonResponse({
      slug,
      ...data,
      content,
    });
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
    const path = `src/content/blog/${slug}.md`;
    const existing = await getFile(path);

    if (!existing) {
      return notFoundResponse(`Blog post "${slug}" not found`);
    }

    const body = await request.json();
    const result = blogUpdateSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error.flatten().fieldErrors);
    }

    const { data: existingData, content: existingContent } = parseFrontmatter(existing.content);
    const { content: newContent, ...newFrontmatter } = result.data;

    // Merge existing frontmatter with updates
    const mergedFrontmatter: Record<string, string> = { ...existingData };
    for (const [key, value] of Object.entries(newFrontmatter)) {
      if (value !== undefined) {
        mergedFrontmatter[key] = String(value);
      }
    }

    const finalContent = newContent ?? existingContent;
    const md = buildMarkdown(mergedFrontmatter, finalContent);

    await createOrUpdateFile(
      path,
      md,
      `cms: update blog post "${slug}"`
    );

    return jsonResponse({ slug, path, message: 'Blog post updated' });
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
    const path = `src/content/blog/${slug}.md`;
    await deleteFile(path, `cms: delete blog post "${slug}"`);

    return jsonResponse({ slug, message: 'Blog post deleted' });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};
