import React from "react";
import { ArrowUpRight } from "lucide-react";

type StreetCardYellowProps = {
  href?: string;
  external?: boolean;
  title: string;
  value: string;
  icon: React.ReactNode;

  badge?: string;
  showTape?: boolean;
  rightIcon?: React.ReactNode;
  className?: string;

  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function StreetCardYellow({
  href,
  external,
  title,
  value,
  icon,
  badge,
  showTape = true,
  rightIcon,
  className = "",
  onClick,
}: StreetCardYellowProps) {
  const Comp: any = href ? "a" : "div";

  return (
    <Comp
      href={href}
      target={href && external ? "_blank" : undefined}
      rel={href && external ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={[
        "block relative group border-2 border-border bg-primary/10 p-4",
        "shadow-[8px_8px_0_0_hsl(var(--foreground)/0.9)]",
        "transition-transform",
        // ✅ hover só no desktop (evita hover “preso” no iPhone)
        "md:hover:-translate-y-[2px] md:hover:border-primary/70 md:hover:bg-primary/15",
        // ✅ feedback no toque
        "active:translate-y-[1px]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
        "[-webkit-tap-highlight-color:transparent]",
        href ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      {/* tape (só aparece em hover desktop) */}
      {showTape && (
        <div className="absolute -top-3 left-6 w-20 h-6 bg-primary/40 border-2 border-primary/70 rotate-[-6deg] opacity-0 md:group-hover:opacity-100 transition-opacity" />
      )}

      {/* badge */}
      {badge && (
        <div className="absolute -top-3 -right-3 rotate-[8deg] border-2 border-primary/80 bg-primary/25 px-3 py-1 shadow-[5px_5px_0_0_hsl(var(--foreground)/0.9)]">
          <p className="font-display text-[10px] tracking-[0.35em] text-foreground/95">
            {badge}
          </p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <div className="w-11 h-11 shrink-0 bg-secondary border-2 border-primary/50 flex items-center justify-center">
          {icon}
        </div>

        {/* ✅ evita estouro/estranheza no iPhone */}
        <div className="flex-1 min-w-0 leading-tight">
          <p className="font-display text-[11px] text-muted-foreground tracking-[0.25em]">
            {title}
          </p>
          <p className="font-body text-sm text-foreground/95 truncate">
            {value}
          </p>
        </div>

        <span className="shrink-0 ml-2">
          {rightIcon ?? (
            <ArrowUpRight
              size={16}
              className="text-foreground/30 md:group-hover:text-primary transition-colors"
            />
          )}
        </span>
      </div>
    </Comp>
  );
}
