"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

export const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const hanldeOpenDialog = () => {
    return () => setDialogIsOpen(true);
  };

  return (
    <>
      <Button className="rounded-full font-bold" onClick={hanldeOpenDialog()}>
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};
