import { z } from 'zod';
import { ChannelSelectObjectSchema } from './objects/ChannelSelect.schema';
import { ChannelIncludeObjectSchema } from './objects/ChannelInclude.schema';
import { ChannelOrderByWithRelationInputObjectSchema } from './objects/ChannelOrderByWithRelationInput.schema';
import { ChannelWhereInputObjectSchema } from './objects/ChannelWhereInput.schema';
import { ChannelWhereUniqueInputObjectSchema } from './objects/ChannelWhereUniqueInput.schema';
import { ChannelScalarFieldEnumSchema } from './enums/ChannelScalarFieldEnum.schema';

export const ChannelFindManySchema = z.object({
  select: z.lazy(() => ChannelSelectObjectSchema.optional()),
  include: z.lazy(() => ChannelIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      ChannelOrderByWithRelationInputObjectSchema,
      ChannelOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ChannelWhereInputObjectSchema.optional(),
  cursor: ChannelWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ChannelScalarFieldEnumSchema).optional(),
});
