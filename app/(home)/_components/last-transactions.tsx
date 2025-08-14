import { Button } from "@/app/_components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_domain/transaction";
import { FormatCurrency } from "@/app/_lib/format-currency";
import { Transactions, TransactionType } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface LastTransactionsProps {
  lastTransactions: Transactions[];
}

export const LastTransactions = ({
  lastTransactions,
}: LastTransactionsProps) => {
  const dateFormatted = (date: Date): string => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getAmountColor = (transaction: Transactions) => {
    if (transaction.type === TransactionType.DEPOSIT) return "text-green-500";
    if (transaction.type === TransactionType.EXPENSE) return "text-red-500";
    return "text-white";
  };

  const getAmountPrefix = (transaction: Transactions) => {
    if (transaction.type === TransactionType.DEPOSIT) return "+ ";
    if (transaction.type === TransactionType.EXPENSE) return "- ";
    return "";
  };

  return (
    <ScrollArea className="rounded-md border">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas transações</CardTitle>
        <Button variant="outline" className="rounded-full font-bold" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <div className=" bg-white/[0.03] p-3 rounded-lg">
                <Image
                  src={
                    TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]
                  }
                  height={20}
                  width={20}
                  alt="PIX"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {dateFormatted(transaction.date)}
                </p>
              </div>
            </div>
            <p className={`text-sm font-bold ${getAmountColor(transaction)}`}>
              {getAmountPrefix(transaction)}
              {FormatCurrency.toBR(Number(transaction.amaount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};
