import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import { fetchPrismaAllTransactions } from "@/app/_lib/prisma/fetch-prisma-all-transactions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const transactionsController = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const [transactions, userCanAddTransaction] = await Promise.all([
    fetchPrismaAllTransactions(userId),
    canUserAddTransaction(),
  ]);
  return { transactions, userCanAddTransaction };
};
