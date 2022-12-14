import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SanityCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    isSane: z.boolean().optional(),
  })
  .strict();

export const SanityCreateInputObjectSchema = Schema;
