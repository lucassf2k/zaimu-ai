import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/data-table";
import { fetchPrismaAllTransactions } from "@/app/_lib/prisma/fetch-prisma-all-transactions";
import { transactionColumns } from "@/app/transactions/_columns";
import { ArrowDownUpIcon } from "lucide-react";

const TransactionsPage = async () => {
  const transactions = await fetchPrismaAllTransactions();

  return (
    <div className="p-6 space-y-6">
      {/* HEARDER */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
