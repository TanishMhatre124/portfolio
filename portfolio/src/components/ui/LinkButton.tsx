import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "bg-signal text-ink hover:bg-signal/90",
  secondary: "border border-line text-paper hover:border-signal/60 hover:text-signal",
  ghost: "text-fog hover:text-paper",
};

export function LinkButton({ href, variant = "primary", external, className, children, ...props }: LinkButtonProps) {
  const classes = cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded px-6 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    variants[variant],
    className
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  );
}
