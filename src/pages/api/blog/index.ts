/**
 * Blog Collection API — List & Create
 *
 * GET  /api/blog          — List blog posts (public)
 * POST /api/blog          — Create a new blog post (requires API key)
 *
 * Query parameters for GET:
 *   ?category=panduan     — Filter by category
 *   ?limit=10             — Limit number of results
 *   ?sort=date            — Sort by date (default: descending)
 */
import type { APIRoute } from 'astro';
import { verifyApiKey } from '@/lib/cms/auth';
import { blogSchema } from '@/lib/cms/validation';
import { getFile, listDirectory, createOrUpdateFile } from '@/lib/cms/github';
import {
  jsonResponse,
  errorResponse,
  unauthorizedResponse,
  validationErrorResponse,
} from '@/lib/cms/response';

export const prerender = false;

/**
 * Parse markdown frontmatter from raw file content.
 * Returns the frontmatter fields and the body content.
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
    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }

  return { data, content };
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const files = await listDirectory('src/content/blog');
    const mdFiles = files.filter((f) => f.name.endsWith('.md'));

    const posts: Record<string, unknown>[] = [];

    for (const file of mdFiles) {
      const result = await getFile(file.path);
      if (!result) continue;

      const { data, content } = parseFrontmatter(result.content);
      const slug = file.name.replace(/\.md$/, '');

      posts.push({
        slug,
        ...data,
        content_preview: content.slice(0, 200),
      });
    }

    // Apply filters
    let filtered = posts;

    const category = url.searchParams.get('category');
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Sort by date descending by default
    const sort = url.searchParams.get('sort') || 'date';
    if (sort === 'date') {
      filtered.sort((a, b) => {
        const dateA = String(a.date || '');
        const dateB = String(b.date || '');
        return dateB.localeCompare(dateA);
      });
    }

    const limit = url.searchParams.get('limit');
    if (limit) {
      const n = parseInt(limit, 10);
      if (!isNaN(n) && n > 0) {
        filtered = filtered.slice(0, n);
      }
    }

    return jsonResponse({ posts: filtered, total: filtered.length });
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
    const result = blogSchema.safeParse(body);

    if (!result.success) {
      return validationErrorResponse(result.error.flatten().fieldErrors);
    }

    const { content, ...frontmatter } = result.data;

    // Generate slug from Indonesian title
    const slug = frontmatter.title_id
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Build markdown file content
    const md = [
      '---',
      ...Object.entries(frontmatter).map(([k, v]) => `${k}: "${v}"`),
      'published: true',
      '---',
      '',
      content,
    ].join('\n');

    const path = `src/content/blog/${slug}.md`;
    await createOrUpdateFile(
      path,
      md,
      `cms: create blog post "${frontmatter.title_en}"`
    );

    return jsonResponse({ slug, path, message: 'Blog post created' }, 201);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(message);
  }
};
