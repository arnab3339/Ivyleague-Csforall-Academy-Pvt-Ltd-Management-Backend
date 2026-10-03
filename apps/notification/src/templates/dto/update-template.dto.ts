import { z } from 'zod';

export const updateTemplateSchema = z
    .object({
        brandId: z.number().int().positive().nullable().optional(),

        templateKey: z
            .string()
            .trim()
            .min(1, 'templateKey cannot be empty')
            .optional(),

        channel: z
            .string()
            .trim()
            .min(1, 'channel cannot be empty')
            .optional(),

        subject: z
            .string()
            .trim()
            .min(1, 'subject cannot be empty')
            .optional(),

        body: z
            .string()
            .min(1, 'body cannot be empty')
            .optional(),
    })
    .refine(
        (data) => Object.keys(data).length > 0,
        'At least one field is required to update the template',
    );

export type UpdateTemplateDto = z.infer<typeof updateTemplateSchema>;