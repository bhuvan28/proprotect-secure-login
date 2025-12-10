import { Shield } from "lucide-react";

interface ProProtectLogoProps {
  size?: "sm" | "md" | "lg";
}

const ProProtectLogo = ({ size = "md" }: ProProtectLogoProps) => {
  const sizes = {
    sm: { icon: 20, text: "text-lg" },
    md: { icon: 28, text: "text-2xl" },
    lg: { icon: 36, text: "text-3xl" },
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full animate-pulse-slow" />
        <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
          <Shield 
            size={sizes[size].icon} 
            className="text-primary" 
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`${sizes[size].text} font-bold text-foreground tracking-tight`}>
          ProProtect
          <span className="text-primary">.</span>
        </span>
        {size !== "sm" && (
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Cloud Security
          </span>
        )}
      </div>
    </div>
  );
};

export default ProProtectLogo;
