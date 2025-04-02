import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleQuarter: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10C3 6.13401 6.13401 3 10 3V10H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 21C9.35786 21 6 17.6421 6 13.5H13.5V6C17.6421 6 21 9.35786 21 13.5C21 17.6421 17.6421 21 13.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 5.58172 5.58172 2 10 2C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10ZM12.5 6C12.5 5.44772 12.9477 5 13.5 5C18.1944 5 22 8.80558 22 13.5C22 18.1944 18.1944 22 13.5 22C8.80558 22 5 18.1944 5 13.5C5 12.9477 5.44772 12.5 6 12.5H10.9C11.4601 12.5 11.7401 12.5 11.954 12.391C12.1422 12.2951 12.2951 12.1422 12.391 11.954C12.5 11.7401 12.5 11.4601 12.5 10.9V6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M13.5 21C9.35786 21 6 17.6421 6 13.5H13.5V6C17.6421 6 21 9.35786 21 13.5C21 17.6421 17.6421 21 13.5 21Z" fill="currentColor"/>
<path d="M3 10C3 6.13401 6.13401 3 10 3V10H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 21C9.35786 21 6 17.6421 6 13.5H13.5V6C17.6421 6 21 9.35786 21 13.5C21 17.6421 17.6421 21 13.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6C12.5 5.44772 12.9477 5 13.5 5C18.1944 5 22 8.80558 22 13.5C22 18.1944 18.1944 22 13.5 22C8.80558 22 5 18.1944 5 13.5C5 12.9477 5.44772 12.5 6 12.5H10.9C11.4601 12.5 11.7401 12.5 11.954 12.391C12.1422 12.2951 12.2951 12.1422 12.391 11.954C12.5 11.7401 12.5 11.4601 12.5 10.9V6Z" fill="currentColor"/>
<path d="M2 10C2 5.58172 5.58172 2 10 2C10.5523 2 11 2.44772 11 3V10C11 10.5523 10.5523 11 10 11H3C2.44772 11 2 10.5523 2 10Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10C3 6.13401 6.13401 3 10 3V10H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M13.5 21C9.35786 21 6 17.6421 6 13.5H13.5V6C17.6421 6 21 9.35786 21 13.5C21 17.6421 17.6421 21 13.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleQuarter;