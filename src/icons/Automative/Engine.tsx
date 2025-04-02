import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Engine: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10 4.44772 10.4477 4 11 4H17C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H15V7H16C16.2652 7 16.5196 7.10536 16.7071 7.29289L18.7071 9.29289C18.8946 9.48043 19 9.73478 19 10V19C19 19.5523 18.5523 20 18 20H10C9.66565 20 9.35342 19.8329 9.16795 19.5547L7.46482 17H6C5.44772 17 5 16.5523 5 16V13H4V15C4 15.5523 3.55228 16 3 16C2.44772 16 2 15.5523 2 15V9C2 8.44772 2.44772 8 3 8C3.55228 8 4 8.44772 4 9V11H5V8C5 7.44772 5.44772 7 6 7H13V6H11C10.4477 6 10 5.55228 10 5ZM9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12ZM13 11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11ZM15 12C15.5523 12 16 11.5523 16 11C16 10.4477 15.5523 10 15 10C14.4477 10 14 10.4477 14 11C14 11.5523 14.4477 12 15 12Z" fill="currentColor"/>
<path d="M21 10C21.5523 10 22 10.4477 22 11V19C22 19.5523 21.5523 20 21 20C20.4477 20 20 19.5523 20 19V11C20 10.4477 20.4477 10 21 10Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M16 8H6V16H8L10 19H18V10L16 8Z" fill="currentColor"/>
<path d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 4C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6H13V7H15V6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H11Z" fill="currentColor"/>
<path d="M5 13V11H4V9C4 8.44772 3.55228 8 3 8C2.44772 8 2 8.44772 2 9V15C2 15.5523 2.44772 16 3 16C3.55228 16 4 15.5523 4 15V13H5Z" fill="currentColor"/>
<path d="M22 11C22 10.4477 21.5523 10 21 10C20.4477 10 20 10.4477 20 11V19C20 19.5523 20.4477 20 21 20C21.5523 20 22 19.5523 22 19V11Z" fill="currentColor"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16 7H6C5.44772 7 5 7.44772 5 8V16C5 16.5523 5.44772 17 6 17H7.46482L9.16795 19.5547C9.35342 19.8329 9.66565 20 10 20H18C18.5523 20 19 19.5523 19 19V10C19 9.73478 18.8946 9.48043 18.7071 9.29289L16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7ZM10 11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11ZM12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12ZM16 11C16 11.5523 15.5523 12 15 12C14.4477 12 14 11.5523 14 11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Engine;