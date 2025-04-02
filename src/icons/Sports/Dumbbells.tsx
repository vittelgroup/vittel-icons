import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Dumbbells: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M4 9H6V15H4V9ZM6 7H9V17H6V7ZM18 9H20V15H18V9ZM15 7H18V17H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 6C5.44772 6 5 6.44772 5 7V8H4C3.44772 8 3 8.44772 3 9V11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V15C3 15.5523 3.44772 16 4 16H5V17C5 17.5523 5.44772 18 6 18H9C9.55228 18 10 17.5523 10 17V13H14V17C14 17.5523 14.4477 18 15 18H18C18.5523 18 19 17.5523 19 17V16H20C20.5523 16 21 15.5523 21 15V13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V9C21 8.44772 20.5523 8 20 8H19V7C19 6.44772 18.5523 6 18 6H15C14.4477 6 14 6.44772 14 7V11H10V7C10 6.44772 9.55228 6 9 6H6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M6 7H9V17H6V7Z" fill="currentColor"/>
<path d="M15 7H18V17H15V7Z" fill="currentColor"/>
</g>
<path d="M3 12H21M4 9H6V15H4V9ZM6 7H9V17H6V7ZM18 9H20V15H18V9ZM15 7H18V17H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M6 7H9V17H6V7Z" fill="currentColor"/>
<path d="M15 7H18V17H15V7Z" fill="currentColor"/>
</g>
<path d="M3 12H21M4 9H6V15H4V9ZM6 7H9V17H6V7ZM18 9H20V15H18V9ZM15 7H18V17H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M4 9H6V15H4V9ZM6 7H9V17H6V7ZM18 9H20V15H18V9ZM15 7H18V17H15V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Dumbbells;