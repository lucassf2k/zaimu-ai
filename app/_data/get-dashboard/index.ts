import { db } from "@/app/_lib/prisma/db";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "./types";

export const getDashboard = async (month: string) => {
  const currentYear = new Date().getFullYear();
  const where = {
    date: {
      gte: new Date(`${currentYear}-${month}-01`),
      lt: new Date(`${currentYear}-${month}-31`),
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
          ...where,
          type: "EXPENSE",
        },
        _sum: {
          amaount: true,
        },
      })
    )?._sum?.amaount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  const transactionsTotal = Number(
    (
      await db.transactions.aggregate({
        where,
        _sum: {
          amaount: true,
        },
      })
    )?._sum?.amaount,
  );
  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: Math.round(
      ((depositsTotal || 0) / transactionsTotal) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      ((investmentsTotal || 0) / transactionsTotal) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      ((expensesTotal || 0) / transactionsTotal) * 100,
    ),
  };
  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
  };
};
