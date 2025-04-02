import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Tally: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 20V4M10 20V4M14 20V4M18 20V4M21 5L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.00005 3C6.55233 3 7.00005 3.44772 7.00005 4V14.622L9.00005 13.0665V4C9.00005 3.44772 9.44776 3 10 3C10.5523 3 11 3.44772 11 4V11.5109L13 9.95536V4C13 3.44772 13.4478 3 14 3C14.5523 3 15 3.44772 15 4V8.3998L17 6.84425V4C17 3.44772 17.4478 3 18 3C18.5523 3 19 3.44772 19 4V5.28869L20.3861 4.21065C20.8221 3.87158 21.4503 3.95011 21.7894 4.38606C22.1285 4.82201 22.0499 5.45028 21.614 5.78935L19 7.82242V20C19 20.5523 18.5523 21 18 21C17.4478 21 17 20.5523 17 20V9.37797L15 10.9335V20C15 20.5523 14.5523 21 14 21C13.4478 21 13 20.5523 13 20V12.4891L11 14.0446V20C11 20.5523 10.5523 21 10 21C9.44776 21 9.00005 20.5523 9.00005 20V15.6002L7.00005 17.1558V20C7.00005 20.5523 6.55233 21 6.00005 21C5.44776 21 5.00005 20.5523 5.00005 20V18.7113L3.61399 19.7894C3.17804 20.1284 2.54976 20.0499 2.21069 19.6139C1.87162 19.178 1.95016 18.5497 2.38611 18.2106L5.00005 16.1776V4C5.00005 3.44772 5.44776 3 6.00005 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 20V4M10 20V4M14 20V4M18 20V4M21 5L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M7 4C7 3.44772 6.55228 3 6 3C5.44772 3 5 3.44772 5 4V16.1776L7 14.622V4Z" fill="currentColor"/>
<path d="M9 13.0665L11 11.5109V4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4V13.0665Z" fill="currentColor"/>
<path d="M13 9.95536L15 8.3998V4C15 3.44772 14.5523 3 14 3C13.4477 3 13 3.44772 13 4V9.95536Z" fill="currentColor"/>
<path d="M17 6.84425L19 5.28869V4C19 3.44772 18.5523 3 18 3C17.4477 3 17 3.44772 17 4V6.84425Z" fill="currentColor"/>
<path d="M19 7.82242L17 9.37797V20C17 20.5523 17.4477 21 18 21C18.5523 21 19 20.5523 19 20V7.82242Z" fill="currentColor"/>
<path d="M15 10.9335L13 12.4891V20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20V10.9335Z" fill="currentColor"/>
<path d="M11 14.0446L9 15.6002V20C9 20.5523 9.44772 21 10 21C10.5523 21 11 20.5523 11 20V14.0446Z" fill="currentColor"/>
<path d="M7 17.1558L5 18.7113V20C5 20.5523 5.44772 21 6 21C6.55228 21 7 20.5523 7 20V17.1558Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7894 4.38611C22.1285 4.82205 22.0499 5.45033 21.614 5.7894L3.61399 19.7894C3.17804 20.1285 2.54976 20.0499 2.21069 19.614C1.87162 19.178 1.95016 18.5498 2.38611 18.2107L20.3861 4.21069C20.8221 3.87162 21.4503 3.95016 21.7894 4.38611Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 20V4M10 20V4M14 20V4M18 20V4M21 5L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Tally;