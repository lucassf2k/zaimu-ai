import { fetchGetCurrentMonthTransaction } from "@/app/_lib/prisma/fetch-current-month-transaction";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const canUserAddTransaction = async () => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authorized");
  }
  const user = await clerkClient().users.getUser(userId);
  if (user.publicMetadata.subscriptionPlan !== "premium") {
    return true;
  }
  const currentMonthTransactions = await fetchGetCurrentMonthTransaction();
  if (currentMonthTransactions >= 10) {
    return false;
  }
  return true;
};
