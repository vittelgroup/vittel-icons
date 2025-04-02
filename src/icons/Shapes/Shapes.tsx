import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Shapes: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 10L12 3L16 10H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 2C12.3589 2 12.6902 2.19229 12.8682 2.50386L16.8682 9.50386C17.0451 9.81336 17.0438 10.1936 16.8649 10.5019C16.686 10.8102 16.3565 11 16 11H8C7.64353 11 7.31401 10.8102 7.13509 10.5019C6.95617 10.1936 6.9549 9.81336 7.13176 9.50386L11.1318 2.50386C11.3098 2.19229 11.6411 2 12 2Z" fill="currentColor"/>
<path d="M2 17.5C2 15.0147 4.01472 13 6.5 13C8.98528 13 11 15.0147 11 17.5C11 19.9853 8.98528 22 6.5 22C4.01472 22 2 19.9853 2 17.5Z" fill="currentColor"/>
<path d="M13.109 13.546C13 13.7599 13 14.0399 13 14.6V20.4C13 20.9601 13 21.2401 13.109 21.454C13.2049 21.6422 13.3578 21.7951 13.546 21.891C13.7599 22 14.0399 22 14.6 22H20.4C20.9601 22 21.2401 22 21.454 21.891C21.6422 21.7951 21.7951 21.6422 21.891 21.454C22 21.2401 22 20.9601 22 20.4V14.6C22 14.0399 22 13.7599 21.891 13.546C21.7951 13.3578 21.6422 13.2049 21.454 13.109C21.2401 13 20.9601 13 20.4 13H14.6C14.0399 13 13.7599 13 13.546 13.109C13.3578 13.2049 13.2049 13.3578 13.109 13.546Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M8 10L12 3L16 10H8Z" fill="currentColor"/>
<path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" fill="currentColor"/>
</g>
<path d="M8 10L12 3L16 10H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M12.8682 2.50386C12.6902 2.19229 12.3589 2 12 2C11.6411 2 11.3098 2.19229 11.1318 2.50386L7.13176 9.50386C6.9549 9.81336 6.95617 10.1936 7.13509 10.5019C7.31401 10.8102 7.64353 11 8 11H16C16.3565 11 16.686 10.8102 16.8649 10.5019C17.0438 10.1936 17.0451 9.81336 16.8682 9.50386L12.8682 2.50386Z" fill="currentColor"/>
<path d="M6.5 13C4.01472 13 2 15.0147 2 17.5C2 19.9853 4.01472 22 6.5 22C8.98528 22 11 19.9853 11 17.5C11 15.0147 8.98528 13 6.5 13Z" fill="currentColor"/>
</g>
<path d="M13 14.6C13 14.0399 13 13.7599 13.109 13.546C13.2049 13.3578 13.3578 13.2049 13.546 13.109C13.7599 13 14.0399 13 14.6 13H20.4C20.9601 13 21.2401 13 21.454 13.109C21.6422 13.2049 21.7951 13.3578 21.891 13.546C22 13.7599 22 14.0399 22 14.6V20.4C22 20.9601 22 21.2401 21.891 21.454C21.7951 21.6422 21.6422 21.7951 21.454 21.891C21.2401 22 20.9601 22 20.4 22H14.6C14.0399 22 13.7599 22 13.546 21.891C13.3578 21.7951 13.2049 21.6422 13.109 21.454C13 21.2401 13 20.9601 13 20.4V14.6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 10L12 3L16 10H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M10 17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14C8.433 14 10 15.567 10 17.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M14 14H21V21H14V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Shapes;