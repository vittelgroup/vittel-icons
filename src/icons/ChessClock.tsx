import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChessClock: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 8V4M6 4H10M14 5H18M3 8H21V20H3V8ZM10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14ZM18 14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 4C13.4477 4 13 4.44772 13 5C13 5.55228 13.4477 6 14 6H18C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4H14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C5.44772 3 5 3.44772 5 4C5 4.55228 5.44772 5 6 5H7V7H3C2.44772 7 2 7.44772 2 8V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V8C22 7.44772 21.5523 7 21 7H9V5H10C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3H6ZM8 11C6.34315 11 5 12.3431 5 14C5 15.6569 6.34315 17 8 17C9.65685 17 11 15.6569 11 14C11 12.3431 9.65685 11 8 11ZM13 14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M3 8H8H21V20H3V8ZM8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16ZM16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14C14 15.1046 14.8954 16 16 16Z" fill="currentColor"/>
<path d="M8 8V4M6 4H10M14 5H18M3 8H21V20H3V8ZM10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14ZM18 14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M7 7H3C2.44772 7 2 7.44772 2 8V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V8C22 7.44772 21.5523 7 21 7H9H7Z" fill="currentColor"/>
<path d="M14 4C13.4477 4 13 4.44772 13 5C13 5.55228 13.4477 6 14 6H18C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4H14Z" fill="currentColor"/>
<path d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4C11 4.55228 10.5523 5 10 5H9V7H7V5H6C5.44772 5 5 4.55228 5 4Z" fill="currentColor"/>
<path d="M5 14C5 12.3431 6.34315 11 8 11C9.65685 11 11 12.3431 11 14C11 15.6569 9.65685 17 8 17C6.34315 17 5 15.6569 5 14Z" fill="currentColor"/>
<path d="M13 14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 14Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 8V4M6 4H10M14 5H18M3 8H21V20H3V8ZM10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14ZM18 14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChessClock;