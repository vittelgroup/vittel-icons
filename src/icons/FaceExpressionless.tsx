import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FaceExpressionless: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 10H10M14 10H17M8 16H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H10C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9H7ZM13 10C13 9.44772 13.4477 9 14 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H14C13.4477 11 13 10.5523 13 10ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H8Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M7 10H10M14 10H17M8 16H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 9.44772 6.44772 9 7 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H7C6.44772 11 6 10.5523 6 10ZM13 10C13 9.44772 13.4477 9 14 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H14C13.4477 11 13 10.5523 13 10ZM7 16C7 15.4477 7.44772 15 8 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 10H10M14 10H17M8 16H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default FaceExpressionless;