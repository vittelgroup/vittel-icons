import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Italic: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3H20M4 21H14M15 3L9 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9767 2.00003H10C9.44772 2.00003 9 2.44774 9 3.00003C9 3.55231 9.44772 4.00003 10 4.00003H13.6126L8.27924 20H4C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H8.97695C8.99245 22.0004 9.00791 22.0004 9.02333 22H14C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20H10.3874L15.7208 4.00003H20C20.5523 4.00003 21 3.55231 21 3.00003C21 2.44774 20.5523 2.00003 20 2.00003H15.0231C15.0076 1.99966 14.9921 1.99967 14.9767 2.00003Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3H20M4 21H14M15 3L9 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M13.6126 4H15.7208L10.3875 20H8.2793L13.6126 4Z" fill="currentColor"/>
<path d="M10 2C9.44772 2 9 2.44772 9 3C9 3.55228 9.44771 4 10 4H20C20.5523 4 21 3.55228 21 3C21 2.44772 20.5523 2 20 2H10Z" fill="currentColor"/>
<path d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H14C14.5523 22 15 21.5523 15 21C15 20.4477 14.5523 20 14 20H4Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3H20M4 21H14M15 3L9 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Italic;