import { DataTable } from "@/app/_components/ui/data-table";
import { fetchPrismaAllTransactions } from "@/app/_lib/prisma/fetch-prisma-all-transactions";
import { transactionColumns } from "@/app/transactions/_columns";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AddTransactionButton } from "../_components/add-transaction-button";
import { Navbar } from "../_components/navbar";

const TransactionsPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const transactions = await fetchPrismaAllTransactions(userId);

  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6">
        {/* HEARDER */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
