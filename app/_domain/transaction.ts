export enum TransactionTypeEnum {
  DEPOSIT = "DEPOSIT",
  EXPENSE = "EXPENSE",
  INVESTIMENT = "INVESTIMENT",
}
export enum TransactionCategoryEnum {
  HOUSING = "HOUSING",
  TRANSPORTATION = "TRANSPORTATION",
  FOOD = "FOOD",
  ENTERTAINMENT = "ENTERTAINMENT",
  HEALTH = "HEALTH",
  UTILITY = "UTILITY",
  SALARY = "SALARY",
  EDUCATION = "EDUCATION",
  OTHER = "OTHER",
}

export enum TransactionPaymentMethodEnum {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  BANK_TRANSFER = "BANK_TRANSFER",
  BANK_SLIP = "BANK_SLIP",
  CASH = "CASH",
  PIX = "PIX",
  OTHER = "OTHER",
}

export type TransactionType = "DEPOSIT" | "EXPENSE" | "INVESTIMENT";
export type TransactionCategory =
  | "HOUSING"
  | "TRANSPORTATION"
  | "FOOD"
  | "ENTERTAINMENT"
  | "HEALTH"
  | "UTILITY"
  | "SALARY"
  | "EDUCATION"
  | "OTHER";

export type TransactionPaymentMethod =
  | "CREDIT_CARD"
  | "DEBIT_CARD"
  | "BANK_TRANSFER"
  | "BANK_SLIP"
  | "CASH"
  | "PIX"
  | "OTHER";

export type Transaction = {
  id: string;
  name: string;
  type: TransactionType;
  amount: number;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};
