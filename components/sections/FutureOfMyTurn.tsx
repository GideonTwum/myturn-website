"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DynamicIcon } from "@/components/ui/IconMap";
import { StaggerContainer, StaggerItem } from "@/components/motion/StaggerContainer";
import { FUTURE_FEATURES } from "@/data/mockData";
import { Rocket } from "lucide-react";

export function FutureOfMyTurn() {
  return (
    <section id="future" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-emerald-200/30 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-60 h-60 border border-amber-200/30 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Coming Soon"
          title="The Future of MyTurn"
          subtitle="We're building a full digital platform to make community savings even more transparent, secure, and convenient."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12 p-4 rounded-2xl bg-gradient-to-r from-emerald-100 to-amber-50 border border-emerald-200/50 max-w-md mx-auto"
        >
          <Rocket className="w-6 h-6 text-emerald-600" />
          <p className="text-emerald-800 font-medium text-sm">Platform launch expected 2026</p>
        </motion.div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FUTURE_FEATURES.map((feature, i) => (
            <StaggerItem key={feature.title}>
              <motion.div
                whileHover={{ y: -8, rotateX: 5 }}
                style={{ perspective: 1000 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-950 to-green-900 text-white overflow-hidden border border-emerald-700/50 shadow-xl"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                  className="absolute top-0 right-0 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"
                />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-amber-400/20 transition-colors">
                    <DynamicIcon name={feature.icon} className="w-7 h-7 text-amber-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-emerald-100/80 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
