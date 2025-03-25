import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SwitchVertical: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 6L7 3M7 3L4 6M7 3V21M14 18L17 21M17 21L20 18M17 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L10.7071 5.29289C11.0976 5.68342 11.0976 6.31658 10.7071 6.70711C10.3166 7.09763 9.68342 7.09763 9.29289 6.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L4.70711 6.70711C4.31658 7.09763 3.68342 7.09763 3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289L6.29289 2.29289ZM17 2C17.5523 2 18 2.44772 18 3V18.5858L19.2929 17.2929C19.6834 16.9024 20.3166 16.9024 20.7071 17.2929C21.0976 17.6834 21.0976 18.3166 20.7071 18.7071L17.7071 21.7071C17.3166 22.0976 16.6834 22.0976 16.2929 21.7071L13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929L16 18.5858V3C16 2.44772 16.4477 2 17 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 6L7 3M7 3L4 6M7 3V21M14 18L17 21M17 21L20 18M17 21V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L10.7071 5.29289C11.0976 5.68342 11.0976 6.31658 10.7071 6.70711C10.3166 7.09763 9.68342 7.09763 9.29289 6.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L4.70711 6.70711C4.31658 7.09763 3.68342 7.09763 3.29289 6.70711C2.90237 6.31658 2.90237 5.68342 3.29289 5.29289L6.29289 2.29289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 2C17.5523 2 18 2.44772 18 3V18.5858L19.2929 17.2929C19.6834 16.9024 20.3166 16.9024 20.7071 17.2929C21.0976 17.6834 21.0976 18.3166 20.7071 18.7071L17.7071 21.7071C17.3166 22.0976 16.6834 22.0976 16.2929 21.7071L13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929C13.6834 16.9024 14.3166 16.9024 14.7071 17.2929L16 18.5858V3C16 2.44772 16.4477 2 17 2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 6L7 3M7 3L4 6M7 3V21M14 18L17 21M17 21L20 18M17 21V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SwitchVertical;