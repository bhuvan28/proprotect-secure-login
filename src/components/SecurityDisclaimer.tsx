import { Shield, AlertTriangle, ExternalLink } from "lucide-react";

const SecurityDisclaimer = () => {
  return (
    <div className="space-y-4 pt-6 border-t border-border/50">
      <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
        <Shield size={16} className="text-primary mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-foreground/90">
            Enterprise Security Notice
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            This portal is protected by enterprise-grade security measures including 
            multi-factor authentication, rate limiting, and anomaly detection.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/5 border border-warning/20">
        <AlertTriangle size={16} className="text-warning mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-xs font-medium text-foreground/90">
            Authorized Access Only
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Unauthorized access attempts are logged and reported. By signing in, 
            you agree to our security monitoring policies.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          Privacy Policy
          <ExternalLink size={10} />
        </a>
        <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          Terms of Service
          <ExternalLink size={10} />
        </a>
        <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          Security
          <ExternalLink size={10} />
        </a>
        <a href="#" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          Status
          <ExternalLink size={10} />
        </a>
      </div>

      <p className="text-center text-[10px] text-muted-foreground/60">
        © {new Date().getFullYear()} ProProtect.io • All rights reserved • v2.4.1
      </p>
    </div>
  );
};

export default SecurityDisclaimer;
