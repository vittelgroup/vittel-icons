import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CurlingStone: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 15H21M7 11V10C7 8.89543 7.89543 8 9 8M9 8H15C16.1046 8 17 8.89543 17 10V11M9 8V7C9 5.89543 9.89543 5 11 5H17M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 7C10 6.44772 10.4477 6 11 6H17C17.5523 6 18 5.55228 18 5C18 4.44772 17.5523 4 17 4H11C9.34315 4 8 5.34315 8 7V7.17071C6.83481 7.58254 6 8.69378 6 10C3.79086 10 2 11.7909 2 14H22C22 11.7909 20.2091 10 18 10C18 8.34315 16.6569 7 15 7H10Z" fill="currentColor"/>
<path d="M22 16H2C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 14C3 12.3431 4.34315 11 6 11H18C19.6569 11 21 12.3431 21 14V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V14Z" fill="currentColor"/>
<path d="M7 11V10C7 8.89543 7.89543 8 9 8H15C16.1046 8 17 8.89543 17 10V11M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</g>
<path d="M7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 8.89543 16.1046 8 15 8H9C7.89543 8 7 8.89543 7 10Z" fill="currentColor"/>
<path d="M3 15H21M9 8H15C16.1046 8 17 8.89543 17 10V10C17 10.5523 16.5523 11 16 11H8C7.44772 11 7 10.5523 7 10V10C7 8.89543 7.89543 8 9 8ZM9 8V7C9 5.89543 9.89543 5 11 5H17M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 14C3 12.3431 4.34315 11 6 11H18C19.6569 11 21 12.3431 21 14V16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16V14Z" fill="currentColor"/>
<path d="M7 11V10C7 8.89543 7.89543 8 9 8H15C16.1046 8 17 8.89543 17 10V11M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</g>
<path d="M7 10C7 10.5523 7.44772 11 8 11H16C16.5523 11 17 10.5523 17 10C17 8.89543 16.1046 8 15 8H9C7.89543 8 7 8.89543 7 10Z" fill="currentColor"/>
<path d="M3 15H21M9 8H15C16.1046 8 17 8.89543 17 10V10C17 10.5523 16.5523 11 16 11H8C7.44772 11 7 10.5523 7 10V10C7 8.89543 7.89543 8 9 8ZM9 8V7C9 5.89543 9.89543 5 11 5H17M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 15H21M7 11V10C7 8.89543 7.89543 8 9 8M9 8H15C16.1046 8 17 8.89543 17 10V11M9 8V7C9 5.89543 9.89543 5 11 5H17M6 19H18C19.6569 19 21 17.6569 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.6569 4.34315 19 6 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CurlingStone;