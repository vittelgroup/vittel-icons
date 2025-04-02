import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GamingPad: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15H10M8 13V17M18 16H18.01M15 14H15.01M16 3V6H12V9M8 21C4.68629 21 2 18.3137 2 15C2 11.6863 4.68629 9 8 9H16C19.3137 9 22 11.6863 22 15C22 18.3137 19.3137 21 16 21C14.4783 21 13.0577 20.4058 12 19.4722C10.9385 20.4223 9.53671 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C17 2.44772 16.5523 2 16 2C15.4477 2 15 2.44772 15 3V5H12C11.4477 5 11 5.44772 11 6V8H8C4.13401 8 1 11.134 1 15C1 18.866 4.13401 22 8 22C9.48832 22 10.8696 21.5346 12.0041 20.7423C13.1351 21.5229 14.5231 22 16 22C19.866 22 23 18.866 23 15C23 11.134 19.866 8 16 8H13V7H16C16.5523 7 17 6.55228 17 6V3ZM7 13C7 12.4477 7.44772 12 8 12C8.55229 12 9 12.4477 9 13V14H10C10.5523 14 11 14.4477 11 15C11 15.5523 10.5523 16 10 16H9V17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17V16H6C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14H7V13ZM16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14ZM18 17C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16C17 16.5523 17.4477 17 18 17Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M2 15C2 18.3137 4.68629 21 8 21C9.53671 21 10.9385 20.4223 12 19.4722C13.0577 20.4058 14.4783 21 16 21C19.3137 21 22 18.3137 22 15C22 11.6863 19.3137 9 16 9H8C4.68629 9 2 11.6863 2 15Z" fill="currentColor"/>
<path d="M6 15H10M8 13V17M18 16H18.01M15 14H15.01M16 3V6H12V9M8 21C4.68629 21 2 18.3137 2 15C2 11.6863 4.68629 9 8 9H16C19.3137 9 22 11.6863 22 15C22 18.3137 19.3137 21 16 21C14.4783 21 13.0577 20.4058 12 19.4722C10.9385 20.4223 9.53671 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16.5523 2 17 2.44772 17 3V6C17 6.55228 16.5523 7 16 7H13V8H16C19.866 8 23 11.134 23 15C23 18.866 19.866 22 16 22C14.5231 22 13.1351 21.5229 12.0041 20.7423C10.8696 21.5346 9.48832 22 8 22C4.13401 22 1 18.866 1 15C1 11.134 4.13401 8 8 8H11V6C11 5.44772 11.4477 5 12 5H15V3C15 2.44772 15.4477 2 16 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C7.44772 12 7 12.4477 7 13V14H6C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H7V17C7 17.5523 7.44772 18 8 18C8.55229 18 9 17.5523 9 17V16H10C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14H9V13C9 12.4477 8.55229 12 8 12ZM15 15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15ZM19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15H10M8 13V17M18 16H18.01M15 14H15.01M16 3V6H12V9M8 21C4.68629 21 2 18.3137 2 15C2 11.6863 4.68629 9 8 9H16C19.3137 9 22 11.6863 22 15C22 18.3137 19.3137 21 16 21C14.4783 21 13.0577 20.4058 12 19.4722C10.9385 20.4223 9.53671 21 8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default GamingPad;