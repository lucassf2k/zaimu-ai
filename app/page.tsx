import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return <UserButton showName />;
};

export default Home;
