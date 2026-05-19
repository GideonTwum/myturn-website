import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Brain,
  Briefcase,
  Calendar,
  CalendarCheck,
  CalendarDays,
  FileText,
  Gift,
  GraduationCap,
  Lock,
  MessageCircle,
  Shield,
  SlidersHorizontal,
  Smartphone,
  Sun,
  TrendingUp,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Brain,
  Briefcase,
  Calendar,
  CalendarCheck,
  CalendarDays,
  FileText,
  Gift,
  GraduationCap,
  Lock,
  MessageCircle,
  Shield,
  SlidersHorizontal,
  Smartphone,
  Sun,
  TrendingUp,
  Users,
  Wallet,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Users;
  return <Icon className={className} />;
}
