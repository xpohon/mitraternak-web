import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── Blog Collection ───────────────────────────────────────
// Stored as: src/content/blog/{slug}.md
// AI agents can create/edit these files directly
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title_id: z.string().min(1, 'Indonesian title is required'),
    title_en: z.string().min(1, 'English title is required'),
    date: z.coerce.date(),
    author: z.string().default('Tim Mitra Ternak'),
    category: z.enum(['panduan', 'investasi', 'qurban', 'inovasi', 'bisnis', 'tips', 'berita']),
    thumbnail: z.string().default('/images/blog/default.webp'),
    excerpt_id: z.string().min(1, 'Indonesian excerpt is required'),
    excerpt_en: z.string().min(1, 'English excerpt is required'),
    read_time: z.string().default('5 min'),
    published: z.boolean().default(true),
  }),
});

// ─── Media Collection ──────────────────────────────────────
// Stored as: src/content/media/{slug}.yaml
// AI agents can create/edit these files directly
const media = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/media' }),
  schema: z.object({
    title_id: z.string().min(1, 'Indonesian title is required'),
    title_en: z.string().min(1, 'English title is required'),
    source: z.string().min(1, 'Source is required'),
    date: z.coerce.date(),
    type: z.enum(['news', 'video']),
    url: z.string().url('Must be a valid URL'),
    thumbnail: z.string().default('/images/media/default.webp'),
    summary_id: z.string().min(1, 'Indonesian summary is required'),
    summary_en: z.string().min(1, 'English summary is required'),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog, media };
