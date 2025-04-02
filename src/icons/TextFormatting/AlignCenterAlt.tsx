import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const AlignCenterAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 8H19M5 16H19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 8H19M5 16H19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 7.44772 4.44772 7 5 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9H5C4.44772 9 4 8.55228 4 8ZM4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z" fill="currentColor"/>
<path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 8H19M5 16H19M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default AlignCenterAlt;