import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Chesnut: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 15.5V13.7226C4 11.9924 4.74688 10.3465 6.04897 9.20715L12 4L17.951 9.20715C19.2531 10.3465 20 11.9924 20 13.7226V15.5M4 15.5C4 17.9853 6.01472 20 8.5 20H15.5C17.9853 20 20 17.9853 20 15.5M4 15.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.5 21C5.98244 21 3.85996 19.3085 3.20703 17H20.793C20.14 19.3085 18.0176 21 15.5 21H8.5Z" fill="currentColor"/>
<path d="M12.6585 3.24742C12.2815 2.91753 11.7185 2.91753 11.3415 3.24742L5.39047 8.45457C3.87136 9.78379 3 11.7041 3 13.7226V15H21V13.7226C21 11.7041 20.1286 9.78379 18.6095 8.45457L12.6585 3.24742Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 15.5H20M4 15.5C4 17.9853 6.01472 20 8.5 20H15.5C17.9853 20 20 17.9853 20 15.5M4 15.5V13.7226C4 11.9924 4.74688 10.3465 6.04897 9.20715L12 4L17.951 9.20715C19.2531 10.3465 20 11.9924 20 13.7226V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path opacity="0.14" d="M15.5 20H8.5C6.01472 20 4 17.9853 4 15.5H20C20 17.9853 17.9853 20 15.5 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8.5 21C5.98244 21 3.85996 19.3085 3.20703 17H20.793C20.14 19.3085 18.0176 21 15.5 21H8.5Z" fill="currentColor"/>
<path d="M12.6585 3.24742C12.2815 2.91753 11.7185 2.91753 11.3415 3.24742L5.39047 8.45457C3.87136 9.78379 3 11.7041 3 13.7226V15H21V13.7226C21 11.7041 20.1286 9.78379 18.6095 8.45457L12.6585 3.24742Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 15.5V13.7226C4 11.9924 4.74688 10.3465 6.04897 9.20715L12 4L17.951 9.20715C19.2531 10.3465 20 11.9924 20 13.7226V15.5M4 15.5C4 17.9853 6.01472 20 8.5 20H15.5C17.9853 20 20 17.9853 20 15.5M4 15.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Chesnut;