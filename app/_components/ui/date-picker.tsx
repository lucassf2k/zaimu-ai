"use client";

import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { FormatDate } from "@/app/_lib/format-date";
import { cn } from "@/app/_lib/utils";
import { ptBR } from "date-fns/locale";
import { SelectSingleEventHandler } from "react-day-picker";

type DatePickerProps = {
  value?: Date;
  onChange?: SelectSingleEventHandler;
};

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? FormatDate.toBR(value) : <span>Selecione uma data...</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
};
