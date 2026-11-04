import { DataTable } from "@/app/_components/ui/data-table";
import { transactionColumns } from "@/app/transactions/_columns";
import { AddTransactionButton } from "../_components/add-transaction-button";
import { Navbar } from "../_components/navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
import { transactionsController } from "./_controllers/transactions-controller";

const TransactionsPage = async () => {
  const { transactions, userCanAddTransaction } =
    await transactionsController();

  return (
    <>
      <Navbar />

      <div className="p-6 space-y-6 overflow-hidden">
        {/* HEARDER */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton
            userCanAddTransaction={!userCanAddTransaction}
          />
        </div>
        <ScrollArea>
          <DataTable columns={transactionColumns} data={transactions} />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
