import React from "react";

interface DRCLogoProps extends React.SVGProps<SVGSVGElement> {
  height?: number | string;
}

const DRCLogo: React.FC<DRCLogoProps> = ({ height = 40, ...props }) => (
  <svg
    viewBox="0 0 300 100"
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    {...props}
  >
    <text
      x="20"
      y="65"
      fontFamily="Arial, sans-serif"
      fontSize="60"
      fontWeight="bold"
      fill="var(--static-text-standard)"
    >
      DRC
    </text>
    <path
      d="M20 75 Q80 85 140 75 Q200 65 240 80 Q260 85 280 80"
      fill="none"
      stroke="#FF9900"
      strokeWidth={4}
      strokeLinecap="round"
    />
  </svg>
);

export default DRCLogo; 