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
    const isActive = pathname === route;

    return `
      relative flex items-center px-4 py-2 rounded-full
      text-sm font-medium
      transition-all duration-300 ease-out
      ${
        isActive
          ? "text-white bg-violet-500/15 border border-violet-400/20 shadow-[0_0_20px_rgba(139,92,246,0.12)]"
          : "text-slate-400 border border-transparent hover:text-white hover:bg-white/[0.04]"
      }
    `;
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-between
        px-8 py-3
        bg-slate-950/20
        backdrop-blur-2xl
        border-b border-white/[0.04]
        shadow-[0_4px_30px_rgba(0,0,0,0.08)]
        before:absolute before:inset-0 before:-z-10
        before:bg-gradient-to-r
        before:from-violet-600/[0.04]
        before:via-transparent
        before:to-pink-600/[0.04]
        before:pointer-events-none
      "
    >
      <div className="flex items-center gap-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.svg"
            alt="zaimu ai"
            width={173}
            height={39}
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
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
