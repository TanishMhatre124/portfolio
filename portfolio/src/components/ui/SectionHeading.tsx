import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  index: string; // e.g. "01" — used only where content is genuinely sequential
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ index, eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      <div className={cn("mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-signal", align === "center" && "justify-center")}>
        <span className="text-fog">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">{title}</h2>
      {description && <p className={cn("mt-4 max-w-2xl text-fog", align === "center" && "mx-auto")}>{description}</p>}
    </div>
  );
}
