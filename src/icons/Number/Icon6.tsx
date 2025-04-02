import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon6: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.75716 12L13.9993 3M17.5 15.5C17.5 18.5376 15.0376 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 12.4624 8.96243 10 12 10C15.0376 10 17.5 12.4624 17.5 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5693 2.17832C15.0231 2.49308 15.1358 3.11613 14.8211 3.56994L11.0021 9.07616C11.3274 9.02603 11.6607 9.00003 12 9.00003C15.5899 9.00003 18.5 11.9102 18.5 15.5C18.5 19.0899 15.5899 22 12 22C8.41015 22 5.5 19.0899 5.5 15.5C5.5 13.944 6.04675 12.5157 6.95862 11.3967L13.1776 2.43011C13.4924 1.9763 14.1154 1.86357 14.5693 2.17832ZM8.52334 12.6428C7.88393 13.4199 7.5 14.4151 7.5 15.5C7.5 17.9853 9.51472 20 12 20C14.4853 20 16.5 17.9853 16.5 15.5C16.5 13.0147 14.4853 11 12 11C10.6047 11 9.35766 11.6351 8.53225 12.632C8.5293 12.6356 8.52633 12.6392 8.52334 12.6428Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.75716 12L13.9993 3M17.5 15.5C17.5 18.5376 15.0376 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 12.4624 8.96243 10 12 10C15.0376 10 17.5 12.4624 17.5 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M14.5693 2.17832C15.0231 2.49308 15.1358 3.11613 14.8211 3.56994L11.0021 9.07616C11.3274 9.02603 11.6607 9.00003 12 9.00003C15.5899 9.00003 18.5 11.9102 18.5 15.5C18.5 19.0899 15.5899 22 12 22C8.41015 22 5.5 19.0899 5.5 15.5C5.5 13.944 6.04675 12.5157 6.95862 11.3967L13.1776 2.43011C13.4924 1.9763 14.1154 1.86357 14.5693 2.17832ZM8.52334 12.6428C7.88393 13.4199 7.5 14.4151 7.5 15.5C7.5 17.9853 9.51472 20 12 20C14.4853 20 16.5 17.9853 16.5 15.5C16.5 13.0147 14.4853 11 12 11C10.6047 11 9.35766 11.6351 8.53225 12.632C8.5293 12.6356 8.52633 12.6392 8.52334 12.6428Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.75716 12L13.9993 3M17.5 15.5C17.5 18.5376 15.0376 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 12.4624 8.96243 10 12 10C15.0376 10 17.5 12.4624 17.5 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
  }
};

export default Icon6;