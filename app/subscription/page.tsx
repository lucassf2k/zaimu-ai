import { CheckIcon, XIcon } from "lucide-react";
import { GlassCard } from "../_components/glass-card";
import { Navbar } from "../_components/navbar";
import { Badge } from "../_components/ui/badge";
import { CardContent, CardHeader } from "../_components/ui/card";
import AcquirePlanButton from "./_components/acquire-plan-button";
import { subscriptionController } from "./_controllers/subscription-controller";

const SubscriptionPage = async () => {
  const { currentMonthTransaction, hasPremiumPlan } =
    await subscriptionController();

  return (
    <>
      <Navbar />
      <div className="p6 space-y-6 p-8">
        <h1 className="font-bold text-2xl">Assinaturas</h1>
        <div className="flex gap-6">
          <GlassCard variant="blue" className="w-[450px]">
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
                <p>Apenas 10 transações por mês {currentMonthTransaction}/10</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </GlassCard>

          <GlassCard variant="blue" className="w-[450px]">
            <CardHeader className="border-b border-solid py-8 relative">
              {hasPremiumPlan && (
                <Badge className="absolute top-12 left-4 bg-primary/10 text-primary">
                  Ativo
                </Badge>
              )}
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
              <AcquirePlanButton />
            </CardContent>
          </GlassCard>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
