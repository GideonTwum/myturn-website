"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconMap";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { FEATURES } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Why MyTurn"
          title="Why Choose MyTurn"
          subtitle="Built for trust, structure, and real financial progress — not just promises."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -10 }}
                className={cn(
                  "group h-full p-8 rounded-3xl border border-emerald-100 bg-gradient-to-br",
                  feature.gradient,
                  "hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
                )}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:shadow-emerald-200/50"
                >
                  <DynamicIcon name={feature.icon} className="w-7 h-7 text-emerald-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
