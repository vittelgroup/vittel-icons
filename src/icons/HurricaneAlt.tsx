import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HurricaneAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3C2.44772 5 2 4.55228 2 4ZM5 8C5 7.44772 5.44772 7 6 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H6C5.44772 9 5 8.55228 5 8ZM8 12C8 11.4477 8.44772 11 9 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H9C8.44772 13 8 12.5523 8 12ZM7 16C7 15.4477 7.44772 15 8 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H8C7.44772 17 7 16.5523 7 16ZM11 20C11 19.4477 11.4477 19 12 19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H12C11.4477 21 11 20.5523 11 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M5 8C5 7.44772 5.44772 7 6 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H6C5.44772 9 5 8.55228 5 8Z" fill="currentColor"/>
<path d="M7 16C7 15.4477 7.44772 15 8 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H8C7.44772 17 7 16.5523 7 16Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3C2.44772 5 2 4.55228 2 4ZM8 12C8 11.4477 8.44772 11 9 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H9C8.44772 13 8 12.5523 8 12ZM11 20C11 19.4477 11.4477 19 12 19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H12C11.4477 21 11 20.5523 11 20Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default HurricaneAlt;