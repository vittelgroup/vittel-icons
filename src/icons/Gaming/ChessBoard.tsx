import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChessBoard: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 10H18M6 14H18M10 18V6M14 18V6M3 3H21V21H3V3ZM6 18V6H18V18H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3ZM10 14H6V18H10V14ZM10 10H6V6H10V10ZM10 10V14H14V18H18V14H14V10H18V6H14V10H10Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21V21H3V3ZM10 18H6V14H10V10H6V6H10V10H14V6H18V10H14V14H18V18H14V14H10V18Z" fill="currentColor"/>
<path d="M6 18V6M6 18H18M6 18V14M6 18H10M6 6H18M6 6V10M6 6H10M18 6V18M18 6H14M18 6V10M18 18V14M18 18H14M6 10V14M6 10H10M18 10V14M18 10H14M6 14H10M18 14H14M10 18H14M10 18V14M10 6H14M10 6V10M14 18V14M14 6V10M14 14H10M14 14V10M10 14V10M10 10H14M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM15 7H17V9H15V7ZM15 15H17V17H15V15ZM9 15V17H7V15H9ZM9 9H7V7H9V9ZM11 11H13V13H11V11Z" fill="currentColor"/>
<path d="M6 14H10V10H6V6H10V10H14V6H18V10H14V14H14.5H18V18H14V14H10V18H6V14Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 10H18M6 14H18M10 18V6M14 18V6M3 3H21V21H3V3ZM6 18V6H18V18H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ChessBoard;