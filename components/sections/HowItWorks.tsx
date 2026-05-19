"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconMap";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { HOW_IT_WORKS_STEPS } from "@/data/mockData";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Simple Process"
          title="How MyTurn Works"
          subtitle="Six clear steps from application to financial growth — transparent, structured, and community-driven."
        />

        <StaggerContainer className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <StaggerItem key={step.step}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full p-6 md:p-8 rounded-3xl bg-white border border-emerald-100/80 shadow-lg shadow-emerald-900/5 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                        <DynamicIcon name={step.icon} className="w-7 h-7 text-white" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-400 text-emerald-950 text-xs font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-950 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {index < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div className="lg:hidden mt-4 ml-7 w-0.5 h-6 bg-emerald-200" />
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
