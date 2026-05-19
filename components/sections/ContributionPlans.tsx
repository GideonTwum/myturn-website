"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconMap";
import { Button } from "@/components/ui/Button";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { CONTRIBUTION_PLANS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function ContributionPlans() {
  const scrollToApply = () => {
    document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="plans" className="py-20 md:py-28 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Plans"
          title="Contribution Plans"
          subtitle="Choose a plan that fits your income, lifestyle, and financial goals."
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CONTRIBUTION_PLANS.map((plan) => (
            <StaggerItem key={plan.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex flex-col h-full p-8 rounded-3xl bg-white border-2 transition-all duration-300",
                  plan.popular
                    ? "border-amber-400 shadow-xl shadow-amber-400/20 scale-[1.02] lg:scale-105"
                    : "border-emerald-100 shadow-lg hover:border-emerald-300 hover:shadow-xl"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-emerald-950 text-xs font-bold shadow-md">
                    Most Popular
                  </span>
                )}

                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                  <DynamicIcon name={plan.icon} className="w-6 h-6 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-emerald-950">{plan.name}</h3>
                <p className="text-3xl font-bold text-emerald-600 mt-2">{plan.amount}</p>

                <motion.div className="mt-6 space-y-3 text-sm flex-1">
                  <div className="p-3 rounded-xl bg-gray-50">
                    <p className="text-gray-500">Ideal for</p>
                    <p className="font-medium text-gray-800">{plan.audience}</p>
                  </div>
                  <motion.div className="p-3 rounded-xl bg-gray-50">
                    <p className="text-gray-500">Duration</p>
                    <p className="font-medium text-gray-800">{plan.duration}</p>
                  </motion.div>
                  <ul className="space-y-2 pt-2">
                    {plan.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <Button
                  variant={plan.popular ? "gold" : "primary"}
                  size="md"
                  className="w-full mt-8"
                  onClick={scrollToApply}
                >
                  Get Started
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
