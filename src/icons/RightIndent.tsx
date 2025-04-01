import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RightIndent: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 6H13M9 6V18M21 10H13M21 14H13M21 18H13M3 10L5 12L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9.55228 5 10 5.44772 10 6V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V6C8 5.44772 8.44772 5 9 5ZM12 6C12 5.44772 12.4477 5 13 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H13C12.4477 7 12 6.55228 12 6ZM2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289L5.70711 11.2929C6.09763 11.6834 6.09763 12.3166 5.70711 12.7071L3.70711 14.7071C3.31658 15.0976 2.68342 15.0976 2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929L3.58579 12L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289ZM13 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H13C12.4477 11 12 10.5523 12 10C12 9.44772 12.4477 9 13 9ZM13 15C12.4477 15 12 14.5523 12 14C12 13.4477 12.4477 13 13 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H13ZM12 18C12 17.4477 12.4477 17 13 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H13C12.4477 19 12 18.5523 12 18Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 6H13M9 6V18M21 10H13M21 14H13M21 18H13M3 10L5 12L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9 5C9.55228 5 10 5.44772 10 6V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V6C8 5.44772 8.44772 5 9 5ZM12 6C12 5.44772 12.4477 5 13 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H13C12.4477 7 12 6.55228 12 6ZM13 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H13C12.4477 11 12 10.5523 12 10C12 9.44772 12.4477 9 13 9ZM13 15C12.4477 15 12 14.5523 12 14C12 13.4477 12.4477 13 13 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H13ZM12 18C12 17.4477 12.4477 17 13 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H13C12.4477 19 12 18.5523 12 18Z" fill="currentColor"/>
<path d="M2.29289 9.29289C2.68342 8.90237 3.31658 8.90237 3.70711 9.29289L5.70711 11.2929C6.09763 11.6834 6.09763 12.3166 5.70711 12.7071L3.70711 14.7071C3.31658 15.0976 2.68342 15.0976 2.29289 14.7071C1.90237 14.3166 1.90237 13.6834 2.29289 13.2929L3.58579 12L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 6H13M9 6V18M21 10H13M21 14H13M21 18H13M3 10L5 12L3 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RightIndent;