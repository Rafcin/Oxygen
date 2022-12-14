import { z } from 'zod';
import { RoleCreateManyEmojiInputObjectSchema } from './RoleCreateManyEmojiInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateManyEmojiInputEnvelope> = z
  .object({
    data: z.lazy(() => RoleCreateManyEmojiInputObjectSchema).array(),
  })
  .strict();

export const RoleCreateManyEmojiInputEnvelopeObjectSchema = Schema;
