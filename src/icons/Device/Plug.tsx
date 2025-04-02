import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Plug: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.55228 2 9 2.44772 9 3V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V3C7 2.44772 7.44772 2 8 2ZM16 2C16.5523 2 17 2.44772 17 3V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V3C15 2.44772 15.4477 2 16 2ZM4 9C4 8.44772 4.44772 8 5 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H18V12C18 14.973 15.8377 17.441 13 17.917V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.917C8.16229 17.441 6 14.973 6 12V10H5C4.44772 10 4 9.55228 4 9Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M7 9H17V12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12V9Z" fill="currentColor"/>
<path d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8 2C8.55228 2 9 2.44772 9 3V6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6V3C7 2.44772 7.44772 2 8 2Z" fill="currentColor"/>
<path d="M16 2C16.5523 2 17 2.44772 17 3V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V3C15 2.44772 15.4477 2 16 2Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 9C4 8.44772 4.44772 8 5 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H18V12C18 14.973 15.8377 17.441 13 17.917V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V17.917C8.16229 17.441 6 14.973 6 12V10H5C4.44772 10 4 9.55228 4 9Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Plug;