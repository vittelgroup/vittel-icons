import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Tombstone: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 7V17M9 10H15M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58172 2 4 5.58172 4 10V20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H20V10C20 5.58172 16.4183 2 12 2ZM12 6C12.5523 6 13 6.44772 13 7V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11H9C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H11V7C11 6.44772 11.4477 6 12 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21H19Z" fill="currentColor"/>
<path d="M12 7V17M9 10H15M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V20H4V10ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V9H9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H13V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.5523 6 13 6.44772 13 7V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V11H9C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9H11V7C11 6.44772 11.4477 6 12 6ZM2 21C2 20.4477 2.44772 20 3 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 7V17M9 10H15M19 21V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V21M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Tombstone;