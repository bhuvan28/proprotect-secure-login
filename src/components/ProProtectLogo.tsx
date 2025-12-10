import proprotectLogo from "@/assets/proprotect-logo.svg";

interface ProProtectLogoProps {
  size?: "sm" | "md" | "lg";
}

const ProProtectLogo = ({ size = "md" }: ProProtectLogoProps) => {
  const sizes = {
    sm: { width: 140, height: 43 },
    md: { width: 200, height: 61 },
    lg: { width: 280, height: 86 },
  };

  return (
    <div className="flex items-center">
      <img 
        src={proprotectLogo} 
        alt="ProProtect - Enterprise Cloud Security"
        width={sizes[size].width}
        height={sizes[size].height}
        className="h-auto"
      />
    </div>
  );
};

export default ProProtectLogo;
