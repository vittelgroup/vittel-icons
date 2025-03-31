import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Compress: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 4V9H4M15 4V9H20M4 15H9V20M15 20V15H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9.55228 3 10 3.44772 10 4V9C10 9.55228 9.55228 10 9 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H8V4C8 3.44772 8.44772 3 9 3ZM15 3C15.5523 3 16 3.44772 16 4V8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H15C14.4477 10 14 9.55228 14 9V4C14 3.44772 14.4477 3 15 3ZM3 15C3 14.4477 3.44772 14 4 14H9C9.55228 14 10 14.4477 10 15V20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20V16H4C3.44772 16 3 15.5523 3 15ZM14 15C14 14.4477 14.4477 14 15 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H16V20C16 20.5523 15.5523 21 15 21C14.4477 21 14 20.5523 14 20V15Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 4V9H4M15 4V9H20M4 15H9V20M15 20V15H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M16 4C16 3.44772 15.5523 3 15 3C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9C21 8.44772 20.5523 8 20 8H16V4Z" fill="currentColor"/>
<path d="M4 14C3.44772 14 3 14.4477 3 15C3 15.5523 3.44772 16 4 16H8V20C8 20.5523 8.44772 21 9 21C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14H4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C9.55228 3 10 3.44772 10 4V9C10 9.55228 9.55228 10 9 10H4C3.44772 10 3 9.55228 3 9C3 8.44772 3.44772 8 4 8H8V4C8 3.44772 8.44772 3 9 3ZM14 15C14 14.4477 14.4477 14 15 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H16V20C16 20.5523 15.5523 21 15 21C14.4477 21 14 20.5523 14 20V15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 4V9H4M15 4V9H20M4 15H9V20M15 20V15H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Compress;