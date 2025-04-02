import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Puzzle: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3H3V12M12 3V6H12.5C13.3284 6 14 6.67157 14 7.5C14 8.32843 13.3284 9 12.5 9H12V12M12 3H21V12M3 12H6V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V12H12M3 12V21H12M12 12H15V12.5C15 13.3284 15.6716 14 16.5 14C17.3284 14 18 13.3284 18 12.5V12H21M12 12V15H11.5C10.6716 15 10 15.6716 10 16.5C10 17.3284 10.6716 18 11.5 18H12V21M12 21H21V12" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 22C2.44772 22 2 21.5523 2 21V12H6.5V11.5C6.5 11 7 10.5 7.5 10.5C8 10.5 8.5 11 8.5 11.5V12H12V8.5H12.5C13 8.5 13.5 8 13.5 7.5C13.5 7 13 6.5 12.5 6.5H12V2H21C21.5523 2 22 2.44772 22 3V12H17.5V12.5C17.5 13 17 13.5 16.5 13.5C16 13.5 15.5 13 15.5 12.5V12H12V15.5H11.5C11 15.5 10.5 16 10.5 16.5C10.5 17 11 17.5 11.5 17.5H12V22H3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M6 11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V12H12V9H12.5C13.3284 9 14 8.32843 14 7.5C14 6.67157 13.3284 6 12.5 6H12V3H21V12H18V12.5C18 13.3284 17.3284 14 16.5 14C15.6716 14 15 13.3284 15 12.5V12H12V15H11.5C10.6716 15 10 15.6716 10 16.5C10 17.3284 10.6716 18 11.5 18H12V21H3V12H6V11.5Z" fill="currentColor"/>
<path d="M12 3H3V12M12 3V6H12.5C13.3284 6 14 6.67157 14 7.5C14 8.32843 13.3284 9 12.5 9H12V12M12 3H21V12M3 12H6V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V12H12M3 12V21H12M12 12H15V12.5C15 13.3284 15.6716 14 16.5 14C17.3284 14 18 13.3284 18 12.5V12H21M12 12V15H11.5C10.6716 15 10 15.6716 10 16.5C10 17.3284 10.6716 18 11.5 18H12V21M12 21H21V12" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 22C2.44772 22 2 21.5523 2 21V12H6.5V11.5C6.5 11 7 10.5 7.5 10.5C8 10.5 8.5 11 8.5 11.5V12H12V8.5H12.5C13 8.5 13.5 8 13.5 7.5C13.5 7 13 6.5 12.5 6.5H12V2H21C21.5523 2 22 2.44772 22 3V12H17.5V12.5C17.5 13 17 13.5 16.5 13.5C16 13.5 15.5 13 15.5 12.5V12H12V15.5H11.5C11 15.5 10.5 16 10.5 16.5C10.5 17 11 17.5 11.5 17.5H12V22H3Z" fill="currentColor"/>
<path d="M3 2C2.44772 2 2 2.44772 2 3V12H6.5V11.5C6.5 11 7 10.5 7.5 10.5C8 10.5 8.5 11 8.5 11.5V12H12V8.5H12.5C13 8.5 13.5 8 13.5 7.5C13.5 7 13 6.5 12.5 6.5H12V2H3Z" fill="currentColor"/>
<path d="M21 22C21.5523 22 22 21.5523 22 21V12H17.5V12.5C17.5 13 17 13.5 16.5 13.5C16 13.5 15.5 13 15.5 12.5V12H12V15.5H11.5C11 15.5 10.5 16 10.5 16.5C10.5 17 11 17.5 11.5 17.5H12V22H21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3H3V12M12 3V6H12.5C13.3284 6 14 6.67157 14 7.5C14 8.32843 13.3284 9 12.5 9H12V12M12 3H21V12M3 12H6V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V12H12M3 12V21H12M12 12H15V12.5C15 13.3284 15.6716 14 16.5 14C17.3284 14 18 13.3284 18 12.5V12H21M12 12V15H11.5C10.6716 15 10 15.6716 10 16.5C10 17.3284 10.6716 18 11.5 18H12V21M12 21H21V12" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Puzzle;