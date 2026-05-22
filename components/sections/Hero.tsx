"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HERO_STATS } from "@/data/mockData";

const floatingCards = [
  {
    icon: Shield,
    title: "Verified Groups",
    value: "100% Supervised",
    position: "top-20 -left-4 md:left-8",
    delay: 0.8,
  },
  {
    icon: Users,
    title: "Community First",
    value: "12K+ Members",
    position: "top-32 -right-4 md:right-12",
    delay: 1,
  },
  {
    icon: TrendingUp,
    title: "Growing Together",
    value: "₵2.8M+ Processed",
    position: "bottom-32 left-4 md:left-16",
    delay: 1.2,
  },
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950"
    >
      {/* Background effects */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"
      />

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-40 right-1/4 w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400/30 to-yellow-500/20 backdrop-blur-sm border border-amber-400/20 hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-48 right-1/3 w-16 h-16 rounded-full bg-emerald-400/20 backdrop-blur-sm border border-white/10 hidden lg:block"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 md:pt-32 md:pb-28 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Trusted Digital Savings Community
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Your Trusted Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">
                Contribution
              </span>{" "}
              Community
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-xl"
            >
              MyTurn helps people save together, grow financially, and access structured
              contribution groups with transparency and trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button variant="gold" size="lg" onClick={() => scrollTo("#groups")}>
                Join a Group
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollTo("#how-it-works")}>
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-4 md:gap-8"
            >
              {HERO_STATS.map((stat) => (
                <motion.div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={"prefix" in stat ? stat.prefix : undefined}
                      suffix={stat.suffix}
                      decimals={stat.value < 10 ? 1 : 0}
                    />
                  </p>
                  <p className="text-xs md:text-sm text-emerald-200/80 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual / floating cards */}
          <div className="relative hidden lg:block h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0.15, 0.25, 0.15], scale: [0.95, 1, 0.95] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative">
                <div className="absolute inset-0 scale-[2.5] rounded-full bg-emerald-400/20 blur-3xl" />
                <Image
                  src="/images/myturn-logo-icon.png"
                  alt="MyTurn Logo"
                  width={888}
                  height={888}
                  unoptimized
                  className="relative h-40 w-40 rounded-full opacity-20 object-contain"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-72 h-80 rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl p-6 flex flex-col justify-between"
              >
                <motion.div
                  className="w-full h-32 rounded-2xl bg-gradient-to-br from-amber-400/40 to-emerald-500/40"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div>
                  <p className="text-white/60 text-sm">Next Payout</p>
                  <p className="text-3xl font-bold text-white">₵4,500</p>
                  <p className="text-amber-300 text-sm mt-1">Student Savings Circle</p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className={`h-2 flex-1 rounded-full ${n <= 3 ? "bg-amber-400" : "bg-white/20"}`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: card.delay }}
                className={`absolute ${card.position}`}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + card.delay, repeat: Infinity }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-emerald-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center"
                  >
                    <card.icon className="w-5 h-5 text-emerald-600" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-gray-500">{card.title}</p>
                    <p className="text-sm font-bold text-emerald-900">{card.value}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f8faf9"
          />
        </svg>
      </div>
    </section>
  );
}
