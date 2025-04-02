import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Scroll: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 9H3V5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5V18.5C8 19.8807 9.11929 21 10.5 21C11.8807 21 13 19.8807 13 18.5V16H21V18C21 19.6569 19.6569 21 18 21H11M18 13V6C18 4.34315 16.6569 3 15 3H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.9995 13V6C18.9995 3.79086 17.2086 2 14.9995 2H6.9375C8.16721 2.68236 8.9995 3.99399 8.9995 5.5V18.5C8.9995 19.6046 9.89493 20.5 10.9995 20.5C12.1041 20.5 12.9995 19.6046 12.9995 18.5V14C12.9995 13.4477 13.4472 13 13.9995 13H18.9995Z" fill="currentColor"/>
<path d="M7 9.99996H3C2.44772 9.99996 2 9.55224 2 8.99996V5.5C2 4.11929 3.11929 3 4.5 3C5.88071 3 7 4.11929 7 5.5V9.99996Z" fill="currentColor"/>
<path d="M22 16V18C22 20.2091 20.2091 22 18 22H13.3238C13.2206 22 13.1807 21.8551 13.2657 21.7965C14.313 21.0752 14.9995 19.8678 14.9995 18.5L14.9999 15.4999C15 15.2238 15.2238 15 15.4999 15L21 15C21.5523 15 22 15.4477 22 16Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 9H5H8V18.5C8 19.8807 9.11929 21 10.5 21H18C19.6569 21 21 19.6569 21 18V16H18V13V6C18 4.34315 16.6569 3 15 3H5.5C4.11929 3 3 4.11929 3 5.5V9Z" fill="currentColor"/>
<path d="M5 9H3V5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5V18.5C8 19.8807 9.11929 21 10.5 21C11.8807 21 13 19.8807 13 18.5V16H21V18C21 19.6569 19.6569 21 18 21H11M18 13V6C18 4.34315 16.6569 3 15 3H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M18.9995 13V6C18.9995 3.79086 17.2086 2 14.9995 2H6.9375C8.16721 2.68236 8.9995 3.99399 8.9995 5.5V18.5C8.9995 19.6046 9.89493 20.5 10.9995 20.5C12.1041 20.5 12.9995 19.6046 12.9995 18.5V14C12.9995 13.4477 13.4472 13 13.9995 13H18.9995Z" fill="currentColor"/>
<path d="M7 9.99996H3C2.44772 9.99996 2 9.55224 2 8.99996V5.5C2 4.11929 3.11929 3 4.5 3C5.88071 3 7 4.11929 7 5.5V9.99996Z" fill="currentColor"/>
<path d="M22 16V18C22 20.2091 20.2091 22 18 22H13.3238C13.2206 22 13.1807 21.8551 13.2657 21.7965C14.313 21.0752 14.9995 19.8678 14.9995 18.5L14.9999 15.4999C15 15.2238 15.2238 15 15.4999 15L21 15C21.5523 15 22 15.4477 22 16Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 9H3V5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5V18.5C8 19.8807 9.11929 21 10.5 21C11.8807 21 13 19.8807 13 18.5V16H21V18C21 19.6569 19.6569 21 18 21H11M18 13V6C18 4.34315 16.6569 3 15 3H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Scroll;