import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Rainbow: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21M18 21V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V21M15 21V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V12C20 7.58172 16.4183 4 12 4ZM12 7C9.23858 7 7 9.23858 7 12V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V12C17 9.23858 14.7614 7 12 7ZM12 10C10.8954 10 10 10.8954 10 12V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V12C14 10.8954 13.1046 10 12 10Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 3C7.02944 3 3 7.02944 3 12V21H9V12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12V21H21V12C21 7.02944 16.9706 3 12 3Z" fill="currentColor"/>
<path d="M21 21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21M18 21V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V21M15 21V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 7C9.23858 7 7 9.23858 7 12V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V12C17 9.23858 14.7614 7 12 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V12C20 7.58172 16.4183 4 12 4ZM12 10C10.8954 10 10 10.8954 10 12V21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21V12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12V21C16 21.5523 15.5523 22 15 22C14.4477 22 14 21.5523 14 21V12C14 10.8954 13.1046 10 12 10Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21M18 21V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V21M15 21V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Rainbow;