import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

const SignInPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      <section className="mx-auto flex h-full max-w-[600px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          alt="zaimu ai"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <Image
            src="/icons/google.svg"
            alt="ícone do google"
            width={20}
            height={20}
            className="mr-1"
          />
          Entrar com Google
        </Button>
      </section>

      <section className="relative h-full w-full">
        <Image
          src="/banner.png"
          alt="Faça seu Login"
          fill
          className="object-cover"
        />
      </section>
    </div>
  );
};

export default SignInPage;
