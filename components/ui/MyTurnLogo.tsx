import Image from "next/image";
import { cn } from "@/lib/utils";

interface MyTurnLogoProps {
  variant?: "icon" | "wordmark";
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
  textTheme?: "light" | "dark";
}

const ICON_SIZES = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
} as const;

const TEXT_SIZES = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
} as const;

const ICON_SIZE = 888;

export function MyTurnLogo({
  variant = "wordmark",
  className,
  priority = false,
  size = "md",
  textTheme = "light",
}: MyTurnLogoProps) {
  const iconClassName = cn(
    "object-contain shrink-0 rounded-full",
    ICON_SIZES[size]
  );

  const icon = (
    <Image
      src="/images/myturn-logo-icon.png"
      alt=""
      width={ICON_SIZE}
      height={ICON_SIZE}
      priority={priority}
      unoptimized
      aria-hidden
      className={iconClassName}
    />
  );

  if (variant === "icon") {
    return (
      <Image
        src="/images/myturn-logo-icon.png"
        alt="MyTurn Logo"
        width={ICON_SIZE}
        height={ICON_SIZE}
        priority={priority}
        unoptimized
        className={cn(iconClassName, className)}
      />
    );
  }

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {icon}
      <span
        className={cn("font-bold tracking-tight leading-none", TEXT_SIZES[size])}
        aria-hidden
      >
        <span className={textTheme === "light" ? "text-white" : "text-emerald-950"}>
          My
        </span>
        <span
          className={
            textTheme === "light" ? "text-emerald-300" : "text-[#166534]"
          }
        >
          Turn
        </span>
      </span>
    </div>
  );
}
