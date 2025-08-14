import { TransactionType } from "@/app/_domain/transaction";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};
