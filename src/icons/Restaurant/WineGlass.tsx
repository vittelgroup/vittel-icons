import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WineGlass: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 13V21M12 13C15.3137 13 18 10.3137 18 7V3H6V7C6 10.3137 8.68629 13 12 13ZM8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V7C19 10.5265 16.3923 13.4439 13 13.9291V20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11V13.9291C7.60771 13.4439 5 10.5265 5 7V3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M18 3H6V7C6 10.3137 8.68629 13 12 13C15.3137 13 18 10.3137 18 7V3Z" fill="currentColor"/>
<path d="M12 13V21M12 13C15.3137 13 18 10.3137 18 7V3H6V7C6 10.3137 8.68629 13 12 13ZM8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3V7C19 10.866 15.866 14 12 14C8.13401 14 5 10.866 5 7V3Z" fill="currentColor"/>
<path d="M11 13.9291V20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13V13.9291C12.6734 13.9758 12.3395 14 12 14C11.6605 14 11.3266 13.9758 11 13.9291Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 13V21M12 13C15.3137 13 18 10.3137 18 7V3H6V7C6 10.3137 8.68629 13 12 13ZM8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default WineGlass;