"use client";

import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

interface Props {
  userCanAddTransaction?: boolean;
}

export const AddTransactionButton = ({ userCanAddTransaction }: Props) => {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const hanldeOpenDialog = () => {
    return () => setDialogIsOpen(true);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="gradient"
              className="rounded-full font-bold boder-0"
              onClick={hanldeOpenDialog()}
              disabled={userCanAddTransaction}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {userCanAddTransaction &&
              "Você atingiu o limite de transações. Atualize seu plano para criar transações ilimitadas."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};
