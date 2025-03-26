import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BuildingColumns: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21H10M14 21H20M4 17.5H10M14 17.5H20M4 14H10M14 14H20M19 8.44444V5M12 7.00671L12.0074 6.99998M12 3L21 10H3L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.614 2.21065C12.2529 1.92978 11.7472 1.92978 11.3861 2.21065L2.38612 9.21065C2.0489 9.47293 1.91554 9.92046 2.05419 10.3245C2.19283 10.7286 2.57286 11 3.00006 11H21.0001C21.4273 11 21.8073 10.7286 21.9459 10.3245C22.0846 9.92046 21.9512 9.47293 21.614 9.21065L21.0001 8.73314V5C21.0001 4.44772 20.5523 4 20.0001 4C19.4478 4 19.0001 4.44772 19.0001 5V7.17758L12.614 2.21065ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill="currentColor"/>
<path d="M4.00006 13C3.44778 13 3.00006 13.4477 3.00006 14C3.00006 14.5523 3.44778 15 4.00006 15H10.0001C10.5523 15 11.0001 14.5523 11.0001 14C11.0001 13.4477 10.5523 13 10.0001 13H4.00006Z" fill="currentColor"/>
<path d="M14.0001 13C13.4478 13 13.0001 13.4477 13.0001 14C13.0001 14.5523 13.4478 15 14.0001 15H20.0001C20.5523 15 21.0001 14.5523 21.0001 14C21.0001 13.4477 20.5523 13 20.0001 13H14.0001Z" fill="currentColor"/>
<path d="M4.00006 16.5C3.44778 16.5 3.00006 16.9477 3.00006 17.5C3.00006 18.0523 3.44778 18.5 4.00006 18.5H10.0001C10.5523 18.5 11.0001 18.0523 11.0001 17.5C11.0001 16.9477 10.5523 16.5 10.0001 16.5H4.00006Z" fill="currentColor"/>
<path d="M14.0001 16.5C13.4478 16.5 13.0001 16.9477 13.0001 17.5C13.0001 18.0523 13.4478 18.5 14.0001 18.5H20.0001C20.5523 18.5 21.0001 18.0523 21.0001 17.5C21.0001 16.9477 20.5523 16.5 20.0001 16.5H14.0001Z" fill="currentColor"/>
<path d="M4.00006 20C3.44778 20 3.00006 20.4477 3.00006 21C3.00006 21.5523 3.44778 22 4.00006 22H10.0001C10.5523 22 11.0001 21.5523 11.0001 21C11.0001 20.4477 10.5523 20 10.0001 20H4.00006Z" fill="currentColor"/>
<path d="M14.0001 20C13.4478 20 13.0001 20.4477 13.0001 21C13.0001 21.5523 13.4478 22 14.0001 22H20.0001C20.5523 22 21.0001 21.5523 21.0001 21C21.0001 20.4477 20.5523 20 20.0001 20H14.0001Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 3L21 10H3L12 3Z" fill="currentColor"/>
<path d="M4 21H10M14 21H20M4 17.5H10M14 17.5H20M4 14H10M14 14H20M19 8.44444V5M12 7.00671L12.0074 6.99998M12 3L21 10H3L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M4 13C3.44772 13 3 13.4477 3 14C3 14.5523 3.44772 15 4 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H4Z" fill="currentColor"/>
<path d="M14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H20C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13H14Z" fill="currentColor"/>
<path d="M4 16.5C3.44772 16.5 3 16.9477 3 17.5C3 18.0523 3.44772 18.5 4 18.5H10C10.5523 18.5 11 18.0523 11 17.5C11 16.9477 10.5523 16.5 10 16.5H4Z" fill="currentColor"/>
<path d="M14 16.5C13.4477 16.5 13 16.9477 13 17.5C13 18.0523 13.4477 18.5 14 18.5H20C20.5523 18.5 21 18.0523 21 17.5C21 16.9477 20.5523 16.5 20 16.5H14Z" fill="currentColor"/>
<path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H10C10.5523 22 11 21.5523 11 21C11 20.4477 10.5523 20 10 20H4Z" fill="currentColor"/>
<path d="M14 20C13.4477 20 13 20.4477 13 21C13 21.5523 13.4477 22 14 22H20C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20H14Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.614 2.21065C12.2529 1.92978 11.7472 1.92978 11.3861 2.21065L2.38612 9.21065C2.0489 9.47293 1.91554 9.92046 2.05419 10.3245C2.19283 10.7286 2.57286 11 3.00006 11H21.0001C21.4273 11 21.8073 10.7286 21.9459 10.3245C22.0846 9.92046 21.9512 9.47293 21.614 9.21065L21.0001 8.73314V5C21.0001 4.44772 20.5523 4 20.0001 4C19.4478 4 19.0001 4.44772 19.0001 5V7.17758L12.614 2.21065ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21H10M14 21H20M4 17.5H10M14 17.5H20M4 14H10M14 14H20M19 8.44444V5M12 7.00671L12.0074 6.99998M12 3L21 10H3L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default BuildingColumns;