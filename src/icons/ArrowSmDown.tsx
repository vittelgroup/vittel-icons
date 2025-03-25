import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowSmDown: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V15.5858L16.2929 12.2929C16.6834 11.9024 17.3166 11.9024 17.7071 12.2929C18.0976 12.6834 18.0976 13.3166 17.7071 13.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929L11 15.5858V6C11 5.44772 11.4477 5 12 5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V6C11 5.44772 11.4477 5 12 5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 12.2929C6.68342 11.9024 7.31658 11.9024 7.70711 12.2929L12 16.5858L16.2929 12.2929C16.6834 11.9024 17.3166 11.9024 17.7071 12.2929C18.0976 12.6834 18.0976 13.3166 17.7071 13.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 18L7 13M12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowSmDown;