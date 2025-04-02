import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Figma: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.5 5C5.5 3.34315 6.84315 2 8.5 2H11.5V8H8.5C6.84315 8 5.5 6.65685 5.5 5Z" fill="currentColor"/>
<path d="M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z" fill="currentColor"/>
<path d="M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z" fill="currentColor"/>
<path d="M18.5 5C18.5 3.34315 17.1569 2 15.5 2H12.5V8H15.5C17.1569 8 18.5 6.65685 18.5 5Z" fill="currentColor"/>
<path d="M15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M6 6C6 4.34315 7.34315 3 9 3H12V9H9C7.34315 9 6 7.65685 6 6Z" fill="currentColor"/>
<path d="M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12Z" fill="currentColor"/>
<path d="M6 18C6 16.3431 7.34315 15 9 15H12V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18Z" fill="currentColor"/>
</g>
<path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M5.5 12C5.5 10.3431 6.84315 9 8.5 9H11.5V15H8.5C6.84315 15 5.5 13.6569 5.5 12Z" fill="currentColor"/>
<path d="M18.5 5C18.5 3.34315 17.1569 2 15.5 2H12.5V8H15.5C17.1569 8 18.5 6.65685 18.5 5Z" fill="currentColor"/>
</g>
<path d="M5.5 5C5.5 3.34315 6.84315 2 8.5 2H11.5V8H8.5C6.84315 8 5.5 6.65685 5.5 5Z" fill="currentColor"/>
<path d="M8.5 16C6.84315 16 5.5 17.3431 5.5 19C5.5 20.6569 6.84315 22 8.5 22C10.1569 22 11.5 20.6569 11.5 19V16H8.5Z" fill="currentColor"/>
<path d="M15.5 15C17.1569 15 18.5 13.6569 18.5 12C18.5 10.3431 17.1569 9 15.5 9C13.8431 9 12.5 10.3431 12.5 12C12.5 13.6569 13.8431 15 15.5 15Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Figma;