"use server";

import { db } from "@/app/_lib/prisma/db";
import { auth, clerkClient } from "@clerk/nextjs/server";
import Openai from "openai";
import { GenerateAiReportSchema, generateAiReportSchema } from "./schema";

export const generateAiReport = async ({ month }: GenerateAiReportSchema) => {
  generateAiReportSchema.parse({ month });
  const { userId } = auth();
  if (!userId) throw new Error("User not unauthorized");
  const user = await clerkClient().users.getUser(userId);
  const hasPremiumPla = user.publicMetadata.subscriptionPlan === "premium";
  if (!hasPremiumPla) {
    throw new Error("You need a premium plan to generate AI reports");
  }
  const openai = new Openai({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const currentYear = new Date().getFullYear();
  const transactions = await db.transactions.findMany({
    where: {
      date: {
        gte: new Date(`${currentYear}-${month}-01`),
        lt: new Date(`${currentYear}-${month}-31`),
      },
    },
  });
  const content = `Gere um relatório com insights sobre as minhas finanças, com dicas e orientações de como melhorar minha vida financeira. As transações estão divididas por ponto e vírgula. A estrutura de cada uma é {DATA}-{TIPO}-{VALOR}-{CATEGORIA}. São elas:
  ${transactions
    .map(
      (transaction) =>
        `${transaction.date.toLocaleDateString("pt-BR")}-R$${transaction.amaount}-${transaction.type}-${transaction.category}`,
    )
    .join(";")}`;
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "Você é um especialista em gestão e organização de finanças pessoais. Você ajuda as pessoas a organizarem melhor as suas finanças.",
      },
      {
        role: "user",
        content,
      },
    ],
  });
  return completion.choices[0].message.content;
};
