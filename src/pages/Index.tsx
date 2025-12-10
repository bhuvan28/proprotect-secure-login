import { useState } from "react";
import ProProtectLogo from "@/components/ProProtectLogo";
import LoginForm from "@/components/LoginForm";
import ComplianceBadges from "@/components/ComplianceBadges";
import SecurityIndicators from "@/components/SecurityIndicators";
import SecurityDisclaimer from "@/components/SecurityDisclaimer";
import { Shield, Lock, Server } from "lucide-react";

const Index = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 security-grid opacity-60" />
      <div className="fixed inset-0 pointer-events-none">
        {/* Teal gradient glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Floating security icons */}
        <div className="absolute top-24 left-12 opacity-10 floating-shield hidden lg:block">
          <Shield className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-48 right-24 opacity-10 floating-shield hidden lg:block" style={{ animationDelay: '2s' }}>
          <Lock className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute bottom-40 left-24 opacity-10 floating-shield hidden lg:block" style={{ animationDelay: '4s' }}>
          <Server className="w-14 h-14 text-primary" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] flex-col justify-between p-12 xl:p-16">
          <div>
            <ProProtectLogo size="lg" />
          </div>
          
          <div className="max-w-xl space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-foreground">
                Your Cloud.
                <br />
                <span className="text-gradient">Your Control.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enterprise-grade cloud security that runs entirely within your infrastructure. 
                Complete visibility, AI-powered insights, and audit-ready compliance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1 p-4 rounded-xl bg-card/60 border border-border/50 shadow-soft">
                <p className="text-2xl xl:text-3xl font-bold text-primary">98.9%</p>
                <p className="text-sm text-muted-foreground">MTTD Reduction</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-card/60 border border-border/50 shadow-soft">
                <p className="text-2xl xl:text-3xl font-bold text-primary">25%</p>
                <p className="text-sm text-muted-foreground">Cost Savings</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-card/60 border border-border/50 shadow-soft">
                <p className="text-2xl xl:text-3xl font-bold text-primary">&lt;5min</p>
                <p className="text-sm text-muted-foreground">MTTR</p>
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

            <div className="glass-card teal-glow p-8 space-y-6">
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
