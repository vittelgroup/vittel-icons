import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon4: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5V21M18.5 15H5L11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4472 2.10555C11.9412 2.35254 12.1414 2.95321 11.8944 3.44719L6.61803 14H13.5V4.99997C13.5 4.44769 13.9477 3.99997 14.5 3.99997C15.0523 3.99997 15.5 4.44769 15.5 4.99997V14H18.5C19.0523 14 19.5 14.4477 19.5 15C19.5 15.5523 19.0523 16 18.5 16H15.5V21C15.5 21.5523 15.0523 22 14.5 22C13.9477 22 13.5 21.5523 13.5 21V16H5C4.65342 16 4.33156 15.8205 4.14935 15.5257C3.96714 15.2309 3.95058 14.8628 4.10557 14.5528L10.1056 2.55276C10.3526 2.05878 10.9532 1.85856 11.4472 2.10555Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5V21M18.5 15H5L11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.4472 2.10555C11.9412 2.35254 12.1414 2.95321 11.8944 3.44719L6.61803 14H13.5V4.99997C13.5 4.44769 13.9477 3.99997 14.5 3.99997C15.0523 3.99997 15.5 4.44769 15.5 4.99997V14H18.5C19.0523 14 19.5 14.4477 19.5 15C19.5 15.5523 19.0523 16 18.5 16H15.5V21C15.5 21.5523 15.0523 22 14.5 22C13.9477 22 13.5 21.5523 13.5 21V16H5C4.65342 16 4.33156 15.8205 4.14935 15.5257C3.96714 15.2309 3.95058 14.8628 4.10557 14.5528L10.1056 2.55276C10.3526 2.05878 10.9532 1.85856 11.4472 2.10555Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5V21M18.5 15H5L11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default 4;