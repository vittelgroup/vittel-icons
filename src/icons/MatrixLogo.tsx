import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MatrixLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 20H4V4H8M16 4H20V20H16M8 15V11M8 9V11M12 15V11M12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11M12 11C12 9.89543 12.8954 9 14 9C15.1046 9 16 9.89543 16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM8 8C8.27588 8 8.52566 8.11171 8.70658 8.29237C9.09822 8.10495 9.53685 8 10 8C10.7684 8 11.4692 8.28885 12 8.76389C12.5308 8.28885 13.2316 8 14 8C15.6569 8 17 9.34315 17 11V15C17 15.5523 16.5523 16 16 16C15.4477 16 15 15.5523 15 15V11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V9C7 8.44772 7.44772 8 8 8Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="4" y="4" width="16" height="16" fill="#0000CC"/>
<path d="M8 20H4V4H8M16 4H20V20H16M8 15V11M8 9V11M12 15V11M12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11M12 11C12 9.89543 12.8954 9 14 9C15.1046 9 16 9.89543 16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3H4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70658 8.29237C8.52566 8.11171 8.27588 8 8 8C7.44772 8 7 8.44772 7 9V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V11C13 10.4477 13.4477 10 14 10C14.5523 10 15 10.4477 15 11V15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15V11C17 9.34315 15.6569 8 14 8C13.2316 8 12.5308 8.28885 12 8.76389C11.4692 8.28885 10.7684 8 10 8C9.53685 8 9.09822 8.10495 8.70658 8.29237Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 20H4V4H8M16 4H20V20H16M8 15V11M8 9V11M12 15V11M12 11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11M12 11C12 9.89543 12.8954 9 14 9C15.1046 9 16 9.89543 16 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default MatrixLogo;