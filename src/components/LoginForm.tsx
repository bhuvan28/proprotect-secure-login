import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, AlertTriangle, Loader2, Shield, CheckCircle } from "lucide-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  password: z.string().min(1, "Password is required").max(128, "Password must be less than 128 characters"),
});

interface LoginFormProps {
  onToggleMode: () => void;
  isSignUp: boolean;
}

const LoginForm = ({ onToggleMode, isSignUp }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    try {
      loginSchema.parse({ email, password });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string } = {};
        err.errors.forEach((error) => {
          if (error.path[0] === "email") fieldErrors.email = error.message;
          if (error.path[0] === "password") fieldErrors.password = error.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: isSignUp ? "Account created" : "Welcome back",
      description: isSignUp 
        ? "Please check your email to verify your account."
        : "Successfully authenticated. Redirecting to dashboard...",
    });

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#2D3748]">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#718096]" />
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            className={`form-input ${errors.email ? 'error' : ''}`}
            aria-label="Email address"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </div>
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive flex items-center gap-1 animate-fade-in" role="alert">
            <AlertTriangle className="w-3 h-3" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#2D3748]">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#718096]" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: undefined });
            }}
            className={`form-input pr-12 ${errors.password ? 'error' : ''}`}
            aria-label="Password"
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718096] hover:text-[#4A5568] transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
          </button>
        </div>
        {errors.password && (
          <p id="password-error" className="text-xs text-destructive flex items-center gap-1 animate-fade-in" role="alert">
            <AlertTriangle className="w-3 h-3" />
            {errors.password}
          </p>
        )}
      </div>

      {isSignUp && <PasswordStrengthMeter password={password} />}

      {/* Remember Me & Forgot Password */}
      {!isSignUp && (
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-[#E2E8F0] text-primary focus:ring-primary/50 cursor-pointer"
              aria-label="Keep me signed in"
            />
            <span className="text-sm text-[#718096] group-hover:text-[#4A5568] transition-colors">
              Keep me signed in
            </span>
          </label>
          <button
            type="button"
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Forgot password?
          </button>
        </div>
      )}

      {/* MFA Indicator */}
      <div className="flex items-center gap-2 text-xs text-success">
        <Shield className="w-3.5 h-3.5" />
        <span>MFA enabled for this account</span>
        <CheckCircle className="w-3 h-3" />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary flex items-center justify-center gap-2"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-[18px] h-[18px] animate-spin" />
            <span>{isSignUp ? "Creating Account..." : "Signing in..."}</span>
          </>
        ) : (
          <>
            <span>{isSignUp ? "Create Account" : "Sign In"}</span>
            <ArrowRight className="w-[18px] h-[18px]" />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#E2E8F0]" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-3 bg-white text-[#718096]">Or</span>
        </div>
      </div>

      {/* SSO Button */}
      <button
        type="button"
        className="btn-outline flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Sign in with SSO
      </button>

      {/* Toggle Sign In / Sign Up */}
      <p className="text-center text-sm text-[#718096] pt-2">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          onClick={onToggleMode}
          className="text-primary hover:text-primary/80 transition-colors font-medium"
        >
          {isSignUp ? "Sign in" : "Contact your administrator"}
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
