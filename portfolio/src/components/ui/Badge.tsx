import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-fog",
        className
      )}
    >
      {children}
    </span>
  );
}
