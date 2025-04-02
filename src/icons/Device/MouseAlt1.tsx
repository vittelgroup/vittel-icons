import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MouseAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V9M12 3C15.3137 3 18 5.68629 18 9M12 3C8.68629 3 6 5.68629 6 9M6 9H18M6 9V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2.07086C7.93431 2.50937 5.5094 4.93428 5.07089 7.99997H11V2.07086Z" fill="currentColor"/>
<path d="M5 9.99997V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15V9.99997H5Z" fill="currentColor"/>
<path d="M18.9291 7.99997H13V2.07086C16.0657 2.50937 18.4906 4.93428 18.9291 7.99997Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V9Z" fill="currentColor"/>
<path d="M12 3V9M12 3C15.3137 3 18 5.68629 18 9M12 3C8.68629 3 6 5.68629 6 9M6 9H18M6 9V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" fill="currentColor"/>
<path d="M5.07089 8H11V2.07089C11.3266 2.02417 11.6605 2 12 2C12.3395 2 12.6734 2.02417 13 2.07089V8H18.9291C18.9758 8.3266 19 8.66048 19 9V10H5V9C5 8.66048 5.02417 8.3266 5.07089 8Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V9M12 3C15.3137 3 18 5.68629 18 9M12 3C8.68629 3 6 5.68629 6 9M6 9H18M6 9V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MouseAlt1;