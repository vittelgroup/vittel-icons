import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BracketsSquare: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 3H5V21H9M15 21H19V3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H6V20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H5C4.44772 22 4 21.5523 4 21V3ZM14 3C14 2.44772 14.4477 2 15 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H18V4H15C14.4477 4 14 3.55228 14 3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 3H5V21H9M15 21H19V3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H6V20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H5C4.44772 22 4 21.5523 4 21V3Z" fill="currentColor"/>
<path opacity="0.3" d="M14 3C14 2.44772 14.4477 2 15 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H18V4H15C14.4477 4 14 3.55228 14 3Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 3H5V21H9M15 21H19V3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default BracketsSquare;