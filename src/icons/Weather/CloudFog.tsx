import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CloudFog: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.32159 5.1171C8.32966 3.29155 10.3194 2 12.6127 2C15.5626 2 18.0685 4.06975 18.5317 6.85019C20.0163 7.71575 21 9.36366 21 11.1402C21 13.8575 18.7275 16 16 16L8.8 16C5.64015 16 3 13.5413 3 10.4137C3 7.95928 4.74492 5.75122 7.32159 5.1171ZM2 18C2 17.4477 2.44772 17 3 17H7C7.55228 17 8 17.4477 8 18C8 18.5523 7.55228 19 7 19H3C2.44772 19 2 18.5523 2 18ZM9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18ZM4 21C4 20.4477 4.44772 20 5 20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H5C4.44772 22 4 21.5523 4 21ZM15 21C15 20.4477 15.4477 20 16 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H16C15.4477 22 15 21.5523 15 21Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 10.4137C4 12.9466 6.14903 15 8.8 15L16 15C18.2091 15 20 13.2719 20 11.1402C20 9.55741 19.0127 8.09561 17.6 7.5C17.4504 4.99072 15.2747 3 12.6127 3C10.5346 3 8.75283 4.27403 8 6C5.6 6.375 4 8.31435 4 10.4137Z" fill="currentColor"/>
<path d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.32159 5.1171C8.32966 3.29155 10.3194 2 12.6127 2C15.5626 2 18.0685 4.06975 18.5317 6.85019C20.0163 7.71575 21 9.36366 21 11.1402C21 13.8575 18.7275 16 16 16L8.8 16C5.64015 16 3 13.5413 3 10.4137C3 7.95928 4.74492 5.75122 7.32159 5.1171Z" fill="currentColor"/>
<path d="M2 18C2 17.4477 2.44772 17 3 17H7C7.55228 17 8 17.4477 8 18C8 18.5523 7.55228 19 7 19H3C2.44772 19 2 18.5523 2 18Z" fill="currentColor"/>
<path d="M9 18C9 17.4477 9.44772 17 10 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H10C9.44772 19 9 18.5523 9 18Z" fill="currentColor"/>
<path d="M4 21C4 20.4477 4.44772 20 5 20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H5C4.44772 22 4 21.5523 4 21Z" fill="currentColor"/>
<path d="M15 21C15 20.4477 15.4477 20 16 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H16C15.4477 22 15 21.5523 15 21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 18H7M10 18H21M5 21H12M16 21H19M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CloudFog;