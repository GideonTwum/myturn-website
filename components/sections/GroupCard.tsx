"use client";

import { motion } from "framer-motion";
import { Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { SavingsGroup } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface GroupCardProps {
  group: SavingsGroup;
  onApply: (group: SavingsGroup) => void;
}

export function GroupCard({ group, onApply }: GroupCardProps) {
  const isFull = group.availableSlots === 0;
  const fillPercent = (group.members / group.maxMembers) * 100;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col h-full rounded-3xl bg-white border border-emerald-100 overflow-hidden shadow-lg shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-500/15 transition-all duration-300"
    >
      <div className={cn("relative h-36 bg-gradient-to-br", group.imageGradient)}>
        <div className="absolute inset-0 bg-black/10" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
        {group.badge && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-emerald-800 backdrop-blur-sm">
            {group.badge}
          </span>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">{group.name}</h3>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <motion.div className="flex flex-wrap gap-2 mb-4">
          {group.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 rounded-xl bg-emerald-50/80">
            <p className="text-xs text-gray-500">Contribution</p>
            <p className="text-lg font-bold text-emerald-800">{group.contributionAmount}</p>
          </div>
          <div className="p-3 rounded-xl bg-amber-50/80">
            <p className="text-xs text-gray-500">Frequency</p>
            <p className="text-lg font-bold text-amber-800">{group.frequency}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{group.description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4 text-emerald-500" />
            {group.members}/{group.maxMembers}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-amber-500" />
            {group.availableSlots} slots left
          </span>
        </div>

        <div className="mb-4">
          <motion.div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${fillPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={cn(
                "h-full rounded-full",
                isFull ? "bg-gray-400" : "bg-gradient-to-r from-emerald-500 to-green-500"
              )}
            />
          </motion.div>
        </div>

        <Button
          variant={isFull ? "secondary" : "primary"}
          size="sm"
          className="w-full"
          disabled={isFull}
          onClick={() => onApply(group)}
        >
          {isFull ? "Join Waitlist" : "Apply to Join"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.article>
  );
}
