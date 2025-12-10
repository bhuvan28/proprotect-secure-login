import { useMemo } from "react";
import { Check, X } from "lucide-react";

interface PasswordStrengthMeterProps {
  password: string;
}

interface Requirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: Requirement[] = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

const PasswordStrengthMeter = ({ password }: PasswordStrengthMeterProps) => {
  const { strength, passed } = useMemo(() => {
    const passedRequirements = requirements.filter((req) => req.test(password));
    return {
      strength: (passedRequirements.length / requirements.length) * 100,
      passed: passedRequirements.length,
    };
  }, [password]);

  const getStrengthColor = () => {
    if (strength <= 20) return "bg-destructive";
    if (strength <= 40) return "bg-warning";
    if (strength <= 60) return "bg-warning";
    if (strength <= 80) return "bg-info";
    return "bg-success";
  };

  const getStrengthLabel = () => {
    if (strength <= 20) return "Weak";
    if (strength <= 40) return "Fair";
    if (strength <= 60) return "Good";
    if (strength <= 80) return "Strong";
    return "Excellent";
  };

  if (!password) return null;

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="text-muted-foreground">Password Strength</span>
          <span className={`font-medium ${strength >= 80 ? "text-success" : "text-muted-foreground"}`}>
            {getStrengthLabel()}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className={`strength-bar ${getStrengthColor()}`}
            style={{ width: `${strength}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-1.5">
        {requirements.map((req, idx) => {
          const isPassed = req.test(password);
          return (
            <div
              key={idx}
              className={`flex items-center gap-2 text-xs transition-colors duration-300 ${
                isPassed ? "text-success" : "text-muted-foreground"
              }`}
            >
              {isPassed ? (
                <Check size={12} className="text-success" />
              ) : (
                <X size={12} className="text-muted-foreground/50" />
              )}
              <span>{req.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
