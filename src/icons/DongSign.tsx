import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DongSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 20H6M16 17V3M14 6H18M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16.5523 2 17 2.44772 17 3V5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H17V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V16.4649C14.4117 16.8052 13.7286 17 13 17C10.7909 17 9 15.2091 9 13C9 10.7909 10.7909 9 13 9C13.7286 9 14.4117 9.19479 15 9.53513V7H14C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5H15V3C15 2.44772 15.4477 2 16 2ZM15 13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13C11 14.1046 11.8954 15 13 15C14.1046 15 15 14.1046 15 13ZM5 20C5 19.4477 5.44772 19 6 19H18C18.5523 19 19 19.4477 19 20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="13" cy="13" r="3" fill="#0000CC"/>
<path d="M18 20H6M16 17V3M14 6H18M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7H18C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5H14Z" fill="currentColor"/>
<path d="M6 19C5.44772 19 5 19.4477 5 20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20C19 19.4477 18.5523 19 18 19H6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C16.5523 2 17 2.44772 17 3C17 7.04122 17 9.44104 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V16.4649C14.4117 16.8052 13.7286 17 13 17C10.7909 17 9 15.2091 9 13C9 10.7909 10.7909 9 13 9C13.7286 9 14.4117 9.19479 15 9.53513C15 5.79283 15 6.37803 15 3C15 2.44772 15.4477 2 16 2ZM15 13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13C11 14.1046 11.8954 15 13 15C14.1046 15 15 14.1046 15 13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 20H6M16 17V3M14 6H18M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default DongSign;