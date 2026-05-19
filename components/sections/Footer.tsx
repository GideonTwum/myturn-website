"use client";

import { Sparkles } from "lucide-react";
import { FOOTER_LINKS } from "@/constants/navigation";

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#home");
              }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-xl font-bold text-white">
                My<span className="text-amber-400">Turn</span>
              </span>
            </a>
            <p className="text-emerald-200/80 text-sm leading-relaxed max-w-sm mb-6">
              Your trusted digital contribution community. Save together, grow financially, and
              access structured savings groups with transparency.
            </p>
            <p className="text-xs text-emerald-400/60">
              © {new Date().getFullYear()} MyTurn. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-emerald-200/80 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-emerald-200/80 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-emerald-200/80 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-800">
          <p className="text-xs text-emerald-400/50 leading-relaxed max-w-4xl">
            <strong className="text-emerald-300/70">Disclaimer:</strong> MyTurn facilitates
            community contribution groups and does not provide regulated banking or investment
            services. Participation involves financial commitment. Please review group terms before
            joining. Past performance of groups does not guarantee future results. This website is
            for informational purposes; always verify group details with administrators.
          </p>
        </div>
      </div>
    </footer>
  );
}
