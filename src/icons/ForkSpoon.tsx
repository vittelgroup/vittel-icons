import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ForkSpoon: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V3M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3M15.5 13V3M15.5 13C13.567 13 12 14.7909 12 17C12 19.2091 13.567 21 15.5 21C17.433 21 19 19.2091 19 17C19 14.7909 17.433 13 15.5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V8C6 8.74028 6.4022 9.38663 7 9.73244V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V9.73244C9.5978 9.38663 10 8.74028 10 8V3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3V8C12 9.86384 10.7252 11.4299 9 11.874V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V11.874C5.27477 11.4299 4 9.86384 4 8V3C4 2.44772 4.44772 2 5 2ZM15.5 2C16.0523 2 16.5 2.44772 16.5 3V12.1209C18.577 12.635 20 14.7184 20 17C20 19.6318 18.1065 22 15.5 22C12.8935 22 11 19.6318 11 17C11 14.7184 12.423 12.635 14.5 12.1209V3C14.5 2.44772 14.9477 2 15.5 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19 17C19 19.2091 17.433 21 15.5 21C13.567 21 12 19.2091 12 17C12 14.7909 13.567 13 15.5 13C17.433 13 19 14.7909 19 17Z" fill="currentColor"/>
<path d="M8 21V3M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3M15.5 13V3M15.5 13C13.567 13 12 14.7909 12 17C12 19.2091 13.567 21 15.5 21C17.433 21 19 19.2091 19 17C19 14.7909 17.433 13 15.5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M15.5 2C16.0523 2 16.5 2.44772 16.5 3V12.1209C18.577 12.635 20 14.7184 20 17C20 19.6318 18.1065 22 15.5 22C12.8935 22 11 19.6318 11 17C11 14.7184 12.423 12.635 14.5 12.1209V3C14.5 2.44772 14.9477 2 15.5 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V8C6 8.74028 6.4022 9.38663 7 9.73244V3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3V9.73244C9.5978 9.38663 10 8.74028 10 8V3C10 2.44772 10.4477 2 11 2C11.5523 2 12 2.44772 12 3V8C12 9.86384 10.7252 11.4299 9 11.874V21C9 21.5523 8.55228 22 8 22C7.44772 22 7 21.5523 7 21V11.874C5.27477 11.4299 4 9.86384 4 8V3C4 2.44772 4.44772 2 5 2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V3M11 3V8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8V3M15.5 13V3M15.5 13C13.567 13 12 14.7909 12 17C12 19.2091 13.567 21 15.5 21C17.433 21 19 19.2091 19 17C19 14.7909 17.433 13 15.5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ForkSpoon;