import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ListMusic: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 5V18M16 18C16 19.1046 14.6569 20 13 20C11.3431 20 10 19.1046 10 18C10 16.8954 11.3431 16 13 16C14.6569 16 16 16.8954 16 18ZM4 5H12M4 9H12M4 13H8M16 4L20 3V7L16 8V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6154 2.2118C20.8581 2.40131 21 2.69207 21 3.00001V7.00001C21 7.45888 20.6877 7.85886 20.2425 7.97015L17 8.78079V18C17 18.9907 16.3977 19.7652 15.676 20.2463C14.9474 20.7321 13.9983 21 13 21C12.0017 21 11.0526 20.7321 10.324 20.2463C9.6023 19.7652 9 18.9907 9 18C9 17.0093 9.6023 16.2349 10.324 15.7537C11.0526 15.268 12.0017 15 13 15C13.7125 15 14.3999 15.1365 15 15.3913V4.00001C15 3.54114 15.3123 3.14116 15.7575 3.02987L19.7575 2.02987C20.0562 1.95518 20.3727 2.0223 20.6154 2.2118ZM3 5.00001C3 4.44772 3.44772 4.00001 4 4.00001H12C12.5523 4.00001 13 4.44772 13 5.00001C13 5.55229 12.5523 6.00001 12 6.00001H4C3.44772 6.00001 3 5.55229 3 5.00001ZM3 9.00001C3 8.44772 3.44772 8.00001 4 8.00001H12C12.5523 8.00001 13 8.44772 13 9.00001C13 9.55229 12.5523 10 12 10H4C3.44772 10 3 9.55229 3 9.00001ZM3 13C3 12.4477 3.44772 12 4 12H8C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14H4C3.44772 14 3 13.5523 3 13Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M20 3L16 4V8L20 7V3Z" fill="currentColor"/>
<path d="M16 18C16 19.1046 14.6569 20 13 20C11.3431 20 10 19.1046 10 18C10 16.8954 11.3431 16 13 16C14.6569 16 16 16.8954 16 18Z" fill="currentColor"/>
</g>
<path d="M16 5V18M16 18C16 19.1046 14.6569 20 13 20C11.3431 20 10 19.1046 10 18C10 16.8954 11.3431 16 13 16C14.6569 16 16 16.8954 16 18ZM4 5H12M4 9H12M4 13H8M16 4L20 3V7L16 8V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 4.44772 3.44772 4 4 4H12C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6H4C3.44772 6 3 5.55228 3 5ZM3 9C3 8.44772 3.44772 8 4 8H12C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10H4C3.44772 10 3 9.55228 3 9ZM3 13C3 12.4477 3.44772 12 4 12H8C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14H4C3.44772 14 3 13.5523 3 13Z" fill="currentColor"/>
<path d="M20.6154 2.2118C20.8581 2.40131 21 2.69207 21 3.00001V7.00001C21 7.45888 20.6877 7.85886 20.2425 7.97015L17 8.78079V18C17 18.9907 16.3977 19.7652 15.676 20.2463C14.9474 20.7321 13.9983 21 13 21C12.0017 21 11.0526 20.7321 10.324 20.2463C9.6023 19.7652 9 18.9907 9 18C9 17.0093 9.6023 16.2349 10.324 15.7537C11.0526 15.268 12.0017 15 13 15C13.7125 15 14.3999 15.1365 15 15.3913V4.00001C15 3.54114 15.3123 3.14116 15.7575 3.02987L19.7575 2.02987C20.0562 1.95518 20.3727 2.0223 20.6154 2.2118Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 5V18M16 18C16 19.1046 14.6569 20 13 20C11.3431 20 10 19.1046 10 18C10 16.8954 11.3431 16 13 16C14.6569 16 16 16.8954 16 18ZM4 5H12M4 9H12M4 13H8M16 4L20 3V7L16 8V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ListMusic;