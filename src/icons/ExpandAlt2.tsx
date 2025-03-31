import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ExpandAlt2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 21L21 3M3 21H7.5M3 21L3 16.5M21 3H16.5M21 3V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4C15.9477 4 15.5 3.55228 15.5 3C15.5 2.44772 15.9477 2 16.5 2H21C21.5523 2 22 2.44772 22 3V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V5.41421L5.41421 20H7.5C8.05228 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21L2 16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L18.5858 4H16.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 21L21 3M3 21H7.5M3 21L3 16.5M21 3H16.5M21 3V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M5.41421 20H7.5C8.05228 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22H3C2.73478 22 2.48043 21.8947 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L11.2929 11.2929L12.7071 12.7071L5.41421 20Z" fill="currentColor"/>
<path d="M16.5001 4C15.9478 4 15.5001 3.55228 15.5001 3C15.5001 2.44772 15.9478 2 16.5001 2H21.0001C21.5524 2 22.0001 2.44772 22.0001 3V7.5C22.0001 8.05228 21.5524 8.5 21.0001 8.5C20.4478 8.5 20.0001 8.05228 20.0001 7.5V5.41421L12.7072 12.7071L11.293 11.2929L18.5859 4H16.5001Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 21L21 3M3 21H7.5M3 21L3 16.5M21 3H16.5M21 3V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ExpandAlt2;