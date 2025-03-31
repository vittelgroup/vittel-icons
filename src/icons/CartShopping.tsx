import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CartShopping: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H6C6.49357 2 6.91332 2.36011 6.98837 2.84794L7.16561 4H21C21.3138 4 21.6094 4.14729 21.7983 4.3978C21.9873 4.64832 22.0477 4.973 21.9615 5.27472L19.9615 12.2747C19.8389 12.704 19.4465 13 19 13H8.55023L8.85792 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H8C7.50643 17 7.08668 16.6399 7.01163 16.1521C6.38844 12.1013 5.76512 8.04973 5.14208 4H3C2.44772 4 2 3.55228 2 3ZM6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20ZM17 20C17 18.8954 17.8954 18 19 18C20.1046 18 21 18.8954 21 20C21 21.1046 20.1046 22 19 22C17.8954 22 17 21.1046 17 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M18.9997 12L20.9997 5H6.30566L7.37644 12H18.9997Z" fill="currentColor"/>
<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M7.16602 4L8.55063 13H19.0005C19.447 13 19.8394 12.704 19.9621 12.2747L21.9621 5.27472C22.0483 4.973 21.9878 4.64832 21.7989 4.3978C21.6099 4.14729 21.3143 4 21.0005 4H7.16602Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H6C6.49357 2 6.91332 2.36011 6.98837 2.84794L8.85792 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H8C7.50643 17 7.08668 16.6399 7.01163 16.1521L5.14208 4H3C2.44772 4 2 3.55228 2 3ZM6 20C6 18.8954 6.89543 18 8 18C9.10457 18 10 18.8954 10 20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20ZM17 20C17 18.8954 17.8954 18 19 18C20.1046 18 21 18.8954 21 20C21 21.1046 20.1046 22 19 22C17.8954 22 17 21.1046 17 20Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CartShopping;