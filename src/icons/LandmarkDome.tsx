import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LandmarkDome: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 10C18 6.68629 15.3137 4 12 4M6 10C6 6.68629 8.68629 4 12 4M12 4V3M3 10H21M3 21H21M3 18H6M6 18H10M6 18V13M10 18H14M10 18V13M14 18H18M14 18V13M18 18H21M18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V3.07089C16.0657 3.5094 18.4906 5.93431 18.9291 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H5.07089C5.5094 5.93431 7.93431 3.5094 11 3.07089V3C11 2.44772 11.4477 2 12 2ZM6 12C6.55228 12 7 12.4477 7 13V17H9V13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13V17H13V13C13 12.4477 13.4477 12 14 12C14.5523 12 15 12.4477 15 13V17H17V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H5V13C5 12.4477 5.44772 12 6 12ZM2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 4C8.68629 4 6 6.68629 6 10H18C18 6.68629 15.3137 4 12 4Z" fill="currentColor"/>
<path d="M18 10C18 6.68629 15.3137 4 12 4M6 10C6 6.68629 8.68629 4 12 4M12 4V3M3 10H21M3 21H21M3 18H6M6 18H10M6 18V13M10 18H14M10 18V13M14 18H18M14 18V13M18 18H21M18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M3 20C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H3Z" fill="currentColor"/>
<path d="M7 17V13H5V17H3C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19V13H17V17H15V13H13V17H11V13H9V17H7Z" fill="currentColor"/>
</g>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.07089C7.93431 3.5094 5.5094 5.93431 5.07089 9H3C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H18.9291C18.4906 5.93431 16.0657 3.5094 13 3.07089V3Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 10C18 6.68629 15.3137 4 12 4M6 10C6 6.68629 8.68629 4 12 4M12 4V3M3 10H21M3 21H21M3 18H6M6 18H10M6 18V13M10 18H14M10 18V13M14 18H18M14 18V13M18 18H21M18 18V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default LandmarkDome;