"use client";

import { Button } from "@/app/_components/ui/button";
import { UpsertTransactionDialog } from "@/app/_components/upsert-transaction-dialog";
import { Transactions } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  transaction: Transactions;
}

export const EditTransactionButton = ({
  transaction,
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const hanldeOpenDialog = () => {
    return () => setDialogIsOpen(true);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={hanldeOpenDialog()}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amaount) }}
        transactionId={transaction.id}
      />
    </>
  );
};
