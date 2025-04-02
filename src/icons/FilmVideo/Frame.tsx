import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Frame: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3V21M18 3V21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C6.55228 2 7 2.44772 7 3V5H17V3C17 2.44772 17.4477 2 18 2C18.5523 2 19 2.44772 19 3V5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H19V17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V19H7V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H5V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5V3C5 2.44772 5.44772 2 6 2ZM7 7V17H17V7H7Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="6" y="6" width="12" height="12" fill="#0000CC"/>
<path d="M6 3V21M18 3V21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M6 2C5.44772 2 5 2.44772 5 3V17H7V3C7 2.44772 6.55228 2 6 2Z" fill="currentColor"/>
<path d="M7 21V19H5V21C5 21.5523 5.44772 22 6 22C6.55228 22 7 21.5523 7 21Z" fill="currentColor"/>
<path d="M17 3C17 2.44772 17.4477 2 18 2C18.5523 2 19 2.44772 19 3V5H17V3Z" fill="currentColor"/>
<path d="M19 21V7H17V21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21Z" fill="currentColor"/>
</g>
<path d="M2 6C2 5.44772 2.44772 5 3 5H5V7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor"/>
<path d="M7 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H7V5Z" fill="currentColor"/>
<path d="M2 18C2 17.4477 2.44772 17 3 17H17V19H3C2.44772 19 2 18.5523 2 18Z" fill="currentColor"/>
<path d="M19 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H19V17Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3V21M18 3V21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Frame;