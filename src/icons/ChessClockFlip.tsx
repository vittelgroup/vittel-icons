import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChessClockFlip: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 8V4M18 4H14M10 5H6M21 8H3V20H21V8ZM14 14C14 15.1046 14.8954 16 16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14ZM6 14C6 15.1046 6.89543 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H6C5.44772 6 5 5.55228 5 5C5 4.44772 5.44772 4 6 4H10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H17V7H21C21.5523 7 22 7.44772 22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H15V5H14C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H18ZM16 11C17.6569 11 19 12.3431 19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11ZM11 14C11 12.3431 9.65685 11 8 11C6.34315 11 5 12.3431 5 14C5 15.6569 6.34315 17 8 17C9.65685 17 11 15.6569 11 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M21 8H16H3V20H21V8ZM16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14C18 15.1046 17.1046 16 16 16ZM8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16Z" fill="currentColor"/>
<path d="M16 8V4M18 4H14M10 5H6M21 8H3V20H21V8ZM14 14C14 15.1046 14.8954 16 16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14ZM6 14C6 15.1046 6.89543 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M17 7H21C21.5523 7 22 7.44772 22 8V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H15H17Z" fill="currentColor"/>
<path d="M10 4C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H6C5.44772 6 5 5.55228 5 5C5 4.44772 5.44772 4 6 4H10Z" fill="currentColor"/>
<path d="M19 4C19 3.44772 18.5523 3 18 3H14C13.4477 3 13 3.44772 13 4C13 4.55228 13.4477 5 14 5H15V7H17V5H18C18.5523 5 19 4.55228 19 4Z" fill="currentColor"/>
<path d="M19 14C19 12.3431 17.6569 11 16 11C14.3431 11 13 12.3431 13 14C13 15.6569 14.3431 17 16 17C17.6569 17 19 15.6569 19 14Z" fill="currentColor"/>
<path d="M11 14C11 12.3431 9.65685 11 8 11C6.34315 11 5 12.3431 5 14C5 15.6569 6.34315 17 8 17C9.65685 17 11 15.6569 11 14Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 8V4M18 4H14M10 5H6M21 8H3V20H21V8ZM14 14C14 15.1046 14.8954 16 16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14ZM6 14C6 15.1046 6.89543 16 8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChessClockFlip;