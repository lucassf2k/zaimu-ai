"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const routeSelectorActivatedClassName = (route: string): string => {
    return pathname === route
      ? "font-bold text-primary"
      : "text-muted-foreground";
  };

  return (
    <nav className="flex justify-between px-8 py-4 border-b border-solid">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="zaimu ai" width={173} height={39} />
        <Link href="/" className={routeSelectorActivatedClassName("/")}>
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={routeSelectorActivatedClassName("/transactions")}
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={routeSelectorActivatedClassName("/subscription")}
        >
          Assinatura
        </Link>
      </div>
      <UserButton showName />
    </nav>
  );
};
