import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleHalf: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12C3 16.9706 7.02944 21 12 21V3C7.02944 3 3 7.02944 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V2Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 12C3 16.9706 7.02944 21 12 21V3C7.02944 3 3 7.02944 3 12Z" fill="currentColor"/>
<path d="M3 12C3 16.9706 7.02944 21 12 21V3C7.02944 3 3 7.02944 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V2Z" fill="currentColor"/>
<path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22V2Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12C3 16.9706 7.02944 21 12 21V3C7.02944 3 3 7.02944 3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleHalf;