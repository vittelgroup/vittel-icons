import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const AustralSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 21L12 3L19 21M19 15H5M19 11H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 2C12.4127 2 12.7828 2.25318 12.9323 2.63755L15.7954 10H19.0003C19.5526 10 20.0003 10.4477 20.0003 11C20.0003 11.5523 19.5526 12 19.0003 12H16.5732L17.351 14H19.0003C19.5526 14 20.0003 14.4477 20.0003 15C20.0003 15.5523 19.5526 16 19.0003 16H18.1288L19.9323 20.6376C20.1324 21.1523 19.8774 21.7318 19.3627 21.932C18.848 22.1322 18.2684 21.8772 18.0683 21.3624L15.9829 16H8.01767L5.93227 21.3624C5.7321 21.8772 5.15255 22.1322 4.63782 21.932C4.12309 21.7318 3.86809 21.1523 4.06826 20.6376L5.87176 16H5.00027C4.44798 16 4.00027 15.5523 4.00027 15C4.00027 14.4477 4.44798 14 5.00027 14H6.64953L7.42731 12H5.00027C4.44798 12 4.00027 11.5523 4.00027 11C4.00027 10.4477 4.44798 10 5.00027 10H8.20509L11.0683 2.63755C11.2177 2.25318 11.5879 2 12.0003 2ZM9.57322 12L8.79545 14H15.2051L14.4273 12H9.57322ZM13.6495 10H10.351L12.0003 5.75903L13.6495 10Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M7.33398 15H16.6673L12.0007 3L7.33398 15Z" fill="currentColor"/>
<path d="M5 21L12 3L19 21M19 15H5M19 11H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M12.9323 2.63755C12.7828 2.25318 12.4127 2 12.0003 2C11.5879 2 11.2177 2.25318 11.0683 2.63755L8.20509 10H10.351L12.0003 5.75903L13.6495 10H15.7954L12.9323 2.63755Z" fill="currentColor"/>
<path d="M16.5732 12H14.4273L15.2051 14H17.351L16.5732 12Z" fill="currentColor"/>
<path d="M18.1288 16H15.9829L18.0683 21.3624C18.2684 21.8772 18.848 22.1322 19.3627 21.932C19.8774 21.7318 20.1324 21.1523 19.9323 20.6376L18.1288 16Z" fill="currentColor"/>
<path d="M8.79545 14L9.57322 12H7.42731L6.64953 14H8.79545Z" fill="currentColor"/>
<path d="M5.87176 16H8.01767L5.93227 21.3624C5.7321 21.8772 5.15255 22.1322 4.63782 21.932C4.12309 21.7318 3.86809 21.1523 4.06826 20.6376L5.87176 16Z" fill="currentColor"/>
</g>
<path d="M5 10C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12H19C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10H5Z" fill="currentColor"/>
<path d="M5 14C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 21L12 3L19 21M19 15H5M19 11H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default AustralSign;