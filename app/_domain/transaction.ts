export enum TransactionTypeEnum {
  DEPOSIT = "DEPOSIT",
  EXPENSE = "EXPENSE",
  INVESTMENT = "INVESTMENT",
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

export type TransactionType = "DEPOSIT" | "EXPENSE" | "INVESTMENT";
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

export const TRANSACTION_CATEGORY_LABELS = Object.freeze({
  EDUCATION: "Educação",
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entretenimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  OTHER: "Outros",
});

export const TRANSACTION_PAYMENT_METHOD_LABELS = Object.freeze({
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
});

type TransactionTypeOptions = {
  value: TransactionTypeEnum;
  label: string;
}[];

export const TRANSACTION_TYPES_OPTIONS: Readonly<TransactionTypeOptions> =
  Object.freeze([
    {
      value: TransactionTypeEnum.EXPENSE,
      label: "Despesa",
    },
    {
      value: TransactionTypeEnum.DEPOSIT,
      label: "Depósito",
    },
    {
      value: TransactionTypeEnum.INVESTMENT,
      label: "Investimento",
    },
  ]);

type TransactionPaymentMethodOptions = {
  value: TransactionPaymentMethodEnum;
  label: string;
}[];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS: Readonly<TransactionPaymentMethodOptions> =
  Object.freeze([
    {
      value: TransactionPaymentMethodEnum.BANK_SLIP,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[
          TransactionPaymentMethodEnum.BANK_SLIP
        ],
    },
    {
      value: TransactionPaymentMethodEnum.BANK_TRANSFER,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[
          TransactionPaymentMethodEnum.BANK_TRANSFER
        ],
    },
    {
      value: TransactionPaymentMethodEnum.CASH,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethodEnum.CASH],
    },
    {
      value: TransactionPaymentMethodEnum.CREDIT_CARD,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[
          TransactionPaymentMethodEnum.CREDIT_CARD
        ],
    },
    {
      value: TransactionPaymentMethodEnum.DEBIT_CARD,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[
          TransactionPaymentMethodEnum.DEBIT_CARD
        ],
    },
    {
      value: TransactionPaymentMethodEnum.PIX,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethodEnum.PIX],
    },
    {
      value: TransactionPaymentMethodEnum.OTHER,
      label:
        TRANSACTION_PAYMENT_METHOD_LABELS[TransactionPaymentMethodEnum.OTHER],
    },
  ]);

type TransactionCategoryOptions = {
  value: TransactionCategoryEnum;
  label: string;
}[];

export const TRANSACTION_CATEGORY_OPTIONS: Readonly<TransactionCategoryOptions> =
  Object.freeze([
    {
      value: TransactionCategoryEnum.EDUCATION,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.EDUCATION],
    },
    {
      value: TransactionCategoryEnum.ENTERTAINMENT,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.ENTERTAINMENT],
    },
    {
      value: TransactionCategoryEnum.FOOD,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.FOOD],
    },
    {
      value: TransactionCategoryEnum.HEALTH,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.HEALTH],
    },
    {
      value: TransactionCategoryEnum.HOUSING,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.HOUSING],
    },
    {
      value: TransactionCategoryEnum.SALARY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.SALARY],
    },
    {
      value: TransactionCategoryEnum.TRANSPORTATION,
      label:
        TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.TRANSPORTATION],
    },
    {
      value: TransactionCategoryEnum.UTILITY,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.UTILITY],
    },
    {
      value: TransactionCategoryEnum.OTHER,
      label: TRANSACTION_CATEGORY_LABELS[TransactionCategoryEnum.OTHER],
    },
  ]);
