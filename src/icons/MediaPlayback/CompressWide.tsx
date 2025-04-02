import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CompressWide: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V10H3M16 5V10H21M3 14H8V19M16 19V14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 4.44772 9 5V10C9 10.5523 8.55228 11 8 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H7V5C7 4.44772 7.44772 4 8 4ZM16 4C16.5523 4 17 4.44772 17 5V9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H16C15.4477 11 15 10.5523 15 10V5C15 4.44772 15.4477 4 16 4ZM2 14C2 13.4477 2.44772 13 3 13H8C8.55228 13 9 13.4477 9 14V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V15H3C2.44772 15 2 14.5523 2 14ZM15 14C15 13.4477 15.4477 13 16 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V14Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V10H3M16 5V10H21M3 14H8V19M16 19V14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M17 5C17 4.44772 16.5523 4 16 4C15.4477 4 15 4.44772 15 5V10C15 10.5523 15.4477 11 16 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H17V5Z" fill="currentColor"/>
<path d="M3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H7V19C7 19.5523 7.44772 20 8 20C8.55228 20 9 19.5523 9 19V14C9 13.4477 8.55228 13 8 13H3Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 4.44772 9 5V10C9 10.5523 8.55228 11 8 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H7V5C7 4.44772 7.44772 4 8 4ZM15 14C15 13.4477 15.4477 13 16 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V14Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V10H3M16 5V10H21M3 14H8V19M16 19V14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CompressWide;