import { GlassCard } from "@/app/_components/glass-card";
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TotalExpensesPerCategory } from "@/app/_data/get-dashboard/types";
import { TRANSACTION_CATEGORY_LABELS } from "@/app/_domain/transaction";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensesPerCategory[];
}

export const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <GlassCard className="col-span-2 h-full" variant="purple">
      <ScrollArea className="h-full">
        <CardHeader>
          <CardTitle className="font-bold">Gastos por categoria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {expensesPerCategory.map((category) => (
            <div key={category.category} className="space-y-2">
              <div className="flex w-full justify-between">
                <p className="text-sm font-bold">
                  {TRANSACTION_CATEGORY_LABELS[category.category]}
                </p>
                <p className="text-sm font-bold">
                  {category.percentageOfTotal}%
                </p>
              </div>
              <Progress value={category.percentageOfTotal} />
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </GlassCard>
  );
};
