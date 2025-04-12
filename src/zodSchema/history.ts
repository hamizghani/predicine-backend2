import { z } from "zod";


export const importHistorySchema = z.object({
    history: z.array(z.object({
        medicineName: z.string(),
        price: z.string().transform((val) => parseInt(val, 10)),
        amount: z.string().transform((val) => parseInt(val, 10)),
        transactionDate: z
        .string()
        .transform((val) => new Date(val))
        .refine((date) => !isNaN(date.getTime()), { message: "Invalid date format" }),
    }))
})

export type ImportHistoryParams = z.infer<typeof importHistorySchema>;
