import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Cauldron: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10H21M9 3L9.00707 3.00707M19 10V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V10M6 16.6076V21M18 16.6076V21M15 6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5C14.5523 5 15 5.44772 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.7072 2.29299C9.31673 1.90241 8.68357 1.90233 8.29299 2.2928C7.90241 2.68327 7.90233 3.31643 8.2928 3.70701L8.29987 3.71408C8.69034 4.10466 9.3235 4.10475 9.71408 3.71427C10.1047 3.3238 10.1047 2.69064 9.71427 2.30006L9.7072 2.29299Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4V13C4 14.4063 4.36284 15.7278 5 16.876V21C5 21.5522 5.44772 22 6 22C6.55228 22 7 21.5522 7 21V19.2454C8.3696 20.3433 10.1081 21 12 21C13.8919 21 15.6304 20.3433 17 19.2454V21C17 21.5522 17.4477 22 18 22C18.5523 22 19 21.5522 19 21V16.876C19.6372 15.7278 20 14.4063 20 13V11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H3Z" fill="currentColor"/>
<path d="M12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6C16 7.10457 15.1046 8 14 8C12.8954 8 12 7.10457 12 6Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 20C15.866 20 19 16.866 19 13V10H5V13C5 16.866 8.13401 20 12 20Z" fill="currentColor"/>
<path d="M3 10H21M9 3L9.00707 3.00707M19 10V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V10M6 16.6076V21M18 16.6076V21M15 6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5C14.5523 5 15 5.44772 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H4V13C4 14.4063 4.36284 15.7278 5 16.876V21C5 21.5522 5.44772 22 6 22C6.55228 22 7 21.5522 7 21V19.2454C8.3696 20.3433 10.1081 21 12 21C13.8919 21 15.6304 20.3433 17 19.2454V21C17 21.5522 17.4477 22 18 22C18.5523 22 19 21.5522 19 21V16.876C19.6372 15.7278 20 14.4063 20 13V11H21C21.5523 11 22 10.5523 22 10C22 9.44772 21.5523 9 21 9H3Z" fill="currentColor"/>
<path d="M9.7072 2.29299C9.31673 1.90241 8.68357 1.90233 8.29299 2.2928C7.90241 2.68327 7.90233 3.31643 8.2928 3.70701L8.29987 3.71408C8.69034 4.10466 9.32351 4.10475 9.71408 3.71427C10.1047 3.3238 10.1047 2.69064 9.71427 2.30006L9.7072 2.29299Z" fill="currentColor"/>
<path d="M12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6C16 7.10457 15.1046 8 14 8C12.8954 8 12 7.10457 12 6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 10H21M9 3L9.00707 3.00707M19 10V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V10M6 16.6076V21M18 16.6076V21M15 6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6C13 5.44772 13.4477 5 14 5C14.5523 5 15 5.44772 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Cauldron;