import AiReportButton from "@/app/(home)/_components/ai-report-button";
import { ExpensesPerCategory } from "@/app/(home)/_components/expenses-per-category";
import { LastTransactions } from "@/app/(home)/_components/last-transactions";
import { SummaryCards } from "@/app/(home)/_components/summary-cards";
import { TimeSelect } from "@/app/(home)/_components/time-select";
import { TransactionsPieChartDonut } from "@/app/(home)/_components/transactions-pie-chart";
import { homeController } from "@/app/(home)/_controllers/home-controller";
import { Navbar } from "@/app/_components/navbar";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { dashboardData, userCanAddTransaction, hasPremiumPlan } =
    await homeController(month);

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <AiReportButton month={month} hasPremiumPlan={hasPremiumPlan} />
            <TimeSelect />
          </div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards
              {...dashboardData}
              userCanAddTransaction={!userCanAddTransaction}
            />
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
