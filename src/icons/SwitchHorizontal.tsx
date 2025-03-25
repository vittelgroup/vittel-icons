import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SwitchHorizontal: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 10L21 7M21 7L18 4M21 7H2M6 14L3 17M3 17L6 20M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2929 3.29289C17.6834 2.90237 18.3166 2.90237 18.7071 3.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L18.7071 10.7071C18.3166 11.0976 17.6834 11.0976 17.2929 10.7071C16.9024 10.3166 16.9024 9.68342 17.2929 9.29289L18.5858 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H18.5858L17.2929 4.70711C16.9024 4.31658 16.9024 3.68342 17.2929 3.29289ZM6.70711 13.2929C7.09763 13.6834 7.09763 14.3166 6.70711 14.7071L5.41421 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H5.41421L6.70711 19.2929C7.09763 19.6834 7.09763 20.3166 6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L5.29289 13.2929C5.68342 12.9024 6.31658 12.9024 6.70711 13.2929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 10L21 7M21 7L18 4M21 7H3M6 14L3 17M3 17L6 20M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 13.2929C7.09763 13.6834 7.09763 14.3166 6.70711 14.7071L5.41421 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H5.41421L6.70711 19.2929C7.09763 19.6834 7.09763 20.3166 6.70711 20.7071C6.31658 21.0976 5.68342 21.0976 5.29289 20.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929L5.29289 13.2929C5.68342 12.9024 6.31658 12.9024 6.70711 13.2929Z" fill="currentColor"/>
<path d="M17.2929 3.29289C17.6834 2.90237 18.3166 2.90237 18.7071 3.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L18.7071 10.7071C18.3166 11.0976 17.6834 11.0976 17.2929 10.7071C16.9024 10.3166 16.9024 9.68342 17.2929 9.29289L18.5858 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H18.5858L17.2929 4.70711C16.9024 4.31658 16.9024 3.68342 17.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 10L21 7M21 7L18 4M21 7H2M6 14L3 17M3 17L6 20M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SwitchHorizontal;