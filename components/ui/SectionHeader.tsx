"use client";

import { FadeInView } from "@/components/motion/FadeInView";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeInView className={cn("mb-12 md:mb-16", align === "center" && "text-center")}>
      {badge && (
        <span
          className={cn(
            "inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide",
            light
              ? "bg-white/15 text-amber-300 border border-white/20"
              : "bg-emerald-100 text-emerald-700 border border-emerald-200"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
          light ? "text-white" : "text-emerald-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-emerald-100/90" : "text-gray-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeInView>
  );
}
