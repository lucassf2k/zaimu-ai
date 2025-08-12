import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "../_components/navbar";

const SubscriptionPage = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return <Navbar />;
};

export default SubscriptionPage;
