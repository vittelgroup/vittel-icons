import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowCircleUp: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 10.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071L11 10.4142V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V10.4142L14.2929 11.7071C14.6834 12.0976 15.3166 12.0976 15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 10.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071L11 10.4142V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V10.4142L14.2929 11.7071C14.6834 12.0976 15.3166 12.0976 15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 11L12 8M12 8L9 11M12 8V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowCircleUp;