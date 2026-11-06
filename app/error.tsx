"use client";

import { GlassCard } from "./_components/glass-card";
import { Button } from "./_components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <GlassCard
        variant="blue"
        className="p-8 min-w-[400px] max-w-[600px] flex flex-col gap-4"
      >
        <h4 className="font-bold text-xl">
          Algo inesperado aconteceu, por favor recarregue a página.
        </h4>
        <Button variant="glass" size="lg" onClick={() => reset()}>
          Recarregar
        </Button>
      </GlassCard>
    </div>
  );
}
