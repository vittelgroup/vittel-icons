import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const UserBlock: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 14C7.13401 14 4 17.134 4 21H11M14.8086 19.7053L19.127 16.3467M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 16.3431 15.3431 15 17 15C18.6569 15 20 16.3431 20 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H12.5278C11.5777 20.9385 11 19.5367 11 18C11 16.1072 11.8764 14.4192 13.2456 13.3195C12.5332 13.1115 11.7796 13 11 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 18C13 15.7909 14.7909 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18ZM17 16C15.8954 16 15 16.8954 15 18C15 18.0933 15.0064 18.1851 15.0188 18.275L17.7546 16.1472C17.5217 16.0523 17.267 16 17 16ZM18.9815 17.7267L16.247 19.8534C16.4795 19.9479 16.7336 20 17 20C18.1046 20 19 19.1046 19 18C19 17.9073 18.9937 17.816 18.9815 17.7267Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" fill="currentColor"/>
<path d="M11 14C7.13401 14 4 17.134 4 21H17H18C18 20.9432 17.9993 20.8865 17.998 20.83C17.6858 20.9401 17.3499 21 17 21C15.3431 21 14 19.6569 14 18C14 16.959 14.5303 16.0418 15.3354 15.5038C14.1432 14.5621 12.6372 14 11 14Z" fill="currentColor"/>
</g>
<path d="M11 14C7.13401 14 4 17.134 4 21H11M14.8086 19.7053L19.127 16.3467M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 16.3431 15.3431 15 17 15C18.6569 15 20 16.3431 20 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 14C14.7909 14 13 15.7909 13 18C13 20.2091 14.7909 22 17 22C19.2091 22 21 20.2091 21 18C21 15.7909 19.2091 14 17 14ZM15 18C15 16.8954 15.8954 16 17 16C17.267 16 17.5217 16.0523 17.7546 16.1472L15.0188 18.275C15.0064 18.1851 15 18.0933 15 18ZM16.247 19.8534L18.9815 17.7267C18.9937 17.816 19 17.9073 19 18C19 19.1046 18.1046 20 17 20C16.7336 20 16.4795 19.9479 16.247 19.8534Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H12.5278C11.5777 20.9385 11 19.5367 11 18C11 16.1072 11.8764 14.4192 13.2456 13.3195C12.5332 13.1115 11.7796 13 11 13Z" fill="currentColor"/>
</g>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 14C7.13401 14 4 17.134 4 21H11M14.8086 19.7053L19.127 16.3467M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18C14 16.3431 15.3431 15 17 15C18.6569 15 20 16.3431 20 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default UserBlock;