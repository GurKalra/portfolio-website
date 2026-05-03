import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/logs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { logs };
