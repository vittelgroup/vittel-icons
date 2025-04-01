import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Joystick: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 13H6M15 13V9M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3C13.3431 3 12 4.34315 12 6C12 7.65685 13.3431 9 15 9ZM3 16H21V21H3V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 2C12.7909 2 11 3.79086 11 6C11 7.86384 12.2748 9.42994 14 9.87398V13C14 13.5523 14.4477 14 15 14C15.5523 14 16 13.5523 16 13V9.87398C17.7252 9.42994 19 7.86384 19 6C19 3.79086 17.2091 2 15 2Z" fill="currentColor"/>
<path d="M6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H8C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12H6Z" fill="currentColor"/>
<path d="M3 15C2.44772 15 2 15.4477 2 16V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V16C22 15.4477 21.5523 15 21 15H3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 16H21V21H3V16Z" fill="currentColor"/>
<path d="M18 6C18 7.65685 16.6569 9 15 9C13.3431 9 12 7.65685 12 6C12 4.34315 13.3431 3 15 3C16.6569 3 18 4.34315 18 6Z" fill="currentColor"/>
</g>
<path d="M8 13H6M15 13V9M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3C13.3431 3 12 4.34315 12 6C12 7.65685 13.3431 9 15 9ZM3 16H21V21H3V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 15C2.44772 15 2 15.4477 2 16V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V16C22 15.4477 21.5523 15 21 15H3Z" fill="currentColor"/>
<path d="M15 2C12.7909 2 11 3.79086 11 6C11 7.86384 12.2748 9.42994 14 9.87398V13C14 13.5523 14.4477 14 15 14C15.5523 14 16 13.5523 16 13V9.87398C17.7252 9.42994 19 7.86384 19 6C19 3.79086 17.2091 2 15 2Z" fill="currentColor"/>
<path d="M6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14H8C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12H6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 13H6M15 13V9M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3C13.3431 3 12 4.34315 12 6C12 7.65685 13.3431 9 15 9ZM3 16H21V21H3V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Joystick;