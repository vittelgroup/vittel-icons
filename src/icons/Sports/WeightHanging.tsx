import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WeightHanging: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8ZM12 8H18L21 20H3L6 8H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6C15 6.35064 14.9399 6.68722 14.8293 7H18C18.4589 7 18.8589 7.3123 18.9702 7.75746L21.9702 19.7575C22.0448 20.0562 21.9777 20.3727 21.7882 20.6154C21.5987 20.8581 21.3079 21 21 21H3.00001C2.69207 21 2.40131 20.8581 2.2118 20.6154C2.0223 20.3727 1.95518 20.0562 2.02987 19.7575L5.02987 7.75746C5.14116 7.3123 5.54114 7 6.00001 7H9.17071C9.06016 6.68722 9.00001 6.35064 9.00001 6C9.00001 4.34315 10.3432 3 12 3C13.6569 3 15 4.34315 15 6ZM11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 20H21L18 8H12H6L3 20Z" fill="currentColor"/>
<path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8ZM12 8H18L21 20H3L6 8H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 20H21L18 8H12H6L3 20Z" fill="currentColor"/>
<path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8ZM12 8H18L21 20H3L6 8H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8ZM12 8H18L21 20H3L6 8H12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default WeightHanging;