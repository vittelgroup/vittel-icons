import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ReplitLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9V3H4V9H12ZM12 9V15M12 9H20V15H12M12 15V21H4V15H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 2C3.44772 2 3 2.44772 3 3V9C3 9.55228 3.44772 10 4 10H11V14H4C3.44772 14 3 14.4477 3 15V21C3 21.5523 3.44772 22 4 22H12C12.5523 22 13 21.5523 13 21V16H20C20.5523 16 21 15.5523 21 15V9C21 8.44772 20.5523 8 20 8H13V3C13 2.44772 12.5523 2 12 2H4Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M12 3H4V9H12V3Z" fill="currentColor"/>
<path d="M20 9V15H12V9H20Z" fill="currentColor"/>
<path d="M4 21H12V15H4V21Z" fill="currentColor"/>
</g>
<path d="M12 9V3H4V9H12ZM12 9V15M12 9H20V15H12M12 15V21H4V15H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M4 2C3.44772 2 3 2.44772 3 3V9C3 9.55228 3.44772 10 4 10H12C12.5523 10 13 9.55228 13 9V3C13 2.44772 12.5523 2 12 2H4Z" fill="currentColor"/>
<path d="M4 14C3.44772 14 3 14.4477 3 15V21C3 21.5523 3.44772 22 4 22H12C12.5523 22 13 21.5523 13 21V15C13 14.4477 12.5523 14 12 14H4Z" fill="currentColor"/>
</g>
<path d="M12 8C11.4477 8 11 8.44772 11 9V15C11 15.5523 11.4477 16 12 16H20C20.5523 16 21 15.5523 21 15V9C21 8.44772 20.5523 8 20 8H12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9V3H4V9H12ZM12 9V15M12 9H20V15H12M12 15V21H4V15H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ReplitLogo;