import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const EyeAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 6C7.58172 6 4 9.58172 4 14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14C20 9.58172 16.4183 6 12 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" fill="currentColor"/>
<path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6 14C6 10.6863 8.68629 8 12 8C15.3137 8 18 10.6863 18 14C18 17.3137 15.3137 20 12 20C8.68629 20 6 17.3137 6 14Z" fill="currentColor"/>
<path d="M12 6C7.58172 6 4 9.58172 4 14C4 14.5523 3.55228 15 3 15C2.44772 15 2 14.5523 2 14C2 8.47715 6.47715 4 12 4C17.5228 4 22 8.47715 22 14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14C20 9.58172 16.4183 6 12 6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default EyeAlt;