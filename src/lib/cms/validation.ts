/**
 * Zod validation schemas for CMS API request bodies.
 *
 * These mirror the content collection schemas defined in src/content.config.ts
 * but are used for runtime validation of incoming API requests.
 */
import { z } from 'zod';

// ─── Blog Schemas ─────────────────────────────────────────

export const blogSchema = z.object({
  title_id: z.string().min(1, 'Indonesian title is required'),
  title_en: z.string().min(1, 'English title is required'),
  date: z.string().min(1, 'Date is required (YYYY-MM-DD format)'),
  author: z.string().default('Tim Mitra Ternak'),
  category: z.enum([
    'panduan',
    'investasi',
    'qurban',
    'inovasi',
    'bisnis',
    'tips',
    'berita',
  ]),
  thumbnail: z.string().default('/images/blog/default.webp'),
  excerpt_id: z.string().min(1, 'Indonesian excerpt is required'),
  excerpt_en: z.string().min(1, 'English excerpt is required'),
  read_time: z.string().default('5 min'),
  content: z.string().min(1, 'Markdown content body is required'),
});

export const blogUpdateSchema = blogSchema.partial();

// ─── Media Schemas ────────────────────────────────────────

export const mediaSchema = z.object({
  title_id: z.string().min(1, 'Indonesian title is required'),
  title_en: z.string().min(1, 'English title is required'),
  source: z.string().min(1, 'Source is required'),
  date: z.string().min(1, 'Date is required (YYYY-MM-DD format)'),
  type: z.enum(['news', 'video']),
  url: z.string().url('Must be a valid URL'),
  thumbnail: z.string().default('/images/media/default.webp'),
  summary_id: z.string().min(1, 'Indonesian summary is required'),
  summary_en: z.string().min(1, 'English summary is required'),
});

export const mediaUpdateSchema = mediaSchema.partial();

// ─── Type exports ─────────────────────────────────────────

export type BlogInput = z.infer<typeof blogSchema>;
export type BlogUpdateInput = z.infer<typeof blogUpdateSchema>;
export type MediaInput = z.infer<typeof mediaSchema>;
export type MediaUpdateInput = z.infer<typeof mediaUpdateSchema>;
