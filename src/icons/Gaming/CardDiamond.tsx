import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CardDiamond: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 11.8284L11.8284 8.99994L14.6569 11.8284L11.8284 14.6568L9 11.8284Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2H5ZM8.29289 11.1213C7.90237 11.5118 7.90237 12.145 8.29289 12.5355L11.1213 15.364C11.5118 15.7545 12.145 15.7545 12.5355 15.364L15.364 12.5355C15.7545 12.145 15.7545 11.5118 15.364 11.1213L12.5355 8.29289C12.145 7.90237 11.5118 7.90237 11.1213 8.29289L8.29289 11.1213Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 3H19V21H5V3Z" fill="currentColor"/>
<path d="M9 11.8284L11.8284 8.99994L14.6569 11.8284L11.8284 14.6568L9 11.8284Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 2C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2H5ZM8.29289 11.1213C7.90237 11.5118 7.90237 12.145 8.29289 12.5355L11.1213 15.364C11.5118 15.7545 12.145 15.7545 12.5355 15.364L15.364 12.5355C15.7545 12.145 15.7545 11.5118 15.364 11.1213L12.5355 8.29289C12.145 7.90237 11.5118 7.90237 11.1213 8.29289L8.29289 11.1213Z" fill="currentColor"/>
<path d="M8.29289 11.1213C7.90237 11.5118 7.90237 12.145 8.29289 12.5355L11.1213 15.364C11.5118 15.7545 12.145 15.7545 12.5355 15.364L15.364 12.5355C15.7545 12.145 15.7545 11.5118 15.364 11.1213L12.5355 8.29289C12.145 7.90237 11.5118 7.90237 11.1213 8.29289L8.29289 11.1213Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 11.8284L11.8284 8.99994L14.6569 11.8284L11.8284 14.6568L9 11.8284Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CardDiamond;