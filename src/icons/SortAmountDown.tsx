import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SortAmountDown: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6.55228 6 7 6.44772 7 7V14.5858L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929C10.0976 13.6834 10.0976 14.3166 9.70711 14.7071L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071L2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929C2.68342 12.9024 3.31658 12.9024 3.70711 13.2929L5 14.5858V7C5 6.44772 5.44772 6 6 6ZM12 8C12 7.44772 12.4477 7 13 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H13C12.4477 9 12 8.55228 12 8ZM12 12C12 11.4477 12.4477 11 13 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13C12.4477 13 12 12.5523 12 12ZM12 16C12 15.4477 12.4477 15 13 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H13C12.4477 17 12 16.5523 12 16Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 8C12 7.44772 12.4477 7 13 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H13C12.4477 9 12 8.55228 12 8ZM12 12C12 11.4477 12.4477 11 13 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13C12.4477 13 12 12.5523 12 12ZM12 16C12 15.4477 12.4477 15 13 15H21C21.5523 15 22 15.4477 22 16C22 16.5523 21.5523 17 21 17H13C12.4477 17 12 16.5523 12 16Z" fill="currentColor"/>
<path d="M6 6C6.55228 6 7 6.44772 7 7V14.5858L8.29289 13.2929C8.68342 12.9024 9.31658 12.9024 9.70711 13.2929C10.0976 13.6834 10.0976 14.3166 9.70711 14.7071L6.70711 17.7071C6.31658 18.0976 5.68342 18.0976 5.29289 17.7071L2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929C2.68342 12.9024 3.31658 12.9024 3.70711 13.2929L5 14.5858V7C5 6.44772 5.44772 6 6 6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SortAmountDown;