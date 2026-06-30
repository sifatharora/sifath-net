import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z
      .enum(['dentistry', 'advocacy', 'community', 'personal', 'education'])
      .default('education'),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    author: z.string(),
    rating: z.number().min(1).max(5),
    status: z.enum(['reading', 'finished']).default('finished'),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    award: z.string().optional(),
  }),
});

export const collections = { blog, books, research };
