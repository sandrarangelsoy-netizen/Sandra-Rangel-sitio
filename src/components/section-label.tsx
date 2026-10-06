import { cn } from "@/lib/utils";

export function SectionLabel({
  number,
  label,
  variant = "dark",
  className,
}: {
  number: string;
  label: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]",
        variant === "dark" ? "text-naranja" : "text-naranja",
        className
      )}
    >
      <span className={variant === "dark" ? "text-marino/35" : "text-crema/35"}>{number}</span>
      <span className={variant === "dark" ? "text-marino/35" : "text-crema/35"}>—</span>
      {label}
    </span>
  );
}
