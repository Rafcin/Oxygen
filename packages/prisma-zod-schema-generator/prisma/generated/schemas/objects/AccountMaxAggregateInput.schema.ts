import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    account_class: z.literal(true).optional(),
    provider: z.literal(true).optional(),
    providerAccountId: z.literal(true).optional(),
    refresh_token: z.literal(true).optional(),
    access_token: z.literal(true).optional(),
    expires_at: z.literal(true).optional(),
    token_class: z.literal(true).optional(),
    scope: z.literal(true).optional(),
    id_token: z.literal(true).optional(),
    session_state: z.literal(true).optional(),
  })
  .strict();

export const AccountMaxAggregateInputObjectSchema = Schema;