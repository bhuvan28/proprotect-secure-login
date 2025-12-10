import { useState } from "react";
import ProProtectLogo from "@/components/ProProtectLogo";
import LoginForm from "@/components/LoginForm";
import { NetworkAnimation } from "@/components/NetworkAnimation";
import { TrustIndicators } from "@/components/TrustIndicators";
import { Shield, Lock, ExternalLink } from "lucide-react";

const Index = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Dark Brand Panel */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] dark-panel hexagon-pattern relative flex-col justify-between p-10 xl:p-14">
        {/* Network Animation Background */}
        <NetworkAnimation />
        
        {/* Logo */}
        <div className="relative z-10">
          <ProProtectLogo size="lg" />
        </div>
        
        {/* Center Content */}
        <div className="relative z-10 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
              Enterprise Cloud Security
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-md">
              Self-hosted CloudOps, DevSecOps and FinOps automation. 
              Complete visibility with zero data egress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-primary">98.9%</p>
              <p className="text-xs text-white/60 mt-1">MTTD Reduction</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-primary">25%</p>
              <p className="text-xs text-white/60 mt-1">Cost Savings</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <p className="text-2xl font-bold text-primary">&lt;5min</p>
              <p className="text-xs text-white/60 mt-1">MTTR</p>
            </div>
          </div>

          {/* Floating Security Icons */}
          <div className="flex items-center gap-6 pt-4">
            <div className="p-3 rounded-lg bg-primary/20 float-animation">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-lg bg-primary/20 float-animation" style={{ animationDelay: '1s' }}>
              <Lock className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative z-10 space-y-4">
          <TrustIndicators />
          <p className="text-xs text-white/40">
            © 2024 ProProtect. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 light-panel flex items-center justify-center p-6 lg:p-12 min-h-screen lg:min-h-0">
        <div className="w-full max-w-[420px]">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <ProProtectLogo size="md" />
          </div>

          {/* Login Card */}
          <div className="login-card p-8 lg:p-10 animate-slide-up">
            {/* Header */}
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl lg:text-[28px] font-bold text-[#2D3748]">
                Welcome Back
              </h2>
              <p className="text-sm text-[#718096]">
                Enter your credentials to access your dashboard
              </p>
            </div>

            {/* Form */}
            <LoginForm 
              onToggleMode={() => setIsSignUp(!isSignUp)} 
              isSignUp={isSignUp}
            />

            {/* Security Badge */}
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-1.5 security-badge">
                <Lock className="w-3 h-3" />
                <span>256-bit SSL Encryption</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-[#718096]">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
              Contact Support
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">System Status</a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>

          {/* Version */}
          <p className="mt-4 text-center text-[11px] text-[#CBD5E0]">
            ProProtect v4.5.2
          </p>

          {/* Mobile Trust Indicators */}
          <div className="lg:hidden mt-8">
            <TrustIndicators variant="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
