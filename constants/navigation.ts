export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Groups", href: "#groups" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Groups", href: "#groups" },
    { label: "Plans", href: "#plans" },
    { label: "Apply", href: "#apply" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Future", href: "#future" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
} as const;
