import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TreeDecoratedAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 17H5L12 2L19 17ZM19 17L8 11M16 11.5L9.5 8M9 22H15M12 22V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.9062 1.57711C12.7419 1.22504 12.3885 1 12 1C11.6115 1 11.2581 1.22504 11.0938 1.57711L8.83369 6.42024L17.2357 10.8546L12.9062 1.57711Z" fill="currentColor"/>
<path d="M18.6359 13.8551L7.9869 8.23479L7.40515 9.48141L19.768 16.281L18.6359 13.8551Z" fill="currentColor"/>
<path d="M18.7434 18L6.55752 11.2978L4.09382 16.5771C3.94929 16.8868 3.97294 17.2489 4.15653 17.5372C4.34012 17.8255 4.65823 18 5 18H11V21H9C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H15C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21H13V18H18.7434Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 2L19 17H5L12 2Z" fill="currentColor"/>
<path d="M19 17H5L12 2L19 17ZM19 17L8 11M16 11.5L9.5 8M9 22H15M12 22V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M12.9062 1.57711C12.7419 1.22504 12.3885 1 12 1C11.6115 1 11.2581 1.22504 11.0938 1.57711L8.79606 6.50089L17.3355 11.0685L12.9062 1.57711Z" fill="currentColor"/>
<path d="M18.746 14.0911L7.94903 8.31595L7.37543 9.54509L19.7535 16.2499L18.746 14.0911Z" fill="currentColor"/>
<path d="M18.7853 18L6.52814 11.3607L4.09382 16.5771C3.94929 16.8868 3.97294 17.2489 4.15653 17.5372C4.34012 17.8255 4.65823 18 5 18H18.7853Z" fill="currentColor"/>
</g>
<path d="M8.79526 6.50085L7.94823 8.31592L18.7452 14.0911L17.3347 11.0685L8.79526 6.50085Z" fill="currentColor"/>
<path d="M7.37463 9.54506L6.52734 11.3607L18.7845 18H18.9992C19.341 18 19.6591 17.8254 19.8427 17.5371C20.0263 17.2489 20.0499 16.8868 19.9054 16.5771L19.7527 16.2498L7.37463 9.54506Z" fill="currentColor"/>
<path d="M13 18H11V21H9C8.44772 21 8 21.4477 8 22C8 22.5523 8.44772 23 9 23H15C15.5523 23 16 22.5523 16 22C16 21.4477 15.5523 21 15 21H13V18Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 17H5L12 2L19 17ZM19 17L8 11M16 11.5L9.5 8M9 22H15M12 22V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TreeDecoratedAlt;