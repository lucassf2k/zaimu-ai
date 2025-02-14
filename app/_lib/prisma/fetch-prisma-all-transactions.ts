import { Transaction } from "@/app/_domain/transaction";
import { db } from "@/app/_lib/prisma/db";

export const fetchPrismaAllTransactions = async () => {
  const transactions = await db.transactions.findMany({});
  return transactions.map(
    (transaction) =>
      ({
        id: transaction.id,
        name: transaction.name,
        type: transaction.type,
        amount: Number(transaction.amaount),
        category: transaction.category,
        paymentMethod: transaction.paymentMethod,
        date: new Date(transaction.date),
        createdAt: new Date(transaction.createdAt),
        updatedAt: new Date(transaction.updatedAt),
        userId: transaction.userId,
      }) as Transaction,
  );
};
