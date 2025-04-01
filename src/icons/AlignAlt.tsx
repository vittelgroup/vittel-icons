import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const AlignAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10M18 20H14M3 8H10M21 16H14M3 12H10M21 12H14M3 16H10M21 8H14M3 20H10M20 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5H6C5.44772 5 5 4.55228 5 4ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H14C13.4477 5 13 4.55228 13 4ZM2 8C2 7.44772 2.44772 7 3 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H3C2.44772 9 2 8.55228 2 8ZM13 8C13 7.44772 13.4477 7 14 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H14C13.4477 9 13 8.55228 13 8ZM2 12C2 11.4477 2.44772 11 3 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H3C2.44772 13 2 12.5523 2 12ZM13 12C13 11.4477 13.4477 11 14 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H14C13.4477 13 13 12.5523 13 12ZM2 16C2 15.4477 2.44772 15 3 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H3C2.44772 17 2 16.5523 2 16ZM13 16C13 15.4477 13.4477 15 14 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H14C13.4477 17 13 16.5523 13 16ZM2 20C2 19.4477 2.44772 19 3 19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H3C2.44772 21 2 20.5523 2 20ZM13 20C13 19.4477 13.4477 19 14 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10M18 20H14M3 8H10M21 16H14M3 12H10M21 12H14M3 16H10M21 8H14M3 20H10M20 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H14C13.4477 5 13 4.55228 13 4Z" fill="currentColor"/>
<path d="M13 8C13 7.44772 13.4477 7 14 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H14C13.4477 9 13 8.55228 13 8Z" fill="currentColor"/>
<path d="M13 12C13 11.4477 13.4477 11 14 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H14C13.4477 13 13 12.5523 13 12Z" fill="currentColor"/>
<path d="M13 16C13 15.4477 13.4477 15 14 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H14C13.4477 17 13 16.5523 13 16Z" fill="currentColor"/>
<path d="M13 20C13 19.4477 13.4477 19 14 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5H6C5.44772 5 5 4.55228 5 4ZM2 8C2 7.44772 2.44772 7 3 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H3C2.44772 9 2 8.55228 2 8ZM2 12C2 11.4477 2.44772 11 3 11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H3C2.44772 13 2 12.5523 2 12ZM2 16C2 15.4477 2.44772 15 3 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H3C2.44772 17 2 16.5523 2 16ZM2 20C2 19.4477 2.44772 19 3 19H10C10.5523 19 11 19.4477 11 20C11 20.5523 10.5523 21 10 21H3C2.44772 21 2 20.5523 2 20Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H10M18 20H14M3 8H10M21 16H14M3 12H10M21 12H14M3 16H10M21 8H14M3 20H10M20 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default AlignAlt;