import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Archway: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3H3M4 3V21M20 3V21M3 21H8V16C8 13.7909 9.79086 12 12 12C14.2091 12 16 13.7909 16 16V21H21M20 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 6H3V20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H8C8.55228 22 9 21.5523 9 21V16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V21C15 21.5523 15.4477 22 16 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20V6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 21V7H20V21H16V16C16 13.7909 14.2091 12 12 12C9.79086 12 8 13.7909 8 16V21H4Z" fill="currentColor"/>
<path d="M21 3H3M4 3V21M20 3V21M3 21H8V16C8 13.7909 9.79086 12 12 12C14.2091 12 16 13.7909 16 16V21H21M20 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M3 4V6H21V4H3Z" fill="currentColor"/>
<path d="M3 7H21V20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H16C15.4477 22 15 21.5523 15 21V16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16V21C9 21.5523 8.55228 22 8 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20V7Z" fill="currentColor"/>
</g>
<path d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path d="M21 6H3V7H21V6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 3H3M4 3V21M20 3V21M3 21H8V16C8 13.7909 9.79086 12 12 12C14.2091 12 16 13.7909 16 16V21H21M20 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Archway;