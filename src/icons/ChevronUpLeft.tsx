import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChevronUpLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17V7.00001L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.00001L17 8C17.5523 8 18 7.55228 18 7C18 6.44771 17.5523 6 17 6L7 6.00001C6.44771 6.00001 6 6.44772 6 7.00001V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V8.00001Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17V7.00001L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8 8.00001L17 8C17.5523 8 18 7.55228 18 7C18 6.44771 17.5523 6 17 6L7 6.00001C6.44771 6.00001 6 6.44772 6 7.00001V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V8.00001Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 17V7.00001L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChevronUpLeft;