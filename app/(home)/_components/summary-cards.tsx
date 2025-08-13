import { db } from "@/app/_lib/prisma/db";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { SummaryCard } from "./summary-card";

interface SummaryCardsProps {
  month: string;
}

export const SummaryCards = async ({ month }: SummaryCardsProps) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transactions.aggregate({
        where: {
          ...where,
          type: "DEPOSIT",
        },
        _sum: {
          amaount: true,
        },
      })
    )?._sum?.amaount,
  );
  const investmentsTotal = Number(
    (
      await db.transactions.aggregate({
        where: {
          ...where,
          type: "INVESTMENT",
        },
        _sum: {
          amaount: true,
        },
      })
    )?._sum?.amaount,
  );
  const expensesTotal = Number(
    (
      await db.transactions.aggregate({
        where: {
          date: {
            gte: new Date(`2025-${month}-01`),
            lt: new Date(`2025-${month}-31`),
          },
          type: "EXPENSE",
        },
        _sum: {
          amaount: true,
        },
      })
    )?._sum?.amaount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      {/* PRIMEIRO CARD */}
      <SummaryCard
        title="Saldo"
        amount={balance}
        icon={<WalletIcon size={16} />}
        size="lg"
      />
      {/* OUTROS CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          title="Investido"
          amount={investmentsTotal}
          icon={<PiggyBankIcon size={16} />}
        />

        <SummaryCard
          title="Receita"
          amount={depositsTotal}
          icon={<TrendingUpIcon size={16} className="text-green-500" />}
        />

        <SummaryCard
          title="Despesas"
          amount={expensesTotal}
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
        />
      </div>
    </div>
  );
};
