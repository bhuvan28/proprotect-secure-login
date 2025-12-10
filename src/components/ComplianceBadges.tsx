import { Shield, CheckCircle } from "lucide-react";

const badges = [
  { name: "SOC 2", certified: true },
  { name: "ISO 27001", certified: true },
  { name: "GDPR", certified: true },
  { name: "HIPAA", certified: true },
];

const ComplianceBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {badges.map((badge) => (
        <div
          key={badge.name}
          className="compliance-badge group hover:border-primary/50 transition-colors duration-300"
        >
          <CheckCircle size={12} className="text-success" />
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
  );
};

export default ComplianceBadges;
