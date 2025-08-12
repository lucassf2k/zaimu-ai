"use server";

import { db } from "@/app/_lib/prisma/db";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { addTransactionsSchema } from "./schema";

interface IAddTransactions {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const upsertTransactions = async (params: IAddTransactions) => {
  addTransactionsSchema.parse(params);
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");
  const input = {
    name: params.name,
    amaount: params.amount,
    type: params.type,
    category: params.category,
    paymentMethod: params.paymentMethod,
    date: params.date,
    userId,
  };
  await db.transactions.upsert({
    update: input,
    create: input,
    where: {
      id: params?.id ?? "",
    },
  });
  revalidatePath("/transactions");
};
