import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Block: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17H7.009M17 17H17.009M17 7H17.009M7 7H7.009M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3ZM7 6C6.44772 6 6 6.44772 6 7C6 7.55228 6.44772 8 7 8H7.009C7.56128 8 8.009 7.55228 8.009 7C8.009 6.44772 7.56128 6 7.009 6H7ZM17 6C16.4477 6 16 6.44772 16 7C16 7.55228 16.4477 8 17 8H17.009C17.5613 8 18.009 7.55228 18.009 7C18.009 6.44772 17.5613 6 17.009 6H17ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H7.009C7.56128 18 8.009 17.5523 8.009 17C8.009 16.4477 7.56128 16 7.009 16H7ZM17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18H17.009C17.5613 18 18.009 17.5523 18.009 17C18.009 16.4477 17.5613 16 17.009 16H17Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="3" y="3" width="18" height="18" fill="#0000CC"/>
<path d="M7 17H7.009M17 17H17.009M17 7H17.009M7 7H7.009M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C6 6.44772 6.44772 6 7 6H7.009C7.56128 6 8.009 6.44772 8.009 7C8.009 7.55228 7.56128 8 7.009 8H7C6.44772 8 6 7.55228 6 7ZM16 7C16 6.44772 16.4477 6 17 6H17.009C17.5613 6 18.009 6.44772 18.009 7C18.009 7.55228 17.5613 8 17.009 8H17C16.4477 8 16 7.55228 16 7ZM6 17C6 16.4477 6.44772 16 7 16H7.009C7.56128 16 8.009 16.4477 8.009 17C8.009 17.5523 7.56128 18 7.009 18H7C6.44772 18 6 17.5523 6 17ZM16 17C16 16.4477 16.4477 16 17 16H17.009C17.5613 16 18.009 16.4477 18.009 17C18.009 17.5523 17.5613 18 17.009 18H17C16.4477 18 16 17.5523 16 17Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17H7.009M17 17H17.009M17 7H17.009M7 7H7.009M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Block;