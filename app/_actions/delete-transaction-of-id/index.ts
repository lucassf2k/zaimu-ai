"use server";

import {
  deleteTransactionOfIdSchema,
  IDeleteTransactionOfIdParams,
} from "@/app/_actions/delete-transaction-of-id/schema";
import { db } from "@/app/_lib/prisma/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const deleteTransactionOfId = async (
  params: IDeleteTransactionOfIdParams,
) => {
  deleteTransactionOfIdSchema.parse(params);
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");
  await db.transactions.delete({
    where: {
      id: params.id,
    },
  });
  revalidatePath("/transactios");
};
