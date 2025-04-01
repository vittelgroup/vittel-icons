import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SkiBoot: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H20M20 21V16L12 13M20 21H3L5 5H13.6M12 13H9M12 13L13.6 5M14 3L13.6 5M9 9H12.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.9806 3.19613C15.0889 2.65457 14.7377 2.12774 14.1961 2.01943C13.6546 1.91112 13.1277 2.26233 13.0194 2.80389L12.7802 3.99998L5.01172 3.99999C4.50928 3.99348 4.07152 4.36566 4.00773 4.87597L2.00773 20.876C1.97215 21.1606 2.0605 21.4468 2.25033 21.6618C2.44015 21.8768 2.71317 22 3.00001 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20V16C21 15.5832 20.7414 15.21 20.3511 15.0637L17.5146 14H9C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H13.2198L13.6198 10H9C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8H14.0198L14.5611 5.29363C14.5803 5.23101 14.5935 5.16577 14.6001 5.09858L14.9806 3.19613Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 5.00003L3 21H20V16L12 13L13.6049 5L5 5.00003Z" fill="currentColor"/>
<path d="M21 21H20M20 21V16L12 13M20 21H3L5 5H13.6M12 13H9M12 13L13.6 5M14 3L13.6 5M9 9H12.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 5.00003L3 21H20V16L12 13L13.6049 5L5 5.00003Z" fill="currentColor"/>
<path d="M21 21H20M20 21V16L12 13M20 21H3L5 5H13.6M12 13H9M12 13L13.6 5M14 3L13.6 5M9 9H12.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H20M20 21V16L12 13M20 21H3L5 5H13.6M12 13H9M12 13L13.6 5M14 3L13.6 5M9 9H12.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SkiBoot;