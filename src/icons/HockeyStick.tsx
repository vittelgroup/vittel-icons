import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HockeyStick: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14ZM16.6667 14L22 2M9 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22.9138 2.40614C23.1381 1.90146 22.9108 1.3105 22.4061 1.08619C21.9015 0.86189 21.3105 1.08918 21.0862 1.59387L16.0168 13L10 13V21L12.7003 21C13.8858 21 14.9602 20.3018 15.4417 19.2184L22.9138 2.40614Z" fill="currentColor"/>
<path d="M8 13V21L6 21C4.34315 21 3 19.6569 3 18V16C3 14.3432 4.34315 13 6 13L8 13Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20Z" fill="currentColor"/>
<path d="M16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14ZM16.6667 14L22 2M9 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20Z" fill="currentColor"/>
<path d="M16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14ZM16.6667 14L22 2M9 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.6667 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H12.7003C13.4906 20 14.2069 19.5345 14.5279 18.8123L16.6667 14ZM16.6667 14L22 2M9 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default HockeyStick;