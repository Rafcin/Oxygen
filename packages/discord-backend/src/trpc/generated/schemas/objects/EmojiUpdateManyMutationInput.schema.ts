import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EmojiUpdateuserIdsInputObjectSchema } from './EmojiUpdateuserIdsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { EmojiUpdatereactionIdsInputObjectSchema } from './EmojiUpdatereactionIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmojiUpdateManyMutationInput> = z
  .object({
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userIds: z
      .union([
        z.lazy(() => EmojiUpdateuserIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    require_colons: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    managed: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animated: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    available: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    reactionIds: z
      .union([
        z.lazy(() => EmojiUpdatereactionIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const EmojiUpdateManyMutationInputObjectSchema = Schema;
