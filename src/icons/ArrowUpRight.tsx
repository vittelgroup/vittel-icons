import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowUpRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C7 6.44772 7.44772 6 8 6H17C17.5523 6 18 6.44772 18 7V16C18 16.5523 17.5523 17 17 17C16.4477 17 16 16.5523 16 16V9.41421L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L14.5858 8H8C7.44772 8 7 7.55228 7 7Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 7C18 6.44772 17.5523 6 17 6H8C7.44771 6 7 6.44772 7 7C7 7.55228 7.44771 8 8 8H16V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V7Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowUpRight;