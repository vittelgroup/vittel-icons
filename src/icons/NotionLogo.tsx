import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const NotionLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 20H7M3 4H7M17 4H21M5 4V20M5 4L14.5 20H19M5 4H9.5L19 20M19 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H4V19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H7C7.55228 21 8 20.5523 8 20C8 19.4477 7.55228 19 7 19H6V7.64293L13.6401 20.5105C13.8203 20.814 14.1471 21 14.5 21H19C19.5523 21 20 20.5523 20 20V5H21C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H17C16.4477 3 16 3.44772 16 4C16 4.55228 16.4477 5 17 5H18V16.3571L10.3599 3.48946C10.1797 3.18601 9.85291 3 9.5 3H3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 4L14.5 20H19L9.5 4H5Z" fill="currentColor"/>
<path d="M3 20H7M3 4H7M17 4H21M5 4V20M5 4L14.5 20H19M5 4H9.5L19 20M19 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H7C7.55228 21 8 20.5523 8 20C8 19.4477 7.55228 19 7 19H6V5H7C7.55228 5 8 4.55228 8 4C8 3.44772 7.55228 3 7 3H5H3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H4V19H3Z" fill="currentColor"/>
<path d="M17 3C16.4477 3 16 3.44772 16 4C16 4.55228 16.4477 5 17 5H18V20C18 20.5523 18.4477 21 19 21C19.5523 21 20 20.5523 20 20V5H21C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H17Z" fill="currentColor"/>
</g>
<path d="M5 3C4.64055 3 4.30876 3.19291 4.13094 3.5053C3.95312 3.81768 3.95663 4.20147 4.14015 4.51054L13.6401 20.5105C13.8203 20.814 14.1471 21 14.5 21H19C19.3594 21 19.6912 20.8071 19.8691 20.4947C20.0469 20.1823 20.0434 19.7985 19.8599 19.4895L10.3599 3.48946C10.1797 3.18601 9.85291 3 9.5 3H5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 20H7M3 4H7M17 4H21M5 4V20M5 4L14.5 20H19M5 4H9.5L19 20M19 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default NotionLogo;