import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PlusMinus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V14M7 9H17M7 20H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H13V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10H7C6.44772 10 6 9.55228 6 9C6 8.44772 6.44772 8 7 8H11V4C11 3.44772 11.4477 3 12 3ZM6 20C6 19.4477 6.44772 19 7 19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V14M7 9H17M7 20H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M6 20C6 19.4477 6.44772 19 7 19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V8H17C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H13V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10H7C6.44772 10 6 9.55228 6 9C6 8.44772 6.44772 8 7 8H11V4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4V14M7 9H17M7 20H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default PlusMinus;