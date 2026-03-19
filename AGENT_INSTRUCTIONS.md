# Mitraternak CMS - Agent Instructions

> This file is for AI agents (OpenClaw, Claude Code, etc.) to understand how to manage content on the mitraternak website.

## Quick Reference

| Item | Value |
|------|-------|
| Website | https://admiring-hofstadter.vercel.app |
| API Base | https://admiring-hofstadter.vercel.app/api |
| Schema | https://admiring-hofstadter.vercel.app/content-schema.json |
| Blog files | `src/content/blog/{slug}.md` |
| Media files | `src/content/media/{slug}.yaml` |
| Deploy | `npx vercel --prod` or git push |

---

## Method 1: File System (Preferred)

### Create a Blog Post

1. Create file `src/content/blog/{slug}.md` with this format:

```markdown
---
title_id: "Judul dalam Bahasa Indonesia"
title_en: "Title in English"
date: 2026-03-19
author: "Tim Mitra Ternak"
category: "panduan"
thumbnail: "/images/blog/default.webp"
excerpt_id: "Ringkasan singkat dalam Bahasa Indonesia."
excerpt_en: "Brief summary in English."
read_time: "5 min"
published: true
---

## Heading Pertama

Konten artikel dalam Bahasa Indonesia...

### Sub Heading

Konten lebih detail...
```

**Category options:** `panduan`, `investasi`, `qurban`, `inovasi`, `bisnis`, `tips`, `berita`

### Create a Media Item

Create file `src/content/media/{slug}.yaml`:

```yaml
title_id: "Judul liputan dalam Bahasa Indonesia"
title_en: "Coverage title in English"
source: "Nama Media"
date: 2026-03-19
type: "news"
url: "https://link-ke-artikel.com"
thumbnail: "/images/media/default.webp"
summary_id: "Ringkasan liputan dalam Bahasa Indonesia."
summary_en: "Coverage summary in English."
published: true
```

**Type options:** `news`, `video`

### Deploy Changes

After creating/editing content files:

```bash
cd "/Users/witdonowitdono/Documents/mitraternak web/.claude/worktrees/admiring-hofstadter"
npm run build
npx vercel --prod
```

Or via git:
```bash
git add src/content/
git commit -m "Add new content"
git push
```

---

## Method 2: HTTP API

### Authentication
All write operations require the `X-API-Key` header.

### Blog API

```bash
# List all posts
curl GET https://admiring-hofstadter.vercel.app/api/blog

# Get single post
curl GET https://admiring-hofstadter.vercel.app/api/blog/slug-name

# Create post
curl -X POST https://admiring-hofstadter.vercel.app/api/blog \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_KEY" \
  -d '{
    "slug": "new-post-slug",
    "title_id": "Judul",
    "title_en": "Title",
    "date": "2026-03-19",
    "author": "Tim Mitra Ternak",
    "category": "panduan",
    "excerpt_id": "Ringkasan",
    "excerpt_en": "Summary",
    "read_time": "5 min",
    "content": "## Heading\n\nMarkdown content here..."
  }'

# Update post
curl -X PUT https://admiring-hofstadter.vercel.app/api/blog/slug-name \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_KEY" \
  -d '{"title_id": "Updated title"}'

# Delete post
curl -X DELETE https://admiring-hofstadter.vercel.app/api/blog/slug-name \
  -H "X-API-Key: YOUR_KEY"
```

### Media API

```bash
# List all media
curl GET https://admiring-hofstadter.vercel.app/api/media

# Create media
curl -X POST https://admiring-hofstadter.vercel.app/api/media \
  -H "Content-Type: application/json" \
  -H "X-API-Key: YOUR_KEY" \
  -d '{
    "slug": "new-media-slug",
    "title_id": "Judul liputan",
    "title_en": "Coverage title",
    "source": "CNN Indonesia",
    "date": "2026-03-19",
    "type": "news",
    "url": "https://example.com/article",
    "summary_id": "Ringkasan",
    "summary_en": "Summary"
  }'
```

### Rebuild

```bash
curl -X POST https://admiring-hofstadter.vercel.app/api/rebuild \
  -H "X-API-Key: YOUR_KEY"
```

---

## Content Guidelines

### Blog Posts
- Write in Indonesian (Bahasa Indonesia) for the body content
- Provide bilingual titles and excerpts (ID + EN)
- Use category that matches: panduan, investasi, qurban, inovasi, bisnis, tips, berita
- Include internal links to products: `/produk/kemitraan-titip-ternak`, `/produk/bisa-qurban`, `/produk/mitra-bhakti-aqiqah`
- Include CTA to contact: `/kontak` or WhatsApp `https://wa.me/6285792671147`

### Media Coverage
- Add new media coverage when Mitra Ternak is featured in news/TV/online media
- Use actual article/video URLs (not channel URLs)
- Set type to "video" for YouTube content, "news" for articles

### SEO
- Slug should be descriptive and use dashes: `cara-ternak-domba-pemula`
- Titles should include relevant keywords
- Excerpts should be 1-2 sentences summarizing the article

## Project Structure

```
src/content/
  blog/                          # Blog posts (Markdown)
    cara-ternak-domba-pemula.md
    kemitraan-titip-ternak-domba-menguntungkan.md
    tips-memilih-domba-qurban-berkualitas.md
    inovasi-pakan-silase-domba.md
    potensi-bisnis-peternakan-domba-indonesia.md
  media/                         # Media coverage (YAML)
    petisi-liputan.yaml
    inews-liputan.yaml
    tvone-liputan.yaml
    jtv-liputan.yaml
    beritajatim-liputan.yaml
    rri-liputan.yaml
    cnn-liputan.yaml
```

