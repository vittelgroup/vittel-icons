import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ResizeHandle: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 15L15 21M21 8L8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071C6.90237 21.3166 6.90237 20.6834 7.29289 20.2929L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289ZM21.7071 14.2929C22.0976 14.6834 22.0976 15.3166 21.7071 15.7071L15.7071 21.7071C15.3166 22.0976 14.6834 22.0976 14.2929 21.7071C13.9024 21.3166 13.9024 20.6834 14.2929 20.2929L20.2929 14.2929C20.6834 13.9024 21.3166 13.9024 21.7071 14.2929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 15L15 21M21 8L8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M21.7071 14.2929C22.0976 14.6834 22.0976 15.3166 21.7071 15.7071L15.7071 21.7071C15.3166 22.0976 14.6834 22.0976 14.2929 21.7071C13.9024 21.3166 13.9024 20.6834 14.2929 20.2929L20.2929 14.2929C20.6834 13.9024 21.3166 13.9024 21.7071 14.2929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L8.70711 21.7071C8.31658 22.0976 7.68342 22.0976 7.29289 21.7071C6.90237 21.3166 6.90237 20.6834 7.29289 20.2929L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 15L15 21M21 8L8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ResizeHandle;