import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const UserMinus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 18L14 18M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H18C18.5523 22 19 21.5523 19 21H14C12.3431 21 11 19.6569 11 18C11 16.3431 12.3431 15 14 15H16.2916C14.8814 13.7553 13.0289 13 11 13Z" fill="currentColor"/>
<path d="M14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19L20 19C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17L14 17Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" fill="currentColor"/>
<path d="M11 14C7.13401 14 4 17.134 4 21H18C18 17.134 14.866 14 11 14Z" fill="currentColor"/>
</g>
<path d="M20 18L14 18M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H18C18.5523 22 19 21.5523 19 21H14C12.3431 21 11 19.6569 11 18C11 16.3431 12.3431 15 14 15H16.2916C14.8814 13.7553 13.0289 13 11 13Z" fill="currentColor"/>
</g>
<path d="M14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19L20 19C20.5523 19 21 18.5523 21 18C21 17.4477 20.5523 17 20 17L14 17Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 18L14 18M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default UserMinus;