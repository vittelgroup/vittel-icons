import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Paragraph: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10H21M3 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 9.44772 2.44772 9 3 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10ZM2 14C2 13.4477 2.44772 13 3 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H3C2.44772 15 2 14.5523 2 14Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10H21M3 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M2 14C2 13.4477 2.44772 13 3 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H3C2.44772 15 2 14.5523 2 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 9.44772 2.44772 9 3 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10H21M3 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Paragraph;