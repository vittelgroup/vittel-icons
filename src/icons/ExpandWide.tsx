import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ExpandWide: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10V5L8 5M3 14V19L8 19M16 5H21V10M21 14V19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6L8 6C8.55229 6 9 5.55228 9 5C9 4.44771 8.55228 4 8 4L3 4C2.44771 4 2 4.44772 2 5V10C2 10.5523 2.44772 11 3 11C3.55228 11 4 10.5523 4 10V6ZM15 5C15 4.44772 15.4477 4 16 4H21C21.5523 4 22 4.44772 22 5V10C22 10.5523 21.5523 11 21 11C20.4477 11 20 10.5523 20 10V6H16C15.4477 6 15 5.55228 15 5ZM3 13C3.55228 13 4 13.4477 4 14V18L8 18C8.55229 18 9 18.4477 9 19C9 19.5523 8.55228 20 8 20L3 20C2.44771 20 2 19.5523 2 19V14C2 13.4477 2.44772 13 3 13ZM21 13C21.5523 13 22 13.4477 22 14V19C22 19.5523 21.5523 20 21 20H16C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18H20V14C20 13.4477 20.4477 13 21 13Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10V5L8 5M3 14V19L8 19M16 5H21V10M21 14V19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M16 4C15.4477 4 15 4.44772 15 5C15 5.55228 15.4477 6 16 6H20V10C20 10.5523 20.4477 11 21 11C21.5523 11 22 10.5523 22 10V5C22 4.44772 21.5523 4 21 4H16Z" fill="currentColor"/>
<path d="M4 14C4 13.4477 3.55228 13 3 13C2.44772 13 2 13.4477 2 14V19C2 19.5523 2.44771 20 3 20L8 20C8.55228 20 9 19.5523 9 19C9 18.4477 8.55229 18 8 18L4 18V14Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6L8 6C8.55229 6 9 5.55228 9 5C9 4.44771 8.55228 4 8 4L3 4C2.44771 4 2 4.44772 2 5V10C2 10.5523 2.44772 11 3 11C3.55228 11 4 10.5523 4 10V6ZM21 13C21.5523 13 22 13.4477 22 14V19C22 19.5523 21.5523 20 21 20H16C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18H20V14C20 13.4477 20.4477 13 21 13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10V5L8 5M3 14V19L8 19M16 5H21V10M21 14V19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ExpandWide;