"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-800 text-white shadow-2xl shadow-emerald-900/30 border border-emerald-600/50"
        >
          <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
          <p className="font-medium">{message}</p>
          <button onClick={onClose} className="ml-2 p-1 hover:bg-white/10 rounded-lg" aria-label="Dismiss">
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
