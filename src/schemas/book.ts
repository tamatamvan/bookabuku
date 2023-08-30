import { z } from 'zod';

export const BookBaseSchema = z.object({
  id: z.number().nonnegative(),
  title: z.string(),
  author: z.string(),
  cover: z.string().url(),
});

export const BookSchema = BookBaseSchema.extend({
  description: z.string(),
  publicationDate: z.date(),
});
