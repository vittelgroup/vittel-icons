import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Pause: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V19M16 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V5C7 4.44772 7.44772 4 8 4ZM16 4C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V5C15 4.44772 15.4477 4 16 4Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V19M16 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 4.44772 9 5V19C9 19.5523 8.55228 20 8 20C7.44772 20 7 19.5523 7 19V5C7 4.44772 7.44772 4 8 4ZM16 4C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V5C15 4.44772 15.4477 4 16 4Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 5V19M16 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Pause;