import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BitcoinCircle: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.5 11V9H13.5C14.0523 9 14.5 9.44772 14.5 10C14.5 10.5523 14.0523 11 13.5 11H10.5Z" fill="currentColor"/>
<path d="M10.5 15V13H13.5C14.0523 13 14.5 13.4477 14.5 14C14.5 14.5523 14.0523 15 13.5 15H10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM10.5 6.5C10.5 5.94772 10.0523 5.5 9.5 5.5C8.94772 5.5 8.5 5.94772 8.5 6.5V7H8C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H8.5V15H8C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H8.5V17.5C8.5 18.0523 8.94772 18.5 9.5 18.5C10.0523 18.5 10.5 18.0523 10.5 17.5V17H11.5V17.5C11.5 18.0523 11.9477 18.5 12.5 18.5C13.0523 18.5 13.5 18.0523 13.5 17.5V17C15.1569 17 16.5 15.6569 16.5 14C16.5 13.2316 16.2111 12.5308 15.7361 12C16.2111 11.4692 16.5 10.7684 16.5 10C16.5 8.34315 15.1569 7 13.5 7V6.5C13.5 5.94772 13.0523 5.5 12.5 5.5C11.9477 5.5 11.5 5.94772 11.5 6.5V7H10.5V6.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16 14C16 15.1046 15.1046 16 14 16H10V8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12C15.1046 12 16 12.8954 16 14Z" fill="currentColor"/>
<path d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5.5C10.0523 5.5 10.5 5.94772 10.5 6.5V7H11.5V6.5C11.5 5.94772 11.9477 5.5 12.5 5.5C13.0523 5.5 13.5 5.94772 13.5 6.5V7C15.1569 7 16.5 8.34315 16.5 10C16.5 10.7684 16.2111 11.4692 15.7361 12C16.2111 12.5308 16.5 13.2316 16.5 14C16.5 15.6569 15.1569 17 13.5 17V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5C11.9477 18.5 11.5 18.0523 11.5 17.5V17H10.5V17.5C10.5 18.0523 10.0523 18.5 9.5 18.5C8.94772 18.5 8.5 18.0523 8.5 17.5V17H8C7.44772 17 7 16.5523 7 16C7 15.4477 7.44772 15 8 15H8.5V9H8C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7H8.5V6.5C8.5 5.94772 8.94772 5.5 9.5 5.5ZM10.5 9V11H13.5C14.0523 11 14.5 10.5523 14.5 10C14.5 9.44772 14.0523 9 13.5 9H10.5ZM13.5 13H10.5V15H13.5C14.0523 15 14.5 14.5523 14.5 14C14.5 13.4477 14.0523 13 13.5 13Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8H14C15.1046 8 16 8.89543 16 10C16 11.1046 15.1046 12 14 12M10 8V12M10 8H8.5M10 8V6.5M14 12H10M14 12C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H10M10 12V16M10 16H8.5M10 16V17.5M13 8V6.5M13 17.5V16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default BitcoinCircle;