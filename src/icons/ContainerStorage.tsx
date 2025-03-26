import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ContainerStorage: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 19H21M3 5H21M4 5V19M20 5V19M8 8.5V15.5M16 8.5V15.5M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6V18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18V6C21.5523 6 22 5.55228 22 5C22 4.44772 21.5523 4 21 4H3ZM8 7.5C8.55228 7.5 9 7.94772 9 8.5V15.5C9 16.0523 8.55228 16.5 8 16.5C7.44772 16.5 7 16.0523 7 15.5V8.5C7 7.94772 7.44772 7.5 8 7.5ZM12 7.5C12.5523 7.5 13 7.94772 13 8.5V15.5C13 16.0523 12.5523 16.5 12 16.5C11.4477 16.5 11 16.0523 11 15.5V8.5C11 7.94772 11.4477 7.5 12 7.5ZM17 8.5C17 7.94772 16.5523 7.5 16 7.5C15.4477 7.5 15 7.94772 15 8.5V15.5C15 16.0523 15.4477 16.5 16 16.5C16.5523 16.5 17 16.0523 17 15.5V8.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="4" y="5" width="16" height="14" fill="#0000CC"/>
<path d="M3 19H21M3 5H21M4 5V19M20 5V19M8 8.5V15.5M16 8.5V15.5M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M21 6H3V18H21V6ZM9 8.5C9 7.94772 8.55228 7.5 8 7.5C7.44772 7.5 7 7.94772 7 8.5V15.5C7 16.0523 7.44772 16.5 8 16.5C8.55228 16.5 9 16.0523 9 15.5V8.5ZM13 8.5C13 7.94772 12.5523 7.5 12 7.5C11.4477 7.5 11 7.94772 11 8.5V15.5C11 16.0523 11.4477 16.5 12 16.5C12.5523 16.5 13 16.0523 13 15.5V8.5ZM16 7.5C16.5523 7.5 17 7.94772 17 8.5V15.5C17 16.0523 16.5523 16.5 16 16.5C15.4477 16.5 15 16.0523 15 15.5V8.5C15 7.94772 15.4477 7.5 16 7.5Z" fill="currentColor"/>
<path d="M22 5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5C2 5.55228 2.44772 6 3 6H21C21.5523 6 22 5.55228 22 5Z" fill="currentColor"/>
<path d="M22 19C22 18.4477 21.5523 18 21 18H3C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 19H21M3 5H21M4 5V19M20 5V19M8 8.5V15.5M16 8.5V15.5M12 8.5V15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ContainerStorage;