"use client";

import { Button } from "@/app/_components/ui/button";
import { createStripeCheckout } from "@/app/subscription/_actions/create-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquerePlanButton = () => {
  const handleAcquirePlan = async () => {
    const { sessionId } = await createStripeCheckout();
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe public key not found");
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );
    if (!stripe) throw new Error("Stripe not initialized");
    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <Button
      className="w-full rounded-full font-bold"
      onClick={handleAcquirePlan}
    >
      Adquirir plano
    </Button>
  );
};

export default AcquerePlanButton;
