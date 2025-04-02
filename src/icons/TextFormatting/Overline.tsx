import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Overline: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3H20M12 21C9.23858 21 7 18.7614 7 16V12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12V16C17 18.7614 14.7614 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H4C3.44772 4 3 3.55228 3 3ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V12ZM12 8C9.79086 8 8 9.79086 8 12V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V12C16 9.79086 14.2091 8 12 8Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="7" y="7" width="10" height="14" rx="5" fill="#0000CC"/>
<path d="M4 3H20M12 21C9.23858 21 7 18.7614 7 16V12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12V16C17 18.7614 14.7614 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V12ZM12 8C9.79086 8 8 9.79086 8 12V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V12C16 9.79086 14.2091 8 12 8Z" fill="currentColor"/>
<path d="M3 3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3C21 3.55228 20.5523 4 20 4H4C3.44772 4 3 3.55228 3 3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3H20M12 21C9.23858 21 7 18.7614 7 16V12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12V16C17 18.7614 14.7614 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Overline;