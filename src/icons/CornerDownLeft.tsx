import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerDownLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V6.4C20 9.76032 20 11.4405 19.346 12.7239C18.7708 13.8529 17.8529 14.7708 16.7239 15.346C15.4405 16 13.7603 16 10.4 16H4M4 16L8 12M4 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 3C20.5523 3 21 3.44772 21 4V6.44444C21 8.08697 21 9.38091 20.9149 10.4222C20.8281 11.4846 20.6478 12.3717 20.237 13.1779C19.5659 14.4951 18.4951 15.5659 17.1779 16.237C16.3717 16.6478 15.4846 16.8281 14.4222 16.9149C13.3809 17 12.0869 17 10.4444 17H6.41421L8.70711 19.2929C9.09763 19.6834 9.09763 20.3166 8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071L6.41421 15H10.4C12.0967 15 13.309 14.9992 14.2594 14.9216C15.198 14.8449 15.7927 14.6982 16.27 14.455C17.2108 13.9757 17.9757 13.2108 18.455 12.27C18.6982 11.7927 18.8449 11.198 18.9216 10.2594C18.9992 9.30901 19 8.09666 19 6.4V4C19 3.44772 19.4477 3 20 3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V6.4C20 9.76032 20 11.4405 19.346 12.7239C18.7708 13.8529 17.8529 14.7708 16.7239 15.346C15.4405 16 13.7603 16 10.4 16H4M4 16L8 12M4 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M20.0004 3C20.5527 3 21.0004 3.44772 21.0004 4V6.44444C21.0004 8.08697 21.0004 9.38091 20.9153 10.4222C20.8285 11.4846 20.6482 12.3717 20.2374 13.1779C19.5663 14.4951 18.4955 15.5659 17.1783 16.237C16.3721 16.6478 15.485 16.8281 14.4226 16.9149C13.3813 17 12.0873 17 10.4448 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H10.4004C12.097 15 13.3094 14.9992 14.2597 14.9216C15.1984 14.8449 15.7931 14.6982 16.2703 14.455C17.2112 13.9757 17.9761 13.2108 18.4554 12.27C18.6986 11.7927 18.8453 11.198 18.922 10.2594C18.9996 9.30901 19.0004 8.09666 19.0004 6.4V4C19.0004 3.44772 19.4481 3 20.0004 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071L5.41421 16L8.70711 19.2929C9.09763 19.6834 9.09763 20.3166 8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929L7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V6.4C20 9.76032 20 11.4405 19.346 12.7239C18.7708 13.8529 17.8529 14.7708 16.7239 15.346C15.4405 16 13.7603 16 10.4 16H4M4 16L8 12M4 16L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CornerDownLeft;