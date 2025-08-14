import { auth } from "@clerk/nextjs/server";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import { Navbar } from "../_components/navbar";
import { getDashboard } from "../_data/get-dashboard";
import { ExpensesPerCategory } from "./_components/expenses-per-category";
import { LastTransactions } from "./_components/last-transactions";
import { SummaryCards } from "./_components/summary-cards";
import { TimeSelect } from "./_components/time-select";
import { TransactionsPieChartDonut } from "./_components/transactions-pie-chart";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) redirect("/?month=01");
  const dashboardData = await getDashboard(month);

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards {...dashboardData} />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChartDonut {...dashboardData} />
              <ExpensesPerCategory
                expensesPerCategory={dashboardData.totalExpensesPerCategory}
              />
            </div>
          </div>
          <LastTransactions lastTransactions={dashboardData.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Home;
