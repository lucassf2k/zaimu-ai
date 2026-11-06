import { canUserAddTransaction } from "@/app/_data/can-user-add-transaction";
import { getDashboard } from "@/app/_data/get-dashboard";
import { getOfClerkUserHasPremiumPlan } from "@/app/_data/get-of-clerk-user-has-premium-plan";
import { auth } from "@clerk/nextjs/server";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";

export const homeController = async (month: string) => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    const currenteMonth = new Date().getMonth() + 1;
    redirect(`/?month=${currenteMonth}`);
  }
  const [dashboardData, userCanAddTransaction, hasPremiumPlan] =
    await Promise.all([
      getDashboard(month),
      canUserAddTransaction(),
      getOfClerkUserHasPremiumPlan(),
    ]);
  return {
    dashboardData,
    userCanAddTransaction,
    hasPremiumPlan,
  };
};
