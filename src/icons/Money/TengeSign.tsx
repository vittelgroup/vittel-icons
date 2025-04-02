import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TengeSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19V9M6 9H18M6 5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5ZM5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V10H6C5.44772 10 5 9.55228 5 9Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19V9M6 9H18M6 5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9C19 9.55228 18.5523 10 18 10H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V10H6C5.44772 10 5 9.55228 5 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19V9M6 9H18M6 5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TengeSign;