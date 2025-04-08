import { db } from "@/app/_lib/prisma/db";

export const fetchPrismaAllTransactions = async () => {
  const transactions = await db.transactions.findMany({});
  return transactions;
};
