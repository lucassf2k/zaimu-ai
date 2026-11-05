import * as React from "react";

import { cn } from "@/app/_lib/utils";

type GlassCardVariant = "default" | "blue" | "green" | "pink" | "purple";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: GlassCardVariant;
}

const variants: Record<GlassCardVariant, string> = {
  default: "dashboard-card-default",
  blue: "dashboard-card-blue",
  green: "dashboard-card-green",
  pink: "dashboard-card-pink",
  purple: "dashboard-card-purple",
};

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-variant={variant}
        className={cn("dashboard-card", variants[variant], className)}
        {...props}
      />
    );
  },
);

GlassCard.displayName = "DashboardCard";

export { GlassCard };
export type { GlassCardVariant };
