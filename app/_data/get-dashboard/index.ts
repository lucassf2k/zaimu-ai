import { db } from "@/app/_lib/prisma/db";
import { TransactionType } from "@prisma/client";
import {
  TotalExpensesPerCategory,
  TransactionPercentagePerType,
} from "./types";

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
  const totalExpensesPerCategory: TotalExpensesPerCategory[] = (
    await db.transactions.groupBy({
      by: ["category"],
      where: { ...where, type: TransactionType.EXPENSE },
      _sum: { amaount: true },
    })
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category._sum.amaount),
    percentageOfTotal: Math.round(
      (Number(category._sum.amaount) / Number(expensesTotal)) * 100,
    ),
  }));
  const lastTransactions = await db.transactions.findMany({
    where,
    orderBy: { date: "desc" },
    take: 10,
  });
  return {
    balance,
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    typesPercentage,
    totalExpensesPerCategory,
    lastTransactions,
  };
};
