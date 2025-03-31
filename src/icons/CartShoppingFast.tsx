import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CartShoppingFast: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H7C7.49357 2 7.91332 2.36011 7.98837 2.84794L8.16561 4H22C22.3138 4 22.6094 4.14729 22.7984 4.3978C22.9874 4.64832 23.0478 4.973 22.9616 5.27472L20.9616 12.2747C20.8389 12.704 20.4465 13 20 13H9.55023L9.85792 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H9C8.50643 17 8.08668 16.6399 8.01163 16.1521C7.38843 12.1013 6.76519 8.0502 6.14208 4H4C3.44772 4 3 3.55228 3 3ZM1 8C1 7.44772 1.44772 7 2 7H4C4.55228 7 5 7.44772 5 8C5 8.55228 4.55228 9 4 9H2C1.44772 9 1 8.55228 1 8ZM1 11C1 10.4477 1.44772 10 2 10H5C5.55228 10 6 10.4477 6 11C6 11.5523 5.55228 12 5 12H2C1.44772 12 1 11.5523 1 11ZM1 14C1 13.4477 1.44772 13 2 13H6C6.55228 13 7 13.4477 7 14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14ZM7 20C7 18.8954 7.89543 18 9 18C10.1046 18 11 18.8954 11 20C11 21.1046 10.1046 22 9 22C7.89543 22 7 21.1046 7 20ZM18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19.9997 12L21.9997 5H7.30566L8.37644 12H19.9997Z" fill="currentColor"/>
<path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8.16602 4L9.55063 13H20.0005C20.447 13 20.8394 12.704 20.9621 12.2747L22.9621 5.27472C23.0483 4.973 22.9878 4.64832 22.7989 4.3978C22.6099 4.14729 22.3143 4 22.0005 4H8.16602Z" fill="currentColor"/>
<path d="M4 2C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4H6.14208L8.01163 16.1521C8.08668 16.6399 8.50643 17 9 17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H9.85792L7.98837 2.84794C7.91332 2.36011 7.49357 2 7 2H4Z" fill="currentColor"/>
<path d="M9 18C7.89543 18 7 18.8954 7 20C7 21.1046 7.89543 22 9 22C10.1046 22 11 21.1046 11 20C11 18.8954 10.1046 18 9 18Z" fill="currentColor"/>
<path d="M20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18Z" fill="currentColor"/>
<path d="M2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9H4C4.55228 9 5 8.55228 5 8C5 7.44772 4.55228 7 4 7H2Z" fill="currentColor"/>
<path d="M2 10C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12H5C5.55228 12 6 11.5523 6 11C6 10.4477 5.55228 10 5 10H2Z" fill="currentColor"/>
<path d="M2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15H6C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13H2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CartShoppingFast;