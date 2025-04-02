import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Underline: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21H20M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 3H8M16 3H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4H16C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H19V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V4H4C3.44772 4 3 3.55228 3 3ZM3 21C3 20.4477 3.44772 20 4 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21H20M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 3H8M16 3H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H8C8.55228 2 9 2.44772 9 3C9 3.55228 8.55228 4 8 4H7V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V4H16C15.4477 4 15 3.55228 15 3C15 2.44772 15.4477 2 16 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H19V11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11V4H4C3.44772 4 3 3.55228 3 3Z" fill="currentColor"/>
<path d="M3 21C3 20.4477 3.44772 20 4 20H20C20.5523 20 21 20.4477 21 21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21H20M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 3H8M16 3H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Underline;