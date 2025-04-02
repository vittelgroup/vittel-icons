import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TombstoneBlank: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.58172 4 10V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H20V10C20 5.58172 16.4183 2 12 2Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21H19Z" fill="currentColor"/>
<path d="M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C7.58172 2 4 5.58172 4 10V20H20V10C20 5.58172 16.4183 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TombstoneBlank;