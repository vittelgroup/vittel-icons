import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const EuroSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 7.11111C17.775 5.21864 15.8556 4 13.6979 4C9.99875 4 7 7.58172 7 12C7 16.4183 9.99875 20 13.6979 20C15.8556 20 17.775 18.7814 19 16.8889M5 10H14M5 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05661 11C8.01936 11.3249 8 11.6586 8 12C8 12.3414 8.01936 12.6751 8.05661 13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H8.54517C9.4842 17.4229 11.5171 19 13.6979 19C15.4553 19 17.0839 18.0087 18.1605 16.3455C18.4606 15.8819 19.0798 15.7493 19.5434 16.0494C20.007 16.3495 20.1396 16.9686 19.8395 17.4323C18.4661 19.554 16.2559 21 13.6979 21C10.2438 21 7.47856 18.4221 6.44169 15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H6.04784C6.01619 12.6704 6 12.3367 6 12C6 11.6633 6.01619 11.3296 6.04784 11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H6.44169C7.47856 5.57792 10.2438 3 13.6979 3C16.2559 3 18.4661 4.44601 19.8395 6.56772C20.1396 7.03136 20.007 7.65049 19.5434 7.95059C19.0798 8.2507 18.4606 8.11813 18.1605 7.6545C17.0839 5.99127 15.4553 5 13.6979 5C11.5171 5 9.4842 6.57712 8.54517 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H8.05661Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 7.11111C17.775 5.21864 15.8556 4 13.6979 4C9.99875 4 7 7.58172 7 12C7 16.4183 9.99875 20 13.6979 20C15.8556 20 17.775 18.7814 19 16.8889M5 10H14M5 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8.54517 9C9.4842 6.57712 11.5171 5 13.6979 5C15.4553 5 17.0839 5.99127 18.1605 7.6545C18.4606 8.11813 19.0798 8.2507 19.5434 7.95059C20.007 7.65049 20.1396 7.03136 19.8395 6.56772C18.4661 4.44601 16.2559 3 13.6979 3C10.2438 3 7.47856 5.57792 6.44169 9H8.54517Z" fill="currentColor"/>
<path d="M8.05661 11H6.04784C6.01619 11.3296 6 11.6633 6 12C6 12.3367 6.01619 12.6704 6.04784 13H8.05661C8.01936 12.6751 8 12.3414 8 12C8 11.6586 8.01936 11.3249 8.05661 11Z" fill="currentColor"/>
<path d="M8.54517 15H6.44169C7.47856 18.4221 10.2438 21 13.6979 21C16.2559 21 18.4661 19.554 19.8395 17.4323C20.1396 16.9686 20.007 16.3495 19.5434 16.0494C19.0798 15.7493 18.4606 15.8819 18.1605 16.3455C17.0839 18.0087 15.4553 19 13.6979 19C11.5171 19 9.4842 17.4229 8.54517 15Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 9.44772 4.44772 9 5 9H14C14.5523 9 15 9.44772 15 10C15 10.5523 14.5523 11 14 11H5C4.44772 11 4 10.5523 4 10ZM4 14C4 13.4477 4.44772 13 5 13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H5C4.44772 15 4 14.5523 4 14Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 7.11111C17.775 5.21864 15.8556 4 13.6979 4C9.99875 4 7 7.58172 7 12C7 16.4183 9.99875 20 13.6979 20C15.8556 20 17.775 18.7814 19 16.8889M5 10H14M5 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default EuroSign;