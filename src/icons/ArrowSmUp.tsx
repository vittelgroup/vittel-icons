import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowSmUp: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071L13 8.41421V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V8.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L11.2929 5.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6L13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18L11 6C11 5.44772 11.4477 5 12 5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 11.7071C17.3166 12.0976 16.6834 12.0976 16.2929 11.7071L12 7.41421L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289L17.7071 10.2929C18.0976 10.6834 18.0976 11.3166 17.7071 11.7071Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowSmUp;