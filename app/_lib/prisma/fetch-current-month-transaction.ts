import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";
import { db } from "./db";

export const fetchGetCurrentMonthTransaction = async () => {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");
  const count = await db.transactions.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(new Date()),
        lt: endOfMonth(new Date()),
      },
    },
  });
  return count;
};
