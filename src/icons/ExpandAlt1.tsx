import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ExpandAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M21 3H16.5M21 3V7.5M9 15L3 21M3 21L7.5 21M3 21L3 16.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4C15.9477 4 15.5 3.55228 15.5 3C15.5 2.44772 15.9477 2 16.5 2H21C21.5523 2 22 2.44772 22 3V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V5.41421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L18.5858 4H16.5ZM8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289ZM9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071L5.41421 20H7.5C8.05229 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22L3 22C2.44771 22 2 21.5523 2 21L2 16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M21 3H16.5M21 3V7.5M9 15L3 21M3 21L7.5 21M3 21L3 16.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.3" x="8.99023" y="7.57532" width="10.5024" height="2" rx="1" transform="rotate(45 8.99023 7.57532)" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4C15.9477 4 15.5 3.55228 15.5 3C15.5 2.44772 15.9477 2 16.5 2H21C21.5523 2 22 2.44772 22 3V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V5.41421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L18.5858 4H16.5ZM9.70711 14.2929C10.0976 14.6834 10.0976 15.3166 9.70711 15.7071L5.41421 20H7.5C8.05229 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22L3 22C2.44771 22 2 21.5523 2 21L2 16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L8.29289 14.2929C8.68342 13.9024 9.31658 13.9024 9.70711 14.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L21 3M21 3H16.5M21 3V7.5M9 15L3 21M3 21L7.5 21M3 21L3 16.5M15 15L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ExpandAlt1;