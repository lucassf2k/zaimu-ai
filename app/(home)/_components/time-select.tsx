"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

export const TimeSelect = () => {
  const { push } = useRouter();
  const month = useSearchParams().get("month");

  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };

  return (
    <Select onValueChange={handleMonthChange} defaultValue={month || ""}>
      <SelectTrigger
        className="
          w-[180px] h-10
          rounded-xl
          border border-white/[0.10]
          bg-white/[0.04]
          text-slate-200
          backdrop-blur-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.15)]
          transition-all duration-200
          hover:bg-white/[0.07]
          hover:border-violet-400/30
          hover:shadow-[0_0_20px_rgba(139,92,246,0.10)]
          focus:ring-2
          focus:ring-violet-500/30
          focus:ring-offset-0
          data-[state=open]:border-violet-400/40
          data-[state=open]:bg-white/[0.07]
        "
      >
        <SelectValue placeholder="Mês" />
      </SelectTrigger>

      <SelectContent
        className="
          rounded-xl
          border border-white/[0.10]
          bg-slate-950/95
          text-slate-200
          shadow-[0_12px_40px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
        "
      >
        {MONTH_OPTIONS.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="
              cursor-pointer
              rounded-lg
              text-slate-300
              focus:bg-violet-500/15
              focus:text-white
              data-[state=checked]:bg-violet-500/20
              data-[state=checked]:text-white
            "
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
