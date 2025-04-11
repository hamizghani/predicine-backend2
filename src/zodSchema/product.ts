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

export const updateProductPriceSchema = z.object({
  id: z.number().int(),
  price: z.number().int()
})

export type UpdateProductPriceParams = z.infer<typeof updateProductPriceSchema>;

export const sellProductSchema = z.object({
  id: z.number().int(),
  amount: z.number().int()
})


export type SellProductParams = z.infer<typeof sellProductSchema>;


export const editStockBatchSchema = z.object({
  id: z.number().int(),
  amount: z.number().int(),
  expirationDate: z
    .string()
    .transform((val) => new Date(val))
    .refine((date) => !isNaN(date.getTime()), { message: "Invalid date format" }),
})

export type EditStockBatchParams = z.infer<typeof editStockBatchSchema>;
