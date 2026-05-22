"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/Button";
import { MyTurnLogo } from "@/components/ui/MyTurnLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-emerald-900/5 border-b border-emerald-100/50"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="flex items-center justify-between h-16 md:h-20"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center shrink-0"
            aria-label="MyTurn home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:block"
            >
              <MyTurnLogo
                variant="wordmark"
                size="md"
                textTheme={scrolled ? "dark" : "light"}
                priority
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden"
            >
              <MyTurnLogo variant="icon" size="md" priority />
            </motion.div>
          </a>

          <motion.div
            layout
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-amber-400",
                  scrolled ? "text-emerald-800 hover:text-emerald-600" : "text-white/90"
                )}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          <div className="hidden lg:block">
            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNavClick("#apply")}
            >
              Apply Now
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              scrolled ? "text-emerald-800 hover:bg-emerald-50" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-emerald-100 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center pb-4 mb-2 border-b border-emerald-100"
              >
                <MyTurnLogo variant="wordmark" size="lg" textTheme="dark" />
              </motion.div>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-emerald-800 font-medium py-2 hover:text-emerald-600"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button variant="gold" size="md" className="w-full mt-2" onClick={() => handleNavClick("#apply")}>
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
