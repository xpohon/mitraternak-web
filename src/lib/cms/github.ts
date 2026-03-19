/**
 * GitHub API Integration
 *
 * Provides functions to create, read, update, and delete files in a GitHub
 * repository. Designed for use in Vercel serverless functions where direct
 * file system access to the source repo is not available.
 *
 * Environment variables:
 *   GITHUB_TOKEN  - Personal access token with repo scope
 *   GITHUB_REPO   - Repository in "owner/repo" format
 *   GITHUB_BRANCH - Target branch (e.g. "main")
 */

interface GitHubFileResponse {
  content: string;
  sha: string;
  name: string;
  path: string;
}

interface GitHubDirectoryItem {
  name: string;
  path: string;
  sha: string;
  type: 'file' | 'dir';
}

function getConfig() {
  const token = (import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN || '').trim();
  const repo = (import.meta.env.GITHUB_REPO || process.env.GITHUB_REPO || '').trim();
  const branch = (import.meta.env.GITHUB_BRANCH || process.env.GITHUB_BRANCH || 'main').trim();

  if (!token || !repo) {
    throw new Error(
      'Missing required environment variables: GITHUB_TOKEN, GITHUB_REPO'
    );
  }

  return { token, repo, branch };
}

function headers(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
    'User-Agent': 'MitraTermak-CMS/1.0',
  };
}

/**
 * Get a file from the repository.
 * Returns the decoded content and SHA, or null if the file does not exist.
 */
export async function getFile(
  path: string
): Promise<{ content: string; sha: string } | null> {
  const { token, repo, branch } = getConfig();
  const url = `https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`;

  const res = await fetch(url, { headers: headers(token) });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${body}`);
  }

  const data = (await res.json()) as GitHubFileResponse;

  // GitHub returns base64-encoded content
  const content = atob(data.content.replace(/\n/g, ''));
  return { content, sha: data.sha };
}

/**
 * List files in a directory.
 * Returns an array of file/directory items.
 */
export async function listDirectory(
  path: string
): Promise<GitHubDirectoryItem[]> {
  const { token, repo, branch } = getConfig();
  const url = `https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`;

  const res = await fetch(url, { headers: headers(token) });

  if (res.status === 404) {
    return [];
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${body}`);
  }

  const data = (await res.json()) as GitHubDirectoryItem[];
  return Array.isArray(data) ? data : [];
}

/**
 * Create or update a file in the repository.
 *
 * If the file already exists, its SHA is fetched first so the update
 * succeeds. Returns true on success.
 */
export async function createOrUpdateFile(
  path: string,
  content: string,
  message: string
): Promise<boolean> {
  const { token, repo, branch } = getConfig();
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  // Check if file already exists to get its SHA
  const existing = await getFile(path);

  const body: Record<string, string> = {
    message,
    content: btoa(unescape(encodeURIComponent(content))),
    branch,
  };

  if (existing) {
    body.sha = existing.sha;
  }

  const res = await fetch(url, {
    method: 'PUT',
    headers: headers(token),
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${errorBody}`);
  }

  return true;
}

/**
 * Delete a file from the repository.
 * Returns true on success.
 */
export async function deleteFile(
  path: string,
  message: string
): Promise<boolean> {
  const { token, repo, branch } = getConfig();
  const url = `https://api.github.com/repos/${repo}/contents/${path}`;

  // Need the SHA of the file to delete it
  const existing = await getFile(path);
  if (!existing) {
    throw new Error(`File not found: ${path}`);
  }

  const res = await fetch(url, {
    method: 'DELETE',
    headers: headers(token),
    body: JSON.stringify({
      message,
      sha: existing.sha,
      branch,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`GitHub API error (${res.status}): ${errorBody}`);
  }

  return true;
}
