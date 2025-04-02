import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CubeAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H8.44444L4 8M20 4V15.5556L16 20M20 4L16 8M4 8H16M4 8V20H16M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19.5858 3H8.5C8.25509 3 8.01869 3.08988 7.83564 3.25259L3.6198 7H15.5858L19.5858 3Z" fill="currentColor"/>
<path d="M3 9V20C3 20.5523 3.44772 21 4 21H15V9H3Z" fill="currentColor"/>
<path d="M17 20.3802L20.7474 16.1644C20.9101 15.9813 21 15.7449 21 15.5V4.41421L17 8.41421V20.3802Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20 4H8.44444L4 8H16V20L20 15.5556V4Z" fill="currentColor"/>
<path d="M20 4H8.44444L4 8M20 4V15.5556L16 20M20 4L16 8M4 8H16M4 8V20H16M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M3 8.99997V20C3 20.5523 3.44772 21 4 21H15V8.99997H3Z" fill="currentColor"/>
<path d="M17 20.3802L20.7474 16.1643C20.9101 15.9813 21 15.7449 21 15.5V4.41418L17 8.41418V20.3802Z" fill="currentColor"/>
</g>
<path d="M19.5851 3H8.49934C8.25443 3 8.01803 3.08988 7.83498 3.25259L3.61914 7H15.5851L19.5851 3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H8.44444L4 8M20 4V15.5556L16 20M20 4L16 8M4 8H16M4 8V20H16M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CubeAlt;