import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Hotel: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H4V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H10V18L9 18C8.62123 18 8.27497 17.786 8.10558 17.4472C7.93619 17.1084 7.97274 16.703 8.20001 16.4C10 14 14 14 15.8 16.4C16.0273 16.703 16.0638 17.1084 15.8944 17.4472C15.725 17.786 15.3788 18 15 18H14V22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H20V4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3ZM9 6C8.44772 6 8 6.44772 8 7V8C8 8.55228 8.44772 9 9 9H10C10.5523 9 11 8.55228 11 8V7C11 6.44772 10.5523 6 10 6H9ZM14 6C13.4477 6 13 6.44772 13 7V8C13 8.55228 13.4477 9 14 9H15C15.5523 9 16 8.55228 16 8V7C16 6.44772 15.5523 6 15 6H14ZM8 11C8 10.4477 8.44772 10 9 10H10C10.5523 10 11 10.4477 11 11V12C11 12.5523 10.5523 13 10 13H9C8.44772 13 8 12.5523 8 12V11ZM14 10C13.4477 10 13 10.4477 13 11V12C13 12.5523 13.4477 13 14 13H15C15.5523 13 16 12.5523 16 12V11C16 10.4477 15.5523 10 15 10H14Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19 3H5V21H10V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21H19V3Z" fill="currentColor"/>
<path d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H4V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H10V18L14 18V22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H20V4H21C21.5523 4 22 3.55228 22 3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path d="M3 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H3C2.44772 4 2 3.55228 2 3C2 2.44772 2.44772 2 3 2Z" fill="currentColor"/>
<path d="M8 7C8 6.44772 8.44772 6 9 6H10C10.5523 6 11 6.44772 11 7V8C11 8.55228 10.5523 9 10 9H9C8.44772 9 8 8.55228 8 8V7Z" fill="currentColor"/>
<path d="M13 7C13 6.44772 13.4477 6 14 6H15C15.5523 6 16 6.44772 16 7V8C16 8.55228 15.5523 9 15 9H14C13.4477 9 13 8.55228 13 8V7Z" fill="currentColor"/>
<path d="M9 10C8.44772 10 8 10.4477 8 11V12C8 12.5523 8.44772 13 9 13H10C10.5523 13 11 12.5523 11 12V11C11 10.4477 10.5523 10 10 10H9Z" fill="currentColor"/>
<path d="M13 11C13 10.4477 13.4477 10 14 10H15C15.5523 10 16 10.4477 16 11V12C16 12.5523 15.5523 13 15 13H14C13.4477 13 13 12.5523 13 12V11Z" fill="currentColor"/>
<path d="M10 18L9 18C8.62123 18 8.27497 17.786 8.10558 17.4472C7.93619 17.1084 7.97274 16.703 8.20001 16.4C10 14 14 14 15.8 16.4C16.0273 16.703 16.0638 17.1084 15.8944 17.4472C15.725 17.786 15.3788 18 15 18H14L10 18Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 21H5M5 21H10M5 21V3M10 21H14M10 21V16L8 16C10 13.3333 14 13.3333 16 16L14 16V21M14 21H19M19 21H21M19 21V3M3 3H5M5 3H19M19 3H21M9 6.5H10M14 6.5H15M9 10.5H10M14 10.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Hotel;