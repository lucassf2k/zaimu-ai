import { z } from "zod";

export const deleteTransactionOfIdSchema = z.object({
  id: z.string(),
});
export type IDeleteTransactionOfIdParams = z.infer<
  typeof deleteTransactionOfIdSchema
>;
