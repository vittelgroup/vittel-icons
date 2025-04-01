import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TumblrLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 21V17H15C13.8954 17 13 16.1046 13 15V11H18V7H13V3H9V4.1C9 5.70163 7.70163 7 6.1 7H6V11H9V15C9 18.3137 11.6863 21 15 21H18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 2C8.44772 2 8 2.44772 8 3V4.1C8 5.14934 7.14934 6 6.1 6H6C5.44772 6 5 6.44772 5 7V11C5 11.5523 5.44772 12 6 12H8V15C8 18.866 11.134 22 15 22H18C18.5523 22 19 21.5523 19 21V17C19 16.4477 18.5523 16 18 16H15C14.4477 16 14 15.5523 14 15V12H18C18.5523 12 19 11.5523 19 11V7C19 6.44772 18.5523 6 18 6H14V3C14 2.44772 13.5523 2 13 2H9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M18 21V17H15C13.8954 17 13 16.1046 13 15V11H18V7H13V3H9V4.1C9 5.70163 7.70163 7 6.1 7H6V11H9V15C9 18.3137 11.6863 21 15 21H18Z" fill="currentColor"/>
<path d="M18 21V17H15C13.8954 17 13 16.1046 13 15V11H18V7H13V3H9V4.1C9 5.70163 7.70163 7 6.1 7H6V11H9V15C9 18.3137 11.6863 21 15 21H18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M9 2C8.44772 2 8 2.44772 8 3V4.1C8 5.14934 7.14934 6 6.1 6H6C5.44772 6 5 6.44772 5 7V11C5 11.5523 5.44772 12 6 12H8V15C8 18.866 11.134 22 15 22H18C18.5523 22 19 21.5523 19 21V17C19 16.4477 18.5523 16 18 16H15C14.4477 16 14 15.5523 14 15V12H18C18.5523 12 19 11.5523 19 11V7C19 6.44772 18.5523 6 18 6H14V3C14 2.44772 13.5523 2 13 2H9Z" fill="currentColor"/>
<path d="M6 6C5.44772 6 5 6.44772 5 7V11C5 11.5523 5.44772 12 6 12H18C18.5523 12 19 11.5523 19 11V7C19 6.44772 18.5523 6 18 6H6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 21V17H15C13.8954 17 13 16.1046 13 15V11H18V7H13V3H9V4.1C9 5.70163 7.70163 7 6.1 7H6V11H9V15C9 18.3137 11.6863 21 15 21H18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TumblrLogo;