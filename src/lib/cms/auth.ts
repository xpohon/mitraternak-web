/**
 * API Key Authentication Utility
 *
 * Uses constant-time comparison to prevent timing attacks.
 */

/**
 * Constant-time string comparison to prevent timing attacks.
 * Compares every character regardless of mismatch position.
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Still do a dummy comparison to avoid length-based timing leaks
    let result = 1;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ a.charCodeAt(0);
    }
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

/**
 * Verify the API key from the request's X-API-Key header.
 *
 * Reads the expected key from `import.meta.env.CMS_API_KEY` and compares
 * it against the provided header value using constant-time comparison.
 */
export function verifyApiKey(request: Request): boolean {
  const apiKey = request.headers.get('X-API-Key');
  const expectedKey = (import.meta.env.CMS_API_KEY || process.env.CMS_API_KEY || '').trim();

  if (!apiKey || !expectedKey) {
    return false;
  }

  return timingSafeEqual(apiKey, expectedKey);
}
