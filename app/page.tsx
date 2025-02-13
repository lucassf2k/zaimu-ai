import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Home = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return <UserButton showName />;
};

export default Home;
