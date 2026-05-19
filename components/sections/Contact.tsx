"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Share2, Globe, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/motion/FadeInView";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+233 24 000 0000",
    href: "https://wa.me/233240000000",
    color: "bg-green-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@myturn.app",
    href: "mailto:hello@myturn.app",
    color: "bg-emerald-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 30 000 0000",
    href: "tel:+233300000000",
    color: "bg-amber-500",
  },
];

const socials = [
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Chat" },
];

export function Contact() {
  const scrollToApply = () => {
    document.querySelector("#apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Contact Us"
          subtitle="Have questions? Reach out — we're here to help you find the right group."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeInView>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-emerald-100 shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{method.label}</p>
                    <p className="font-semibold text-emerald-900 group-hover:text-emerald-600 transition-colors">
                      {method.value}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-emerald-500 transition-colors" />
                </motion.a>
              ))}

              <div className="flex gap-3 pt-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 hover:bg-emerald-50 shadow-sm transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-800 to-green-700 text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 w-48 h-48 bg-amber-400/30 rounded-full blur-3xl"
              />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to start saving?</h3>
                <p className="text-emerald-100/90 mb-8 leading-relaxed">
                  Apply today and join a verified contribution group. No fees to apply — just fill
                  out the form and we&apos;ll guide you from there.
                </p>
                <Button variant="gold" size="lg" onClick={scrollToApply}>
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
