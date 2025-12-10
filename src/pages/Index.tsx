import { useState } from "react";
import ProProtectLogo from "@/components/ProProtectLogo";
import LoginForm from "@/components/LoginForm";
import ComplianceBadges from "@/components/ComplianceBadges";
import SecurityIndicators from "@/components/SecurityIndicators";
import SecurityDisclaimer from "@/components/SecurityDisclaimer";

const Index = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 security-grid opacity-30" />
      <div className="fixed inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] flex-col justify-between p-12 xl:p-16">
          <div>
            <ProProtectLogo size="lg" />
          </div>
          
          <div className="max-w-xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight">
                Your Cloud.
                <br />
                <span className="text-gradient">Your Control.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enterprise-grade cloud security that runs entirely within your infrastructure. 
                Complete visibility, AI-powered insights, and audit-ready compliance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-1">
                <p className="text-2xl xl:text-3xl font-bold text-gradient">98.9%</p>
                <p className="text-sm text-muted-foreground">MTTD Reduction</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl xl:text-3xl font-bold text-gradient">25%</p>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl xl:text-3xl font-bold text-gradient">&lt;5min</p>
                <p className="text-sm text-muted-foreground">Mean Time to Remediate</p>
              </div>
            </div>

            <SecurityIndicators />
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Trusted by security-conscious organizations worldwide
            </p>
            <ComplianceBadges />
          </div>
        </div>

        {/* Right side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 flex justify-center">
              <ProProtectLogo size="md" />
            </div>

            <div className="glass-card p-8 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {isSignUp 
                    ? "Start your security journey with ProProtect"
                    : "Sign in to access your security dashboard"
                  }
                </p>
              </div>

              <LoginForm 
                onToggleMode={() => setIsSignUp(!isSignUp)} 
                isSignUp={isSignUp}
              />

              <SecurityDisclaimer />
            </div>

            {/* Mobile Compliance */}
            <div className="lg:hidden mt-8 space-y-4">
              <SecurityIndicators />
              <ComplianceBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
