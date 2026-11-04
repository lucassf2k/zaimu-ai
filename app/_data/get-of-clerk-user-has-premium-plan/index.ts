import { auth, clerkClient } from "@clerk/nextjs/server";

export const getOfClerkUserHasPremiumPlan = async (): Promise<boolean> => {
  const { userId } = auth();
  if (!userId) throw new Error("User not authorized");
  const user = await clerkClient().users.getUser(userId);
  return user.publicMetadata.hasPremiumPlan === "premium";
};
