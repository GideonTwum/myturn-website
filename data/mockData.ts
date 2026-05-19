export const HERO_STATS = [
  { label: "Active Groups", value: 248, suffix: "+" },
  { label: "Members", value: 12400, suffix: "+" },
  { label: "Contributions Processed", value: 2.8, suffix: "M", prefix: "₵" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Apply to Join",
    description:
      "Submit your application with basic details and your preferred contribution plan.",
    icon: "FileText",
  },
  {
    step: 2,
    title: "Get Approved",
    description:
      "Our admin team reviews your profile and matches you with a suitable group.",
    icon: "BadgeCheck",
  },
  {
    step: 3,
    title: "Join WhatsApp Group",
    description:
      "Connect with your group members on WhatsApp for updates and coordination.",
    icon: "MessageCircle",
  },
  {
    step: 4,
    title: "Make Contributions",
    description:
      "Contribute on schedule with full transparency and admin supervision.",
    icon: "Wallet",
  },
  {
    step: 5,
    title: "Receive Your Turn",
    description:
      "When it's your turn, receive the pooled contribution securely and on time.",
    icon: "Gift",
  },
  {
    step: 6,
    title: "Grow Financially",
    description:
      "Build discipline, access capital, and grow with a trusted community.",
    icon: "TrendingUp",
  },
] as const;

export const FEATURES = [
  {
    title: "Trusted Community",
    description:
      "Join verified members in structured savings circles built on accountability and trust.",
    icon: "Users",
    gradient: "from-emerald-500/20 to-green-600/10",
  },
  {
    title: "Structured Contributions",
    description:
      "Clear schedules, fixed amounts, and transparent rotation so everyone knows what to expect.",
    icon: "CalendarCheck",
    gradient: "from-amber-400/20 to-yellow-500/10",
  },
  {
    title: "Admin Supervision",
    description:
      "Experienced group admins oversee every cycle, reducing risk and ensuring fairness.",
    icon: "Shield",
    gradient: "from-emerald-600/20 to-teal-500/10",
  },
  {
    title: "Flexible Plans",
    description:
      "Daily, weekly, or monthly contribution options tailored to your income and goals.",
    icon: "SlidersHorizontal",
    gradient: "from-lime-400/20 to-green-500/10",
  },
  {
    title: "Future Digital Platform",
    description:
      "We're building a full app with wallets, tracking, and analytics — join early.",
    icon: "Smartphone",
    gradient: "from-yellow-400/20 to-amber-500/10",
  },
  {
    title: "Smart Financial Discipline",
    description:
      "Regular contributions build habits that lead to long-term financial stability.",
    icon: "Brain",
    gradient: "from-green-500/20 to-emerald-400/10",
  },
] as const;

export type GroupCategory = "featured" | "recent" | "trending";

export interface SavingsGroup {
  id: string;
  name: string;
  contributionAmount: string;
  frequency: string;
  members: number;
  maxMembers: number;
  availableSlots: number;
  description: string;
  category: GroupCategory;
  tags: string[];
  badge?: string;
  imageGradient: string;
}

