"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [userButtonMounted, setUserButtonMounted] = useState(false);

  useEffect(() => {
    setUserButtonMounted(true);
  }, []);

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
      {userButtonMounted ? (
        <UserButton showName />
      ) : (
        <div className="flex items-center gap-3">
          <div className="h-4 w-24 rounded-md bg-muted animate-pulse" />
          <div className="h-9 w-9 rounded-full bg-muted animate-pulse" />
        </div>
      )}
    </nav>
  );
};
