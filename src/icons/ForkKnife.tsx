import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ForkKnife: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V3M15 21V3C17.2091 3 19 4.79086 19 7V9C19 11.2091 17.2091 13 15 13M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V8C6 8.74028 6.4022 9.38663 7 9.73244V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V9.73244C9.5978 9.38663 10 8.74028 10 8V3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3V8C12 9.86384 10.7252 11.4299 9 11.874V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V11.874C5.27477 11.4299 4 9.86384 4 8V3C4 2.44772 4.44772 2 5 2ZM14 3C14 2.44772 14.4477 2 15 2C17.7614 2 20 4.23858 20 7V9C20 11.419 18.2822 13.4367 16 13.9V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M15 3V13C17.2091 13 19 11.2091 19 9V7C19 4.79086 17.2091 3 15 3Z" fill="currentColor"/>
<path d="M8 21V3M15 21V3C17.2091 3 19 4.79086 19 7V9C19 11.2091 17.2091 13 15 13M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M14 3C14 2.44772 14.4477 2 15 2C17.7614 2 20 4.23858 20 7V9C20 11.419 18.2822 13.4367 16 13.9V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V8C6 8.74028 6.4022 9.38663 7 9.73244V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V9.73244C9.5978 9.38663 10 8.74028 10 8V3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3V8C12 9.86384 10.7252 11.4299 9 11.874V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V11.874C5.27477 11.4299 4 9.86384 4 8V3C4 2.44772 4.44772 2 5 2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V3M15 21V3C17.2091 3 19 4.79086 19 7V9C19 11.2091 17.2091 13 15 13M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ForkKnife;