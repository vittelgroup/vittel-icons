import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HoodCloak: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V21M8 21H3C4.2 20.2 5 18.5 5 17V12C5 7.02944 9.02944 3 14 3H18.5L15.5 6C19.5 7 19 14 19 17C19 18.5 19.8 20.2 21 21H16M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.00008 12C4.00008 6.47715 8.47723 2 14.0001 2H18.5001C18.9045 2 19.2692 2.24364 19.424 2.61732C19.5787 2.99099 19.4932 3.42111 19.2072 3.70711L17.2172 5.69708C18.7729 6.78903 19.4365 8.78557 19.7365 10.5856C20.0593 12.5229 20.0296 14.6451 20.0087 16.1314C20.0042 16.4536 20.0001 16.7459 20.0001 17C20.0001 18.22 20.6753 19.5816 21.5548 20.1679C21.9214 20.4124 22.0849 20.868 21.9572 21.2898C21.8295 21.7115 21.4407 22 21.0001 22H3.00008C2.55941 22 2.17068 21.7115 2.04299 21.2898C1.91529 20.868 2.07872 20.4124 2.44538 20.1679C3.32483 19.5816 4.00008 18.22 4.00008 17V12ZM16 20V15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15V20H16Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M18.5 3H14C9.02944 3 5 7.02944 5 12V17C5 18.5 4.2 20.2 3 21H8V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V21H21C19.8 20.2 19 18.5 19 17C19 14 19.5 7 15.5 6L18.5 3Z" fill="currentColor"/>
<path d="M8 21V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V21M8 21H3C4.2 20.2 5 18.5 5 17V12C5 7.02944 9.02944 3 14 3H18.5L15.5 6C19.5 7 19 14 19 17C19 18.5 19.8 20.2 21 21H16M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4.00008 12C4.00008 6.47715 8.47723 2 14.0001 2H18.5001C18.9045 2 19.2692 2.24364 19.424 2.61732C19.5787 2.99099 19.4932 3.42111 19.2072 3.70711L17.2172 5.69708C18.7729 6.78903 19.4365 8.78557 19.7365 10.5856C20.0593 12.5229 20.0296 14.6451 20.0087 16.1314C20.0042 16.4536 20.0001 16.7459 20.0001 17C20.0001 18.22 20.6753 19.5816 21.5548 20.1679C21.9214 20.4124 22.0849 20.868 21.9572 21.2898C21.8295 21.7115 21.4407 22 21.0001 22H3.00008C2.55941 22 2.17068 21.7115 2.04299 21.2898C1.91529 20.868 2.07872 20.4124 2.44538 20.1679C3.32483 19.5816 4.00008 18.22 4.00008 17V12Z" fill="currentColor"/>
<path d="M16 20V15C16 12.7909 14.2091 11 12 11C9.79086 11 8 12.7909 8 15V20H16Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 21V15C8 12.7909 9.79086 11 12 11C14.2091 11 16 12.7909 16 15V21M8 21H3C4.2 20.2 5 18.5 5 17V12C5 7.02944 9.02944 3 14 3H18.5L15.5 6C19.5 7 19 14 19 17C19 18.5 19.8 20.2 21 21H16M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default HoodCloak;