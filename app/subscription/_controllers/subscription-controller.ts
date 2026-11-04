import { getOfClerkUserHasPremiumPlan } from "@/app/_data/get-of-clerk-user-has-premium-plan";
import { fetchGetCurrentMonthTransaction } from "@/app/_lib/prisma/fetch-current-month-transaction";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const subscriptionController = async () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const currentMonthTransaction = await fetchGetCurrentMonthTransaction();
  const hasPremiumPlan = await getOfClerkUserHasPremiumPlan();
  return { currentMonthTransaction, hasPremiumPlan };
};
