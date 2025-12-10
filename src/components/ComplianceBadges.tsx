import { CheckCircle } from "lucide-react";

const badges = ["CIS", "NIST", "PCI-DSS", "HIPAA", "GDPR"];

const ComplianceBadges = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
      {badges.map((badge) => (
        <div
          key={badge}
          className="compliance-badge group hover:border-primary/50 transition-colors duration-300"
        >
          {badge}
          <CheckCircle size={12} className="text-primary" />
        </div>
      ))}
    </div>
  );
};

export default ComplianceBadges;
