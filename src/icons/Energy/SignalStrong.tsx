import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SignalStrong: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V19M8 20V16M12 20V12M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16.5523 7 17 7.44772 17 8V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V8C15 7.44772 15.4477 7 16 7ZM12 11C12.5523 11 13 11.4477 13 12V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V12C11 11.4477 11.4477 11 12 11ZM8 15C8.55228 15 9 15.4477 9 16V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V16C7 15.4477 7.44772 15 8 15ZM4 18C4.55228 18 5 18.4477 5 19V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20V19C3 18.4477 3.44772 18 4 18Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V19M8 20V16M12 20V12M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V4C19 3.44772 19.4477 3 20 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16.5523 7 17 7.44772 17 8V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V8C15 7.44772 15.4477 7 16 7ZM12 11C12.5523 11 13 11.4477 13 12V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V12C11 11.4477 11.4477 11 12 11ZM8 15C8.55228 15 9 15.4477 9 16V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V16C7 15.4477 7.44772 15 8 15ZM4 18C4.55228 18 5 18.4477 5 19V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20V19C3 18.4477 3.44772 18 4 18Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V19M8 20V16M12 20V12M16 20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default SignalStrong;