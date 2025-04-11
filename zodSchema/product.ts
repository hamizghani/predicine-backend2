import { z } from "zod";

export const addProductSchema = z.object({
  amount: z.number().int(),
  medicineId: z.number().int(),
  expirationDate: z
    .string()
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date format" }),
});

export type AddProductParams = z.infer<typeof addProductSchema>;
