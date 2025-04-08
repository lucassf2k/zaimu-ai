import { DataTable } from "@/app/_components/ui/data-table";
import { fetchPrismaAllTransactions } from "@/app/_lib/prisma/fetch-prisma-all-transactions";
import { transactionColumns } from "@/app/transactions/_columns";
import { AddTransactionButton } from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  const transactions = await fetchPrismaAllTransactions();

  return (
    <div className="p-6 space-y-6">
      {/* HEARDER */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
