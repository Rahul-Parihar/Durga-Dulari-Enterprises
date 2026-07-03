import React from 'react';
import {
  Users,
  Wrench,
  Zap,
  Droplets,
  Building2,
  Truck,
  CheckCircle,
  Brain,
  Cpu,
  Package,
  RotateCcw,
  Factory,
  Shirt,
  Grid3x3,
  BarChart3,
  Calculator,
  ShieldCheck,
  Clock,
  TrendingUp,
  MapPin,
  Award,
  Settings,
  LucideProps,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Users,
  Wrench,
  Zap,
  Droplets,
  Droplet: Droplets, // alias
  Building2,
  Truck,
  CheckCircle,
  Brain,
  Cpu,
  Package,
  RotateCcw,
  Factory,
  Shirt,
  Grid3x3,
  BarChart3,
  Calculator,
  ShieldCheck,
  Clock,
  TrendingUp,
  MapPin,
  Award,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Settings;
  return <IconComponent className={className} size={size} />;
}
export default DynamicIcon;
