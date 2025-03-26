import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BracketSquareRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 21H14L14 3H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21C9 20.4477 9.44772 20 10 20H13L13 4H10C9.44772 4 9 3.55228 9 3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3L15 21Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 21H14L14 3H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 2C14.5523 2 15 2.44772 15 3V12H13V4H10C9.44772 4 9 3.55228 9 3C9 2.44772 9.44772 2 10 2H14Z" fill="currentColor"/>
<path opacity="0.3" d="M13 12V20H10C9.44772 20 9 20.4477 9 21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V12H13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 21H14L14 3H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default BracketSquareRight;