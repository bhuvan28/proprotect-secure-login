import { Lock, Shield, Server, Globe } from "lucide-react";

const indicators = [
  { icon: Lock, label: "256-bit TLS Encryption" },
  { icon: Shield, label: "Zero Trust Architecture" },
  { icon: Server, label: "Self-Hosted Data" },
  { icon: Globe, label: "No Data Egress" },
];

const SecurityIndicators = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {indicators.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="trust-indicator group cursor-default"
          >
            <div className="p-1.5 rounded-md bg-primary/15 group-hover:bg-primary/25 transition-colors duration-300">
              <Icon size={12} className="text-primary" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default SecurityIndicators;
