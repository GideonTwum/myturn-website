"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/data/mockData";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          badge="Testimonials"
          title="What Our Members Say"
          subtitle="Real stories from people who save, grow, and thrive with MyTurn."
          light
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-amber-400/40 absolute top-6 left-6" />
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-white/95 text-center leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-emerald-950 font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-emerald-200/80 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    i === current ? "bg-amber-400 w-8" : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Desktop grid preview */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-16">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              whileHover={{ y: -4 }}
              onClick={() => setCurrent(i)}
              className={cn(
                "p-4 rounded-2xl text-left transition-all border",
                i === current
                  ? "bg-white/20 border-amber-400/50"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              )}
            >
              <p className="text-white/80 text-sm line-clamp-3">&ldquo;{t.text}&rdquo;</p>
              <p className="text-amber-300 text-xs font-semibold mt-3">{t.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
