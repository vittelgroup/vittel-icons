import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const BitcoinSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 6H15C16.6569 6 18 7.34315 18 9C18 10.6569 16.6569 12 15 12M10 6V12M10 6H7M10 6V3M15 12H10M15 12C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18H10M10 12V18M10 18H7M10 18V21M13 6V3M13 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C10.5523 2 11 2.44772 11 3V5H12V3C12 2.44772 12.4477 2 13 2C13.5523 2 14 2.44772 14 3V5H15C17.2091 5 19 6.79086 19 9C19 10.1947 18.4762 11.2671 17.6458 12C18.4762 12.7329 19 13.8053 19 15C19 17.2091 17.2091 19 15 19H14V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V19H11V21C11 21.5523 10.5523 22 10 22C9.44772 22 9 21.5523 9 21V19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H9V7H7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5H9V3C9 2.44772 9.44772 2 10 2ZM11 7V11H15C16.1046 11 17 10.1046 17 9C17 7.89543 16.1046 7 15 7H11ZM15 13H11V17H15C16.1046 17 17 16.1046 17 15C17 13.8954 16.1046 13 15 13Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M15 6H10V18H15C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C16.6569 12 18 10.6569 18 9C18 7.34315 16.6569 6 15 6Z" fill="currentColor"/>
<path d="M10 6H15C16.6569 6 18 7.34315 18 9C18 10.6569 16.6569 12 15 12M10 6V12M10 6H7M10 6V3M15 12H10M15 12C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18H10M10 12V18M10 18H7M10 18V21M13 6V3M13 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M10 2C9.44771 2 9 2.44772 9 3V5H7C6.44772 5 6 5.44772 6 6C6 6.55228 6.44772 7 7 7H9V5H11V3C11 2.44772 10.5523 2 10 2Z" fill="currentColor"/>
<path d="M13 2C12.4477 2 12 2.44772 12 3V5H14V3C14 2.44772 13.5523 2 13 2Z" fill="currentColor"/>
<path d="M11 19V21C11 21.5523 10.5523 22 10 22C9.44771 22 9 21.5523 9 21V19H11Z" fill="currentColor"/>
<path d="M9 19H7C6.44772 19 6 18.5523 6 18C6 17.4477 6.44772 17 7 17H9V19Z" fill="currentColor"/>
<path d="M14 21V19H12V21C12 21.5523 12.4477 22 13 22C13.5523 22 14 21.5523 14 21Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 19C17.2091 19 19 17.2091 19 15C19 13.8053 18.4762 12.7329 17.6458 12C18.4762 11.2671 19 10.1947 19 9C19 6.79086 17.2091 5 15 5H9V19H15ZM11 11V7H15C16.1046 7 17 7.89543 17 9C17 10.1046 16.1046 11 15 11H11ZM11 17V13H15C16.1046 13 17 13.8954 17 15C17 16.1046 16.1046 17 15 17H11Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 6H15C16.6569 6 18 7.34315 18 9C18 10.6569 16.6569 12 15 12M10 6V12M10 6H7M10 6V3M15 12H10M15 12C16.6569 12 18 13.3431 18 15C18 16.6569 16.6569 18 15 18H10M10 12V18M10 18H7M10 18V21M13 6V3M13 21V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default BitcoinSign;