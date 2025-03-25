import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowDownAZ: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 21L3 17M7 21L11 17M15.5 14H20.5L15.5 21H20.5M16 9H20M15 10L18 3L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20.5716 9H15.4287L18.0001 3L20.5716 9Z" fill="currentColor"/>
<path d="M7 3V21M7 21L3 17M7 21L11 17M15.5 14H20.5L15.5 21H20.5M15.4286 9H20.5714M15 10L18 3L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 21L3 17M7 21L11 17M15.5 14H20.5L15.5 21H20.5M16 9H20M15 10L18 3L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowDownAZ;