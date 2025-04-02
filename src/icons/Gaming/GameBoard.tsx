import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GameBoard: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H17V17H12V12ZM12 12V7H7V12H12ZM3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM18 12H12V6H6V12H12V18H18V12Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21V21H3V3ZM12 17H17V12H12V7H7V12H12V17Z" fill="currentColor"/>
<path d="M12 12H17V17H12V12ZM12 12V7H7V12H12ZM3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44772 21.5523 2 21 2H3ZM18 12H12V6H6V12H12V18H18V12Z" fill="currentColor"/>
<path d="M18 12H12V18H18V12Z" fill="currentColor"/>
<path d="M12 6H6V12H12V6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H17V17H12V12ZM12 12V7H7V12H12ZM3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default GameBoard;