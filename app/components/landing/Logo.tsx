import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <div className="text-[var(--static-text-strong)] font-bold text-2xl tracking-tighter">DRC</div>
        <div className="h-1 w-full bg-[var(--color-primary)] rounded-full mt-0 mb-1" style={{ transform: "translateY(-4px) scaleY(0.6)" }}></div>
      </div>
      <div className="text-[var(--color-primary)] font-bold text-2xl ml-1">Metric</div>
    </div>
  );
};

export default Logo;