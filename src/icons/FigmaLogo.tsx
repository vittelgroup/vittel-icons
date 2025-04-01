import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FigmaLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9H12M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12M15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9ZM12 9V3M12 9H9M12 9V15M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C6.79086 2 5 3.79086 5 6C5 7.19469 5.52376 8.26706 6.35418 9C5.52376 9.73295 5 10.8053 5 12C5 13.1947 5.52376 14.2671 6.35418 15C5.52376 15.7329 5 16.8053 5 18C5 20.2091 6.79086 22 9 22C11.2091 22 13 20.2091 13 18V15.4649C13.5883 15.8052 14.2714 16 15 16C17.2091 16 19 14.2091 19 12C19 10.8053 18.4762 9.73295 17.6458 9C18.4762 8.26706 19 7.19469 19 6C19 3.79086 17.2091 2 15 2H9ZM9 10H11V14H9C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10ZM17 6C17 7.10457 16.1046 8 15 8H13V4H15C16.1046 4 17 4.89543 17 6Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12Z" fill="currentColor"/>
<path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9H12V3Z" fill="currentColor"/>
<path d="M12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21C10.6569 21 12 19.6569 12 18Z" fill="currentColor"/>
</g>
<path d="M15 9H12M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12M15 9C13.3431 9 12 10.3431 12 12M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12M12 9V3M12 9H9M12 9V15M12 9V12M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 12V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9 2C6.79086 2 5 3.79086 5 6C5 7.19469 5.52376 8.26706 6.35418 9C5.52376 9.73295 5 10.8053 5 12C5 13.1947 5.52376 14.2671 6.35418 15C5.52376 15.7329 5 16.8053 5 18C5 20.2091 6.79086 22 9 22C11.2091 22 13 20.2091 13 18V15.4649C13.5883 15.8052 14.2714 16 15 16C17.2091 16 19 14.2091 19 12C19 10.8053 18.4762 9.73295 17.6458 9C18.4762 8.26706 19 7.19469 19 6C19 3.79086 17.2091 2 15 2H9ZM9 10H11V14H9C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10ZM17 6C17 7.10457 16.1046 8 15 8H13V4H15C16.1046 4 17 4.89543 17 6Z" fill="currentColor"/>
<path d="M9 10H11V14H9C7.89543 14 7 13.1046 7 12C7 10.8954 7.89543 10 9 10Z" fill="currentColor"/>
<path d="M17 6C17 7.10457 16.1046 8 15 8H13V4H15C16.1046 4 17 4.89543 17 6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9H12M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12M15 9C13.3431 9 12 10.3431 12 12C12 13.6569 13.3431 15 15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9ZM12 9V3M12 9H9M12 9V15M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default FigmaLogo;