export const SAVINGS_GROUPS: SavingsGroup[] = [
  {
    id: "1",
    name: "Student Savings Circle",
    contributionAmount: "₵50",
    frequency: "Weekly",
    members: 18,
    maxMembers: 20,
    availableSlots: 2,
    description:
      "Perfect for university students building emergency funds together with low weekly commitments.",
    category: "featured",
    tags: ["Students", "Weekly"],
    badge: "Featured",
    imageGradient: "from-emerald-400 via-green-500 to-teal-600",
  },
  {
    id: "2",
    name: "Women Entrepreneurs Group",
    contributionAmount: "₵200",
    frequency: "Monthly",
    members: 12,
    maxMembers: 15,
    availableSlots: 3,
    description:
      "Empowering women in business with monthly pooled capital for inventory and growth.",
    category: "featured",
    tags: ["Business", "Women"],
    badge: "Featured",
    imageGradient: "from-amber-400 via-yellow-500 to-orange-500",
  },
  {
    id: "3",
    name: "Daily Hustlers Plan",
    contributionAmount: "₵20",
    frequency: "Daily",
    members: 25,
    maxMembers: 30,
    availableSlots: 5,
    description:
      "For market traders and daily earners who prefer small, consistent daily contributions.",
    category: "trending",
    tags: ["Daily", "Popular"],
    badge: "Trending",
    imageGradient: "from-lime-400 via-green-500 to-emerald-600",
  },
  {
    id: "4",
    name: "Weekly Business Contribution",
    contributionAmount: "₵150",
    frequency: "Weekly",
    members: 10,
    maxMembers: 12,
    availableSlots: 2,
    description:
      "Structured weekly savings for shop owners and SMEs seeking working capital rotation.",
    category: "trending",
    tags: ["Business", "Weekly"],
    badge: "Hot",
    imageGradient: "from-green-600 via-emerald-500 to-teal-500",
  },
  {
    id: "5",
    name: "Young Professionals Fund",
    contributionAmount: "₵100",
    frequency: "Bi-weekly",
    members: 8,
    maxMembers: 10,
    availableSlots: 2,
    description:
      "Corporate workers saving for rent, gadgets, or investment goals with bi-weekly cycles.",
    category: "recent",
    tags: ["Professionals", "New"],
    badge: "New",
    imageGradient: "from-teal-400 via-cyan-500 to-emerald-500",
  },
  {
    id: "6",
    name: "Family Builders Circle",
    contributionAmount: "₵300",
    frequency: "Monthly",
    members: 6,
    maxMembers: 8,
    availableSlots: 2,
    description:
      "Families and couples pooling monthly for school fees, rent, or major purchases.",
    category: "recent",
    tags: ["Family", "Monthly"],
    badge: "New",
    imageGradient: "from-yellow-400 via-amber-400 to-green-500",
  },
  {
    id: "7",
    name: "Tech Startup Savers",
    contributionAmount: "₵250",
    frequency: "Weekly",
    members: 14,
    maxMembers: 16,
    availableSlots: 2,
    description:
      "Founders and freelancers in tech saving for equipment, courses, and runway.",
    category: "featured",
    tags: ["Tech", "Weekly"],
    imageGradient: "from-emerald-500 via-green-600 to-lime-500",
  },
  {
    id: "8",
    name: "Market Women Alliance",
    contributionAmount: "₵75",
    frequency: "Weekly",
    members: 20,
    maxMembers: 20,
    availableSlots: 0,
    description:
      "Established group for market women — join the waitlist for the next cycle.",
    category: "trending",
    tags: ["Full", "Waitlist"],
    imageGradient: "from-orange-400 via-amber-500 to-yellow-500",
  },
];

export const FLYERS = [
  {
    id: "f1",
    title: "New Student Circle Opening",
    subtitle: "₵50 Weekly · 20 Slots",
    gradient: "from-emerald-500 to-green-700",
    date: "May 2026",
  },
  {
    id: "f2",
    title: "Women in Business — May Batch",
    subtitle: "₵200 Monthly · Apply Now",
    gradient: "from-amber-400 to-yellow-600",
    date: "May 2026",
  },
  {
    id: "f3",
    title: "Daily Hustlers — Accra Zone",
    subtitle: "₵20 Daily · Limited Slots",
    gradient: "from-lime-500 to-emerald-600",
    date: "Apr 2026",
  },
  {
    id: "f4",
    title: "Refer & Earn Program",
    subtitle: "Bring 3 friends, get priority",
    gradient: "from-green-600 to-teal-600",
    date: "Ongoing",
  },
  {
    id: "f5",
    title: "Business Owners Weekly Plan",
    subtitle: "₵150 · Starts June 1",
    gradient: "from-yellow-500 to-orange-500",
    date: "Jun 2026",
  },
  {
    id: "f6",
    title: "MyTurn Mobile App Beta",
    subtitle: "Join the waitlist today",
    gradient: "from-teal-500 to-emerald-700",
    date: "Coming Soon",
  },
] as const;

