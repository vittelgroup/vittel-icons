import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Fence: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 10H10M14 16H18M14 10H18M6 16H10M10 20H14V7L12 4L10 7V20ZM2 20H6V7L4 4L2 7V20ZM18 20H22V7L20 4L18 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4.33435 3 4.64658 3.1671 4.83205 3.4453L6.83205 6.4453C6.94156 6.60957 7 6.80258 7 7V9H9V7C9 6.80258 9.05844 6.60957 9.16795 6.4453L11.1679 3.4453C11.3534 3.1671 11.6656 3 12 3C12.3344 3 12.6466 3.1671 12.8321 3.4453L14.8321 6.4453C14.9416 6.60957 15 6.80258 15 7V9H17V7C17 6.80258 17.0584 6.60957 17.1679 6.4453L19.1679 3.4453C19.3534 3.1671 19.6656 3 20 3C20.3344 3 20.6466 3.1671 20.8321 3.4453L22.8321 6.4453C22.9416 6.60957 23 6.80258 23 7V20C23 20.5523 22.5523 21 22 21H18C17.4477 21 17 20.5523 17 20V17H15V20C15 20.5523 14.5523 21 14 21H10C9.44772 21 9 20.5523 9 20V17H7V20C7 20.5523 6.55228 21 6 21H2C1.44772 21 1 20.5523 1 20V7C1 6.80258 1.05844 6.60957 1.16795 6.4453L3.16795 3.4453C3.35342 3.1671 3.66565 3 4 3ZM7 15H9V11H7V15ZM15 11V15H17V11H15Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M6 20H2V7L4 4L6 7V20Z" fill="currentColor"/>
<path d="M22 20H18V7L20 4L22 7V20Z" fill="currentColor"/>
<path d="M14 20H10V7L12 4L14 7V20Z" fill="currentColor"/>
</g>
<path d="M6 10H10M14 16H18M14 10H18M6 16H10M10 20H14V7L12 4L10 7V20ZM2 20H6V7L4 4L2 7V20ZM18 20H22V7L20 4L18 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M9 7V20C9 20.5523 9.44772 21 10 21H14C14.5523 21 15 20.5523 15 20V7C15 6.80258 14.9416 6.60957 14.8321 6.4453L12.8321 3.4453C12.6466 3.1671 12.3344 3 12 3C11.6656 3 11.3534 3.1671 11.1679 3.4453L9.16795 6.4453C9.05844 6.60957 9 6.80258 9 7Z" fill="currentColor"/>
<path d="M17 7V20C17 20.5523 17.4477 21 18 21H22C22.5523 21 23 20.5523 23 20V7C23 6.80258 22.9416 6.60957 22.8321 6.4453L20.8321 3.4453C20.6466 3.1671 20.3344 3 20 3C19.6656 3 19.3534 3.1671 19.1679 3.4453L17.1679 6.4453C17.0584 6.60957 17 6.80258 17 7Z" fill="currentColor"/>
<path d="M7 20V7C7 6.80258 6.94156 6.60957 6.83205 6.4453L4.83205 3.4453C4.64658 3.1671 4.33435 3 4 3C3.66565 3 3.35342 3.1671 3.16795 3.4453L1.16795 6.4453C1.05844 6.60957 1 6.80258 1 7V20C1 20.5523 1.44772 21 2 21H6C6.55228 21 7 20.5523 7 20Z" fill="currentColor"/>
</g>
<path d="M7 11V9H9V11H7Z" fill="currentColor"/>
<path d="M7 15H9V17H7V15Z" fill="currentColor"/>
<path d="M15 11V9H17V11H15Z" fill="currentColor"/>
<path d="M15 15H17V17H15V15Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 10H10M14 16H18M14 10H18M6 16H10M10 20H14V7L12 4L10 7V20ZM2 20H6V7L4 4L2 7V20ZM18 20H22V7L20 4L18 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Fence;