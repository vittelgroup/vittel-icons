import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowUpShortWide: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 3L11 7M7 3L3 7M14 3H15M14 9H17M14 15H19M14 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289ZM15 4H14C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4ZM13 9C13 8.44772 13.4477 8 14 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H14C13.4477 10 13 9.55228 13 9ZM13 15C13 14.4477 13.4477 14 14 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H14C13.4477 16 13 15.5523 13 15ZM13 21C13 20.4477 13.4477 20 14 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 3L11 7M7 3L3 7M14 3H15M14 9H17M14 15H19M14 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M15 4H14C13.4477 4 13 3.55228 13 3C13 2.44772 13.4477 2 14 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4Z" fill="currentColor"/>
<path d="M13 9C13 8.44772 13.4477 8 14 8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H14C13.4477 10 13 9.55228 13 9Z" fill="currentColor"/>
<path d="M13 15C13 14.4477 13.4477 14 14 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H14C13.4477 16 13 15.5523 13 15Z" fill="currentColor"/>
<path d="M13 21C13 20.4477 13.4477 20 14 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 3L11 7M7 3L3 7M14 3H15M14 9H17M14 15H19M14 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowUpShortWide;