import { Shield, Server, Ban } from "lucide-react";

interface TrustIndicatorsProps {
  variant?: "light" | "dark";
}

export function TrustIndicators({ variant = "dark" }: TrustIndicatorsProps) {
  const indicators = [
    { icon: Ban, label: "Zero Data Egress" },
    { icon: Shield, label: "Enterprise-Grade" },
    { icon: Server, label: "Self-Hosted" },
  ];

  const badgeClass = variant === "dark" 
    ? "trust-badge" 
    : "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#2D7DD2]/10 text-[#2D7DD2] border border-[#2D7DD2]/20";

  return (
    <div className="flex flex-wrap gap-2">
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <div key={index} className={badgeClass}>
            <Icon className="w-3.5 h-3.5" />
            <span>{indicator.label}</span>
          </div>
        );
      })}
    </div>
  );
}
