import { auth } from "@clerk/nextjs/server";
import { CheckIcon, XIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { Navbar } from "../_components/navbar";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import AcquerePlanButton from "./_components/acquire-plan-button";

const SubscriptionPage = () => {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  return (
    <>
      <Navbar />
      <div className="p6 space-y-6 p-8">
        <h1 className="font-bold text-2xl">Assinaturas</h1>
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">0</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-500" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="text-center text-2xl font-semibold">
                Plano Premium
              </h2>
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">19</span>
                <span className="text-2xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-2">
                <CheckIcon className="text-green-500" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-green-500" />
                <p>Relatórios de IA ilimitados</p>
              </div>
              <AcquerePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
