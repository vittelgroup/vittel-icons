import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowSmRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929L15.5858 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H15.5858L12.2929 7.70711C11.9024 7.31658 11.9024 6.68342 12.2929 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M19 12C19 11.4477 18.5523 11 18 11H6C5.44771 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H18C18.5523 13 19 12.5523 19 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L16.5858 12L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowSmRight;