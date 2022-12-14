import { z } from 'zod';
import { ChannelCreateWithoutUsersInputObjectSchema } from './ChannelCreateWithoutUsersInput.schema';
import { ChannelUncheckedCreateWithoutUsersInputObjectSchema } from './ChannelUncheckedCreateWithoutUsersInput.schema';
import { ChannelCreateOrConnectWithoutUsersInputObjectSchema } from './ChannelCreateOrConnectWithoutUsersInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './ChannelWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ChannelCreateNestedManyWithoutUsersInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema),
        z.lazy(() => ChannelCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelUncheckedCreateWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ChannelCreateOrConnectWithoutUsersInputObjectSchema),
        z
          .lazy(() => ChannelCreateOrConnectWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ChannelWhereUniqueInputObjectSchema),
        z.lazy(() => ChannelWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ChannelCreateNestedManyWithoutUsersInputObjectSchema = Schema;
