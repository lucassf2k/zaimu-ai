import Image from "next/image";
import { redirect } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/app/_components/ui/button";

const SignInPage = () => {
  const { userId } = auth();
  if (userId) redirect("/");

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
        <p className="mb-8 text-muted-foreground">
          A Zaimu AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button variant="outline" size="lg">
            <Image
              src="/icons/google.svg"
              alt="ícone do google"
              width={20}
              height={20}
              className="mr-1"
            />
            Entrar com Google
          </Button>
        </SignInButton>
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
