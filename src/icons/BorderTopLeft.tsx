import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BorderTopLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H4L4 20M20 8H20.01M20 20H20.01M16 20H16.01M12 20H12.01M8 20H8.01M20 16H20.01M20 12H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20V5H20C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3H4Z" fill="currentColor"/>
<path d="M20 9C20.5523 9 21 8.55229 21 8C21 7.44772 20.5523 7 20 7C19.4477 7 19 7.44772 19 8C19 8.55229 19.4477 9 20 9Z" fill="currentColor"/>
<path d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z" fill="currentColor"/>
<path d="M20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13Z" fill="currentColor"/>
<path d="M21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" fill="currentColor"/>
<path d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z" fill="currentColor"/>
<path d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z" fill="currentColor"/>
<path d="M8 21C8.55229 21 9 20.5523 9 20C9 19.4477 8.55229 19 8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="4" y="4" width="16" height="16" fill="#0000CC"/>
<path d="M20 4H4L4 20M20 8H20.01M20 20H20.01M16 20H16.01M12 20H12.01M8 20H8.01M20 16H20.01M20 12H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M20 9C20.5523 9 21 8.55229 21 8C21 7.44772 20.5523 7 20 7C19.4477 7 19 7.44772 19 8C19 8.55229 19.4477 9 20 9Z" fill="currentColor"/>
<path d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z" fill="currentColor"/>
<path d="M20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13Z" fill="currentColor"/>
<path d="M21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" fill="currentColor"/>
<path d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z" fill="currentColor"/>
<path d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z" fill="currentColor"/>
<path d="M8 21C8.55229 21 9 20.5523 9 20C9 19.4477 8.55229 19 8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21Z" fill="currentColor"/>
</g>
<path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20V5H20C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3H4Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H4L4 20M20 8H20.01M20 20H20.01M16 20H16.01M12 20H12.01M8 20H8.01M20 16H20.01M20 12H20.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default BorderTopLeft;