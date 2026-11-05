"use client";

import { deleteTransactionOfId } from "@/app/_actions/delete-transaction-of-id";
import { Button } from "@/app/_components/ui/button";
import {
  TRANSACTION_CATEGORY_LABELS,
  TRANSACTION_PAYMENT_METHOD_LABELS,
} from "@/app/_domain/transaction";
import { FormatDate } from "@/app/_lib/format-date";
import { EditTransactionButton } from "@/app/transactions/_components/edit-transaction-button";
import TransactionTypeBadge from "@/app/transactions/_components/transaction-type-badge";
import { Transactions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon } from "lucide-react";
import { toast } from "sonner";

export const handleDeleteTransactionOfId = (id: string) => {
  return async () => {
    await deleteTransactionOfId({ id });
    toast.success("Transação excluida com sucesso.");
  };
};

export const transactionColumns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTION_CATEGORY_LABELS[transaction.category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de pagamento",
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTION_PAYMENT_METHOD_LABELS[transaction.paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) => {
      return FormatDate.toBR(transaction.date);
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amaount));
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground"
            onClick={handleDeleteTransactionOfId(transaction.id)}
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
