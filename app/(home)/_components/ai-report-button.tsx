"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { BotIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { toast } from "sonner";
import { generateAiReport } from "../_actions/generate-ai-report";

interface Props {
  hasPremiumPlan: boolean;
  month: string;
}

const AiReportButton = ({ month, hasPremiumPlan }: Props) => {
  const [report, setReport] = useState<string | null>(null);
  const [reportIsLoading, setReportIsLoading] = useState(false);

  const handleGenerateReport = async () => {
    try {
      setReportIsLoading(true);
      const aiReport = await generateAiReport({ month });
      setReport(aiReport);
      toast.success("Relatório gerado com sucesso.");
    } catch {
      toast.warning(
        "Ocorreu um erro ao gerar o relatório. Tente novamente mais tarde.",
      );
    } finally {
      setReportIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="font-bold">
          Relatório de IA
          <BotIcon />
        </Button>
      </DialogTrigger>
      {hasPremiumPlan ? (
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Relatório de IA</DialogTitle>
            <DialogDescription>
              Use Inteligência artificial para gerar um relatório cons insights
              sobre suas finanças
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="prose prose-h3:text-white max-h-[450px] text-white prose-h4:text-white prose-strong:text-white">
            <Markdown>{report}</Markdown>
          </ScrollArea>
          <DialogFooter>
            <DialogClose>
              <Button variant="ghost" className="font-bold">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              onClick={handleGenerateReport}
              disabled={reportIsLoading}
              className="font-bold"
            >
              {reportIsLoading && <Loader2Icon className="animate-spin" />}
              Gerar relatório
            </Button>
          </DialogFooter>
        </DialogContent>
      ) : (
        <DialogContent className="max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Relatório de IA</DialogTitle>
            <DialogDescription>
              Você precisa de um plano premium para gerar um relatório com IA.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="prose prose-h3:text-white max-h-[450px] text-white prose-h4:text-white prose-strong:text-white">
            <Markdown>{report}</Markdown>
          </ScrollArea>
          <DialogFooter>
            <DialogClose>
              <Button variant="ghost" className="font-bold">
                Cancelar
              </Button>
            </DialogClose>
            <Button asChild>
              <Link href="/subscription">Assinar premium</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default AiReportButton;
