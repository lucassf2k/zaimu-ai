import { auth } from "@clerk/nextjs/server";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";
import { Navbar } from "../_components/navbar";
import { SummaryCards } from "./_components/summary-cards";
import { TimeSelect } from "./_components/time-select";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = ({ searchParams: { month } }: HomeProps) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) redirect("/?month=01");

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>

        <div className="grid grid-cols-[2fr,1fr]">
          <SummaryCards month={month} />
        </div>
      </div>
    </>
  );
};

export default Home;