export const CONTRIBUTION_PLANS = [
  {
    id: "daily",
    name: "Daily Contribution",
    amount: "₵10 – ₵50",
    audience: "Market traders, daily earners",
    duration: "30–90 day cycles",
    benefits: ["Small daily amounts", "Quick rotation", "Build daily discipline"],
    popular: false,
    icon: "Sun",
  },
  {
    id: "weekly",
    name: "Weekly Contribution",
    amount: "₵50 – ₵200",
    audience: "Students, employees, SMEs",
    duration: "8–16 week cycles",
    benefits: ["Balanced commitment", "Flexible scheduling", "Most popular option"],
    popular: true,
    icon: "Calendar",
  },
  {
    id: "monthly",
    name: "Monthly Contribution",
    amount: "₵200 – ₵1,000",
    audience: "Professionals, families",
    duration: "6–12 month cycles",
    benefits: ["Larger payouts", "Long-term goals", "Premium groups"],
    popular: false,
    icon: "CalendarDays",
  },
  {
    id: "business",
    name: "Business Plan",
    amount: "₵150 – ₵500",
    audience: "Entrepreneurs & shop owners",
    duration: "Custom cycles",
    benefits: ["Working capital focus", "Business networking", "Admin mentorship"],
    popular: false,
    icon: "Briefcase",
  },
  {
    id: "student",
    name: "Student Plan",
    amount: "₵30 – ₵80",
    audience: "University & college students",
    duration: "Semester-based",
    benefits: ["Low entry barrier", "Campus groups", "Financial literacy"],
    popular: false,
    icon: "GraduationCap",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Ama Serwaa",
    role: "Market Trader, Kumasi",
    avatar: "AS",
    rating: 5,
    text: "MyTurn helped me save consistently for the first time. I received my turn on schedule and used it to restock my shop.",
  },
  {
    id: "t2",
    name: "Kwame Mensah",
    role: "Software Developer, Accra",
    avatar: "KM",
    rating: 5,
    text: "Transparent process, great admin support, and a community that actually holds you accountable. Highly recommend.",
  },
  {
    id: "t3",
    name: "Efua Boateng",
    role: "Student, University of Ghana",
    avatar: "EB",
    rating: 5,
    text: "The student circle was perfect for my budget. Small weekly amounts added up to something meaningful by semester end.",
  },
  {
    id: "t4",
    name: "Yaw Osei",
    role: "Small Business Owner",
    avatar: "YO",
    rating: 4,
    text: "Structured contributions gave my business a cash flow boost when I needed it most. Professional and trustworthy.",
  },
] as const;

export const FUTURE_FEATURES = [
  {
    title: "Mobile App",
    description: "iOS & Android apps for contributions, tracking, and group chat.",
    icon: "Smartphone",
  },
  {
    title: "Automated Tracking",
    description: "Real-time contribution logs and turn schedules at a glance.",
    icon: "Activity",
  },
  {
    title: "Wallet System",
    description: "Secure in-app wallet for seamless contributions and payouts.",
    icon: "Wallet",
  },
  {
    title: "Notifications",
    description: "Reminders for due dates, approvals, and your upcoming turn.",
    icon: "Bell",
  },
  {
    title: "Analytics Dashboard",
    description: "Insights into savings habits, group performance, and growth.",
    icon: "BarChart3",
  },
  {
    title: "Secure Payments",
    description: "Integrated mobile money and bank transfers with encryption.",
    icon: "Lock",
  },
] as const;

export const REGIONS = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Northern",
  "Volta",
  "Other",
] as const;

export const PLAN_OPTIONS = [
  "Daily Contribution",
  "Weekly Contribution",
  "Monthly Contribution",
  "Business Plan",
  "Student Plan",
] as const;

export const FREQUENCY_OPTIONS = ["Daily", "Weekly", "Bi-weekly", "Monthly"] as const;
