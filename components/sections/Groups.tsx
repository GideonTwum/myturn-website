"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GroupCard } from "@/components/sections/GroupCard";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { SAVINGS_GROUPS, type SavingsGroup, type GroupCategory } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

type FilterTab = "all" | GroupCategory;

const TABS: { id: FilterTab; label: string }[] = [
  { id: "all", label: "All Groups" },
  { id: "featured", label: "Featured" },
  { id: "recent", label: "Recently Added" },
  { id: "trending", label: "Trending" },
];

export function Groups() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedGroup, setSelectedGroup] = useState<SavingsGroup | null>(null);

  const filtered =
    activeTab === "all"
      ? SAVINGS_GROUPS
      : SAVINGS_GROUPS.filter((g) => g.category === activeTab);

  const featured = SAVINGS_GROUPS.filter((g) => g.category === "featured").slice(0, 3);

  return (
    <section id="groups" className="py-20 md:py-28 bg-gradient-to-b from-[#f8faf9] to-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Opportunities"
          title="Contribution Groups"
          subtitle="Browse active savings circles — featured picks, new openings, and trending groups near you."
        />

        {/* Featured highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-green-700 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-amber-300 mb-2">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Featured Groups</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">
                {featured.length} hand-picked circles open for applications
              </h3>
              <p className="mt-2 text-emerald-100/90 max-w-xl">
                Verified admins, transparent schedules, and limited slots — apply before they fill up.
              </p>
            </div>
            <Button
              variant="gold"
              size="md"
              onClick={() => {
                setActiveTab("featured");
                document.querySelector("#groups-grid")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Featured
            </Button>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {TABS.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === tab.id
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                  : "bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50"
              )}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <div id="groups-grid">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((group) => (
                <GroupCard
                  key={group.id}
                  group={group}
                  onApply={(g) => setSelectedGroup(g)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No groups in this category right now.</p>
        )}
      </div>

      <Modal
        isOpen={!!selectedGroup}
        onClose={() => setSelectedGroup(null)}
        title={selectedGroup?.name}
      >
        {selectedGroup && (
          <div className="p-6">
            <div
              className={cn(
                "h-32 rounded-2xl bg-gradient-to-br mb-6",
                selectedGroup.imageGradient
              )}
            />
            <p className="text-gray-600 mb-6">{selectedGroup.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <motion.div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-500">Amount</span>
                <p className="font-bold text-emerald-800">{selectedGroup.contributionAmount}</p>
              </motion.div>
              <motion.div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-500">Frequency</span>
                <p className="font-bold">{selectedGroup.frequency}</p>
              </motion.div>
              <motion.div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-500">Members</span>
                <p className="font-bold">
                  {selectedGroup.members}/{selectedGroup.maxMembers}
                </p>
              </motion.div>
              <motion.div className="p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-500">Slots</span>
                <p className="font-bold">{selectedGroup.availableSlots} available</p>
              </motion.div>
            </div>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setSelectedGroup(null);
                document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Continue to Application
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
