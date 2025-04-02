import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PaypalLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 3L4 16H8.5L10.0659 11H13C15.2091 11 17 9.20914 17 7C17 4.79086 15.2091 3 13 3H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M11 8L7 21H11L12.5659 16H16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00001 2C7.561 2 7.17333 2.28632 7.04423 2.70591L3.04423 15.7059C2.9509 16.0092 3.00708 16.3388 3.19562 16.5941C3.38415 16.8494 3.68266 17 4.00001 17H7.18451L6.04423 20.7059C5.9509 21.0092 6.00708 21.3388 6.19562 21.5941C6.38415 21.8494 6.68266 22 7.00001 22H11C11.4372 22 11.8236 21.716 11.9543 21.2989L13.3007 17H16C18.7614 17 21 14.7614 21 12C21 9.94256 19.7581 8.17692 17.9835 7.40918C17.9944 7.27411 18 7.13763 18 7C18 4.23858 15.7614 2 13 2H8.00001ZM13 12H10.8155L8.35397 20H10.2653L11.6116 15.7011C11.7423 15.284 12.1288 15 12.5659 15H16C17.6569 15 19 13.6569 19 12C19 10.8546 18.3575 9.8578 17.4128 9.3525C16.5715 10.9275 14.9119 12 13 12Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M8 3L4 16H8.5L10.0659 11H13C15.2091 11 17 9.20914 17 7C17 4.79086 15.2091 3 13 3H8Z" fill="currentColor"/>
<path d="M11 8L7 21H11L12.5659 16H16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8H11Z" fill="currentColor"/>
</g>
<path d="M8 3L4 16H8.5L10.0659 11H13C15.2091 11 17 9.20914 17 7C17 4.79086 15.2091 3 13 3H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M11 8L7 21H11L12.5659 16H16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8.00001 2C7.561 2 7.17333 2.28632 7.04423 2.70591L3.04423 15.7059C2.9509 16.0092 3.00708 16.3388 3.19562 16.5941C3.38415 16.8494 3.68266 17 4.00001 17H8.50001C8.93716 17 9.32365 16.716 9.4543 16.2989L10.8007 12H13C15.7614 12 18 9.76142 18 7C18 4.23858 15.7614 2 13 2H8.00001Z" fill="currentColor"/>
<path d="M11 7C10.561 7 10.1733 7.28632 10.0442 7.70591L6.04423 20.7059C5.9509 21.0092 6.00708 21.3388 6.19562 21.5941C6.38415 21.8494 6.68266 22 7.00001 22H11C11.4372 22 11.8236 21.716 11.9543 21.2989L13.3007 17H16C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7H11Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 3L4 16H8.5L10.0659 11H13C15.2091 11 17 9.20914 17 7C17 4.79086 15.2091 3 13 3H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M11 8L7 21H11L12.5659 16H16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8H11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default PaypalLogo;