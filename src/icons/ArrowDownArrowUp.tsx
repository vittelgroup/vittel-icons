import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowDownArrowUp: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7.55228 3 8 3.44772 8 4V17.5858L10.2929 15.2929C10.6834 14.9024 11.3166 14.9024 11.7071 15.2929C12.0976 15.6834 12.0976 16.3166 11.7071 16.7071L7.70711 20.7071C7.31658 21.0976 6.68342 21.0976 6.29289 20.7071L2.29289 16.7071C1.90237 16.3166 1.90237 15.6834 2.29289 15.2929C2.68342 14.9024 3.31658 14.9024 3.70711 15.2929L6 17.5858V4C6 3.44772 6.44772 3 7 3ZM16.2929 3.29289C16.6834 2.90237 17.3166 2.90237 17.7071 3.29289L21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711C21.3166 9.09763 20.6834 9.09763 20.2929 8.70711L18 6.41421V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V6.41421L13.7071 8.70711C13.3166 9.09763 12.6834 9.09763 12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289L16.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 3.29289C16.6834 2.90237 17.3166 2.90237 17.7071 3.29289L21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711C21.3166 9.09763 20.6834 9.09763 20.2929 8.70711L18 6.41421V20C18 20.5523 17.5523 21 17 21C16.4477 21 16 20.5523 16 20V6.41421L13.7071 8.70711C13.3166 9.09763 12.6834 9.09763 12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289L16.2929 3.29289Z" fill="currentColor"/>
<path d="M7 3C7.55228 3 8 3.44772 8 4V17.5858L10.2929 15.2929C10.6834 14.9024 11.3166 14.9024 11.7071 15.2929C12.0976 15.6834 12.0976 16.3166 11.7071 16.7071L7.70711 20.7071C7.31658 21.0976 6.68342 21.0976 6.29289 20.7071L2.29289 16.7071C1.90237 16.3166 1.90237 15.6834 2.29289 15.2929C2.68342 14.9024 3.31658 14.9024 3.70711 15.2929L6 17.5858V4C6 3.44772 6.44772 3 7 3Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowDownArrowUp;