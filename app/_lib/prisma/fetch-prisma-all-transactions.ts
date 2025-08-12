import { db } from "@/app/_lib/prisma/db";

export const fetchPrismaAllTransactions = async (userId: string) => {
  const transactions = await db.transactions.findMany({
    where: {
      userId,
    },
  });
  return transactions;
};
