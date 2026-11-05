import { AddTransactionButton } from "@/app/_components/add-transaction-button";
import { GlassCard } from "@/app/_components/glass-card";
import { CardContent, CardHeader } from "@/app/_components/ui/card";
import { FormatCurrency } from "@/app/_lib/format-currency";
import type { ReactNode } from "react";

import type { ComponentProps } from "react";

type SnakeDecorationProps = {
  color?: "blue" | "green" | "red";
} & Omit<ComponentProps<"svg">, "color">;

const colors = {
  blue: "text-blue-400",
  green: "text-green-400",
  red: "text-red-400",
};

export const SnakeDecoration = ({
  color = "blue",
  className,
  ...props
}: SnakeDecorationProps) => {
  return (
    <svg
      className={`absolute -bottom-5 -right-2 h-36 w-24 ${colors[color]} ${className ?? ""}`}
      viewBox="0 0 100 160"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M72 2 C25 25, 85 38, 48 65 S20 105, 42 118 S65 140, 20 158"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "sm" | "lg";
  userCanAddTransaction?: boolean;
  snakeDecorationColor?: "blue" | "green" | "red";
}

export const SummaryCard = async ({
  title,
  amount,
  icon,
  size = "sm",
  userCanAddTransaction,
  snakeDecorationColor,
}: SummaryCardProps) => {
  return (
    <GlassCard variant="blue" className={size === "lg" ? "bg-white/5" : ""}>
      {/* Raio decorativo */}
      {snakeDecorationColor && <SnakeDecoration color={snakeDecorationColor} />}

      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={
            size === "sm" ? "text-muted-foreground" : "text-white opacity-70"
          }
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={`font-bold ${size === "sm" ? "text-2xl" : "text-4xl"}`}>
          {FormatCurrency.toBR(amount)}
        </p>
        {size === "lg" && (
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        )}
      </CardContent>
    </GlassCard>
  );
};
