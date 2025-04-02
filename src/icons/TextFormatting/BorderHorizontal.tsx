import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BorderHorizontal: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 4H16.01M12 4H12.01M12 8H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 4H8.01M4 4H4.01M4 8H4.01M4 16H4.01M4 20H4.01M8 20H8.01M20 4H20.01M20 8H20.01M20 16H20.01M20 20H20.01M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4Z" fill="currentColor"/>
<path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="currentColor"/>
<path d="M4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21Z" fill="currentColor"/>
<path d="M9 4C9 4.55228 8.55229 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55229 3 9 3.44772 9 4Z" fill="currentColor"/>
<path d="M8 21C8.55229 21 9 20.5523 9 20C9 19.4477 8.55229 19 8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21Z" fill="currentColor"/>
<path d="M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="currentColor"/>
<path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" fill="currentColor"/>
<path d="M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z" fill="currentColor"/>
<path d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z" fill="currentColor"/>
<path d="M21 4C21 4.55228 20.5523 5 20 5C19.4477 5 19 4.55228 19 4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4Z" fill="currentColor"/>
<path d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z" fill="currentColor"/>
<path d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z" fill="currentColor"/>
<path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
<path d="M5 16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16Z" fill="currentColor"/>
<path d="M4 9C4.55228 9 5 8.55229 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9Z" fill="currentColor"/>
<path d="M13 8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="currentColor"/>
<path d="M20 9C20.5523 9 21 8.55229 21 8C21 7.44772 20.5523 7 20 7C19.4477 7 19 7.44772 19 8C19 8.55229 19.4477 9 20 9Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="4" y="4" width="16" height="16" fill="#0000CC"/>
<path d="M16 4H16.01M12 4H12.01M12 8H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 4H8.01M4 4H4.01M4 8H4.01M4 16H4.01M4 20H4.01M8 20H8.01M20 4H20.01M20 8H20.01M20 16H20.01M20 20H20.01M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4Z" fill="currentColor"/>
<path d="M4 21C4.55228 21 5 20.5523 5 20C5 19.4477 4.55228 19 4 19C3.44772 19 3 19.4477 3 20C3 20.5523 3.44772 21 4 21Z" fill="currentColor"/>
<path d="M9 4C9 4.55228 8.55229 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55229 3 9 3.44772 9 4Z" fill="currentColor"/>
<path d="M8 21C8.55229 21 9 20.5523 9 20C9 19.4477 8.55229 19 8 19C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21Z" fill="currentColor"/>
<path d="M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="currentColor"/>
<path d="M12 21C12.5523 21 13 20.5523 13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20C11 20.5523 11.4477 21 12 21Z" fill="currentColor"/>
<path d="M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z" fill="currentColor"/>
<path d="M16 21C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19C15.4477 19 15 19.4477 15 20C15 20.5523 15.4477 21 16 21Z" fill="currentColor"/>
<path d="M21 4C21 4.55228 20.5523 5 20 5C19.4477 5 19 4.55228 19 4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4Z" fill="currentColor"/>
<path d="M20 21C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19C19.4477 19 19 19.4477 19 20C19 20.5523 19.4477 21 20 21Z" fill="currentColor"/>
<path d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z" fill="currentColor"/>
<path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="currentColor"/>
<path d="M5 16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16Z" fill="currentColor"/>
<path d="M4 9C4.55228 9 5 8.55229 5 8C5 7.44772 4.55228 7 4 7C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9Z" fill="currentColor"/>
<path d="M13 8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="currentColor"/>
<path d="M20 9C20.5523 9 21 8.55229 21 8C21 7.44772 20.5523 7 20 7C19.4477 7 19 7.44772 19 8C19 8.55229 19.4477 9 20 9Z" fill="currentColor"/>
</g>
<path d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 4H16.01M12 4H12.01M12 8H12.01M12 16H12.01M12 20H12.01M16 20H16.01M8 4H8.01M4 4H4.01M4 8H4.01M4 16H4.01M4 20H4.01M8 20H8.01M20 4H20.01M20 8H20.01M20 16H20.01M20 20H20.01M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default BorderHorizontal;