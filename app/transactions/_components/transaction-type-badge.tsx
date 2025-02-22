import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionTypeEnum } from "@/app/_domain/transaction";
import { CircleIcon } from "lucide-react";

type TransactionTypeBadgeProps = {
  transaction: Transaction;
};

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionTypeEnum.DEPOSIT) {
    return (
      <Badge className="bg-muted text-green-500 hover:bg-muted font-bold">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionTypeEnum.EXPENSE) {
    return (
      <Badge className="font-bold text-danger bg-muted hover:bg-muted">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Dispesa
      </Badge>
    );
  }
  return (
    <Badge className="font-bold text-white bg-muted hover:bg-muted">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
