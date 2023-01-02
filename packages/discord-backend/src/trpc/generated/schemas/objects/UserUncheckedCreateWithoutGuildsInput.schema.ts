import { z } from 'zod';
import { UserCreateguildIdsInputObjectSchema } from './UserCreateguildIdsInput.schema';
import { EmojiUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './EmojiUncheckedCreateNestedManyWithoutUsersInput.schema';
import { UserCreateemojiIdsInputObjectSchema } from './UserCreateemojiIdsInput.schema';
import { MessageUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './MessageUncheckedCreateNestedManyWithoutUsersInput.schema';
import { UserCreatemessageIdsInputObjectSchema } from './UserCreatemessageIdsInput.schema';
import { ChannelUncheckedCreateNestedManyWithoutUsersInputObjectSchema } from './ChannelUncheckedCreateNestedManyWithoutUsersInput.schema';
import { UserCreatechannelIdsInputObjectSchema } from './UserCreatechannelIdsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutGuildsInput> = z
  .object({
    id: z.string(),
    username: z.string(),
    discriminator: z.string(),
    avatar: z.string().optional().nullable(),
    bot: z.boolean().optional().nullable(),
    system: z.boolean().optional().nullable(),
    mfa_enabled: z.boolean().optional().nullable(),
    banner: z.string().optional().nullable(),
    accent_color: z.number().optional().nullable(),
    locale: z.string().optional().nullable(),
    verified: z.boolean().optional().nullable(),
    email: z.string().optional().nullable(),
    flags: z.number().optional().nullable(),
    premium_type: z.number().optional().nullable(),
    public_flags: z.number().optional().nullable(),
    guildIds: z
      .union([
        z.lazy(() => UserCreateguildIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    emojis: z
      .lazy(() => EmojiUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    emojiIds: z
      .union([
        z.lazy(() => UserCreateemojiIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    Messages: z
      .lazy(() => MessageUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    messageIds: z
      .union([
        z.lazy(() => UserCreatemessageIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
    channels: z
      .lazy(() => ChannelUncheckedCreateNestedManyWithoutUsersInputObjectSchema)
      .optional(),
    channelIds: z
      .union([
        z.lazy(() => UserCreatechannelIdsInputObjectSchema),
        z.string().array(),
      ])
      .optional(),
  })
  .strict();

export const UserUncheckedCreateWithoutGuildsInputObjectSchema = Schema;