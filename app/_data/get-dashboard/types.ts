import {
  TransactionCategory,
  TransactionType,
} from "@/app/_domain/transaction";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensesPerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
