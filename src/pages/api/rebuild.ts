/**
 * Rebuild Trigger API
 *
 * POST /api/rebuild — Triggers a Vercel deploy hook to rebuild static pages (requires API key)
 */
import type { APIRoute } from 'astro';
import { verifyApiKey } from '@/lib/cms/auth';
import { jsonResponse, errorResponse, unauthorizedResponse } from '@/lib/cms/response';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  if (!verifyApiKey(request)) {
    return unauthorizedResponse();
  }

  const hookUrl = import.meta.env.VERCEL_DEPLOY_HOOK_URL;

  if (!hookUrl) {
    return errorResponse('VERCEL_DEPLOY_HOOK_URL is not configured', 500);
  }

  try {
    const res = await fetch(hookUrl, { method: 'POST' });

    if (!res.ok) {
      const body = await res.text();
      return errorResponse(
        `Vercel deploy hook returned ${res.status}: ${body}`,
        502
      );
    }

    return jsonResponse({
      message: 'Rebuild triggered successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return errorResponse(`Failed to trigger rebuild: ${message}`);
  }
};
