/**
 * Standard JSON response helpers for API endpoints.
 */

const JSON_HEADERS = {
  'Content-Type': 'application/json',
};

/**
 * Return a successful JSON response.
 */
export function jsonResponse(data: unknown, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  });
}

/**
 * Return an error JSON response.
 */
export function errorResponse(
  message: string,
  status: number = 500
): Response {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: JSON_HEADERS,
  });
}

/**
 * Return a 404 Not Found response.
 */
export function notFoundResponse(
  message: string = 'Resource not found'
): Response {
  return errorResponse(message, 404);
}

/**
 * Return a 401 Unauthorized response.
 */
export function unauthorizedResponse(): Response {
  return errorResponse('Invalid or missing API key', 401);
}

/**
 * Return a 400 Bad Request response with validation error details.
 */
export function validationErrorResponse(errors: unknown): Response {
  return new Response(
    JSON.stringify({ error: 'Validation failed', details: errors }),
    {
      status: 400,
      headers: JSON_HEADERS,
    }
  );
}
