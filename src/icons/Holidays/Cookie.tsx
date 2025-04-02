import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Cookie: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.4477 21.5523 11 21 11C18.5711 11 17 9.46016 17 8C17 7.44772 16.5523 7 16 7C14.5398 7 13 5.4289 13 3C13 2.44772 12.5523 2 12 2ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H7.01C7.56228 11 8.01 10.5523 8.01 10C8.01 9.44772 7.56228 9 7.01 9H7ZM12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12H12.01C12.5623 12 13.01 11.5523 13.01 11C13.01 10.4477 12.5623 10 12.01 10H12ZM8 16C8 15.4477 8.44772 15 9 15H9.01C9.56228 15 10.01 15.4477 10.01 16C10.01 16.5523 9.56228 17 9.01 17H9C8.44772 17 8 16.5523 8 16ZM15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17H15.01C15.5623 17 16.01 16.5523 16.01 16C16.01 15.4477 15.5623 15 15.01 15H15Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C16.9706 21 21 16.9706 21 12C18.2386 12 16 10.2091 16 8C13.7909 8 12 5.76142 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/>
<path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C12.5523 2 13 2.44772 13 3C13 5.4289 14.5398 7 16 7C16.5523 7 17 7.44772 17 8C17 9.46016 18.5711 11 21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>
<path d="M6 10C6 9.44772 6.44772 9 7 9H7.01C7.56228 9 8.01 9.44772 8.01 10C8.01 10.5523 7.56228 11 7.01 11H7C6.44772 11 6 10.5523 6 10Z" fill="currentColor"/>
<path d="M11 11C11 10.4477 11.4477 10 12 10H12.01C12.5623 10 13.01 10.4477 13.01 11C13.01 11.5523 12.5623 12 12.01 12H12C11.4477 12 11 11.5523 11 11Z" fill="currentColor"/>
<path d="M8 16C8 15.4477 8.44772 15 9 15H9.01C9.56228 15 10.01 15.4477 10.01 16C10.01 16.5523 9.56228 17 9.01 17H9C8.44772 17 8 16.5523 8 16Z" fill="currentColor"/>
<path d="M14 16C14 15.4477 14.4477 15 15 15H15.01C15.5623 15 16.01 15.4477 16.01 16C16.01 16.5523 15.5623 17 15.01 17H15C14.4477 17 14 16.5523 14 16Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 16H9.01M12 11H12.01M7 10H7.01M15 16H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C12 5.76142 13.7909 8 16 8C16 10.2091 18.2386 12 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Cookie;