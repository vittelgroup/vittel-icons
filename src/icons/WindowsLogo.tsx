import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WindowsLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 4.32353V10H21V3L13.5 4.32353Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 19.6765V14H21V21L13.5 19.6765Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 19.0833V14H3V18L9.5 19.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 4.91667V10H3V6L9.5 4.91667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 3.00001C22 2.70439 21.8692 2.42392 21.6427 2.23392C21.4163 2.04392 21.1173 1.96385 20.8262 2.01522L13.3262 3.33875C12.8484 3.42308 12.5 3.8383 12.5 4.32354V10C12.5 10.5523 12.9477 11 13.5 11H21C21.5523 11 22 10.5523 22 10V3.00001Z" fill="currentColor"/>
<path d="M10.5 4.91667C10.5 4.62272 10.3707 4.34366 10.1464 4.15365C9.92208 3.96365 9.62555 3.88196 9.3356 3.93028L2.8356 5.01361C2.35341 5.09398 2 5.51117 2 6.00001V10C2 10.5523 2.44772 11 3 11H9.5C10.0523 11 10.5 10.5523 10.5 10V4.91667Z" fill="currentColor"/>
<path d="M3 13C2.44772 13 2 13.4477 2 14V18C2 18.4888 2.35341 18.906 2.8356 18.9864L9.3356 20.0697C9.62555 20.1181 9.92208 20.0364 10.1464 19.8464C10.3707 19.6564 10.5 19.3773 10.5 19.0833V14C10.5 13.4477 10.0523 13 9.5 13H3Z" fill="currentColor"/>
<path d="M13.5 13C12.9477 13 12.5 13.4477 12.5 14V19.6765C12.5 20.1617 12.8484 20.5769 13.3262 20.6613L20.8262 21.9848C21.1173 22.0362 21.4163 21.9561 21.6427 21.7661C21.8692 21.5761 22 21.2956 22 21V14C22 13.4477 21.5523 13 21 13H13.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M13.5 4.32353V10H21V3L13.5 4.32353Z" fill="currentColor"/>
<path d="M13.5 19.6765V14H21V21L13.5 19.6765Z" fill="currentColor"/>
<path d="M9.5 19.0833V14H3V18L9.5 19.0833Z" fill="currentColor"/>
<path d="M9.5 4.91667V10H3V6L9.5 4.91667Z" fill="currentColor"/>
</g>
<path d="M13.5 4.32353V10H21V3L13.5 4.32353Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 19.6765V14H21V21L13.5 19.6765Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 19.0833V14H3V18L9.5 19.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 4.91667V10H3V6L9.5 4.91667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M22 3.00001C22 2.70439 21.8692 2.42392 21.6427 2.23392C21.4163 2.04392 21.1173 1.96385 20.8262 2.01522L13.3262 3.33875C12.8484 3.42308 12.5 3.8383 12.5 4.32354V10C12.5 10.5523 12.9477 11 13.5 11H21C21.5523 11 22 10.5523 22 10V3.00001Z" fill="currentColor"/>
<path d="M3 13C2.44772 13 2 13.4477 2 14V18C2 18.4888 2.35341 18.906 2.8356 18.9864L9.3356 20.0697C9.62555 20.1181 9.92208 20.0364 10.1464 19.8464C10.3707 19.6564 10.5 19.3773 10.5 19.0833V14C10.5 13.4477 10.0523 13 9.5 13H3Z" fill="currentColor"/>
</g>
<path d="M10.5 4.91676C10.5 4.6228 10.3707 4.34374 10.1464 4.15374C9.92208 3.96373 9.62555 3.88204 9.3356 3.93036L2.8356 5.0137C2.35341 5.09406 2 5.51125 2 6.00009V10.0001C2 10.5524 2.44772 11.0001 3 11.0001H9.5C10.0523 11.0001 10.5 10.5524 10.5 10.0001V4.91676Z" fill="currentColor"/>
<path d="M13.5 13.0001C12.9477 13.0001 12.5 13.4478 12.5 14.0001V19.6766C12.5 20.1618 12.8484 20.577 13.3262 20.6613L20.8262 21.9849C21.1173 22.0362 21.4163 21.9562 21.6427 21.7662C21.8692 21.5762 22 21.2957 22 21.0001V14.0001C22 13.4478 21.5523 13.0001 21 13.0001H13.5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 4.32353V10H21V3L13.5 4.32353Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 19.6765V14H21V21L13.5 19.6765Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 19.0833V14H3V18L9.5 19.0833Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9.5 4.91667V10H3V6L9.5 4.91667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default WindowsLogo;