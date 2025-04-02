import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LocationCrosshairs: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4.06189C16.6187 4.51314 19.4869 7.38128 19.9381 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.9381C19.4869 16.6187 16.6187 19.4869 13 19.9381V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19.9381C7.38128 19.4869 4.51314 16.6187 4.06189 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.06189C4.51314 7.38128 7.38128 4.51314 11 4.06189V3C11 2.44772 11.4477 2 12 2ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
<path d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V4.06189C16.6187 4.51314 19.4869 7.38128 19.9381 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19.9381C19.4869 16.6187 16.6187 19.4869 13 19.9381V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19.9381C7.38128 19.4869 4.51314 16.6187 4.06189 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H4.06189C4.51314 7.38128 7.38128 4.51314 11 4.06189V3C11 2.44772 11.4477 2 12 2ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default LocationCrosshairs;