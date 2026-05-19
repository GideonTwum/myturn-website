"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Modal } from "@/components/ui/Modal";
import { FLYERS } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Megaphone, Calendar } from "lucide-react";

export function FlyerShowcase() {
  const [selectedFlyer, setSelectedFlyer] = useState<(typeof FLYERS)[number] | null>(null);

  return (
    <section id="flyers" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Announcements"
          title="Latest Opportunities & Announcements"
          subtitle="Promotional flyers and group openings — click any card to preview."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLYERS.map((flyer, index) => (
            <motion.button
              key={flyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              onClick={() => setSelectedFlyer(flyer)}
              className="group text-left rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <div
                className={cn(
                  "relative aspect-[3/4] bg-gradient-to-br p-6 flex flex-col justify-between overflow-hidden",
                  flyer.gradient
                )}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyek0zNiAxNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                />
                <div className="relative">
                  <Megaphone className="w-8 h-8 text-white/80 mb-4" />
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                    <Calendar className="w-3 h-3" />
                    {flyer.date}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-white leading-tight">{flyer.title}</h3>
                  <p className="text-white/90 text-sm mt-2">{flyer.subtitle}</p>
                  <p className="mt-4 text-xs text-white/70 uppercase tracking-widest group-hover:text-amber-200 transition-colors">
                    Click to preview →
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedFlyer} onClose={() => setSelectedFlyer(null)}>
        {selectedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "aspect-[3/4] min-h-[400px] bg-gradient-to-br p-10 flex flex-col justify-between",
              selectedFlyer.gradient
            )}
          >
            <Megaphone className="w-12 h-12 text-white/80" />
            <div>
              <span className="text-white/80 text-sm">{selectedFlyer.date}</span>
              <h2 className="text-3xl font-bold text-white mt-2">{selectedFlyer.title}</h2>
              <p className="text-xl text-white/90 mt-4">{selectedFlyer.subtitle}</p>
              <p className="text-white/70 mt-8 text-sm">
                This is a promotional flyer preview. Full details available upon application.
              </p>
            </div>
          </motion.div>
        )}
      </Modal>
    </section>
  );
}
