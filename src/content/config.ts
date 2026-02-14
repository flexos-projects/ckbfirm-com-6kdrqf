import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    author: z.string().default('CKB Firm Legal Team'),
  }),
});

export const collections = {
  'blog': blogCollection,
};