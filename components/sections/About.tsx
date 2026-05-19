"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInView } from "@/components/motion/FadeInView";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To empower communities across Ghana and beyond with structured, transparent contribution groups that build real financial security — one turn at a time.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "A world where everyone has access to trusted community savings, powered by technology that makes contributions simple, fair, and accountable.",
  },
  {
    icon: Heart,
    title: "Why We Exist",
    text: "Traditional susu and contribution circles have helped millions save for generations. MyTurn modernizes this model with admin oversight, clear processes, and a path to a full digital platform.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Our Story"
          title="About MyTurn"
          subtitle="We're on a mission to make community savings trustworthy, accessible, and ready for the digital age."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <FadeInView direction="left">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800 p-8 flex flex-col justify-end shadow-2xl shadow-emerald-900/20">
                <div className="absolute inset-0 rounded-3xl bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative"
                >
                  <p className="text-amber-300 text-sm font-semibold uppercase tracking-wider mb-2">
                    Community First
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Saving together,
                    <br />
                    growing together.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 md:right-8 p-6 rounded-2xl bg-white shadow-xl border border-emerald-100"
              >
                <p className="text-3xl font-bold text-emerald-600">12K+</p>
                <p className="text-sm text-gray-600">Active community members</p>
              </motion.div>
            </div>
          </FadeInView>

          <FadeInView direction="right" delay={0.2}>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                MyTurn was born from a simple observation: millions of people already save through
                contribution groups — but too often without structure, transparency, or reliable
                administration.
              </p>
              <p>
                We set out to change that. By combining the time-tested susu model with modern
                oversight, WhatsApp coordination, and an upcoming digital platform, MyTurn gives you
                the best of both worlds.
              </p>
              <p>
                Whether you&apos;re a student, entrepreneur, or family provider, there&apos;s a group
                designed for your goals. Join thousands who are already building financial discipline
                and accessing capital when it&apos;s their turn.
              </p>
            </div>
          </FadeInView>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <FadeInView key={pillar.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full p-8 rounded-3xl bg-gradient-to-br from-[#f8faf9] to-emerald-50/50 border border-emerald-100"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
