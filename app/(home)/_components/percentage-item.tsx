import type { ReactNode } from "react";

interface PercentageItemProps {
  title: string;
  icon: ReactNode;
  value: number;
}

export const PercentageItem = ({ title, icon, value }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-white/[0.03] rounded-lg p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      <p className="text-sm font-bold">{value}%</p>
    </div>
  );
};
