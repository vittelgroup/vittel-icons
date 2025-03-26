import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PresentationChartArrow: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 3V16H19V3M3 16H21M11.5 20C11.2239 20 11 20.2239 11 20.5C11 20.7761 11.2239 21 11.5 21C11.7761 21 12 20.7761 12 20.5C12 20.2239 11.7761 20 11.5 20ZM11.5 20V16M8 11V8L12 11L16 7M16 7H13M16 7V10M11.5 20.5H11.51M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H4V15H3C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H10.5V19.3819C10.1931 19.6566 10 20.0557 10 20.5C10 21.3284 10.6716 22 11.5 22C12.3284 22 13 21.3284 13 20.5C13 20.0557 12.8069 19.6566 12.5 19.3819V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H20V4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3ZM12 7C12 7.55228 12.4477 8 13 8H13.5858L11.9062 9.67962L8.6 7.2C8.29698 6.97274 7.89157 6.93618 7.55279 7.10557C7.214 7.27496 7 7.62123 7 8V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V10L11.4 11.8C11.7981 12.0986 12.3552 12.059 12.7071 11.7071L15 9.41421V10C15 10.5523 15.4477 11 16 11C16.5523 11 17 10.5523 17 10V7C17 6.44772 16.5523 6 16 6H13C12.4477 6 12 6.44772 12 7Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="5" y="3" width="14" height="13" fill="#0000CC"/>
<path d="M5 3V16H19V3M3 16H21M11.5 20C11.2239 20 11 20.2239 11 20.5C11 20.7761 11.2239 21 11.5 21C11.7761 21 12 20.7761 12 20.5C12 20.2239 11.7761 20 11.5 20ZM11.5 20V16M8 11V8L12 11L16 7M16 7H13M16 7V10M11.5 20.5H11.51M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.3" x="4" y="4" width="16" height="11" fill="#0000CC"/>
<path d="M3 4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4Z" fill="currentColor"/>
<path d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H10.5V19.3819C10.1931 19.6566 10 20.0557 10 20.5C10 21.3284 10.6716 22 11.5 22C12.3284 22 13 21.3284 13 20.5C13 20.0557 12.8069 19.6566 12.5 19.3819V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H3Z" fill="currentColor"/>
<path d="M13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6H16C16.5523 6 17 6.44772 17 7V10C17 10.5523 16.5523 11 16 11C15.4477 11 15 10.5523 15 10V9.41421L12.7071 11.7071C12.3552 12.059 11.7981 12.0986 11.4 11.8L9 10V11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11V8C7 7.62123 7.214 7.27496 7.55279 7.10557C7.89157 6.93618 8.29698 6.97274 8.6 7.2L11.9062 9.67962L13.5858 8H13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 3V16H19V3M3 16H21M11.5 20C11.2239 20 11 20.2239 11 20.5C11 20.7761 11.2239 21 11.5 21C11.7761 21 12 20.7761 12 20.5C12 20.2239 11.7761 20 11.5 20ZM11.5 20V16M8 11V8L12 11L16 7M16 7H13M16 7V10M11.5 20.5H11.51M3 3H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default PresentationChartArrow;