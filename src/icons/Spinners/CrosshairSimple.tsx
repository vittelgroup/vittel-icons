import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CrosshairSimple: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17M12 21C7.02944 21 3 16.9706 3 12M12 21V17M3 12C3 7.02944 7.02944 3 12 3M3 12H7M12 3V7M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM7 11H4.06189C4.51314 7.38128 7.38128 4.51314 11 4.06189V7C11 7.55228 11.4477 8 12 8C12.5523 8 13 7.55228 13 7V4.06189C16.6187 4.51314 19.4869 7.38128 19.9381 11H17C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H19.9381C19.4869 16.6187 16.6187 19.4869 13 19.9381V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V19.9381C7.38128 19.4869 4.51314 16.6187 4.06189 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17M12 21C7.02944 21 3 16.9706 3 12M12 21V17M3 12C3 7.02944 7.02944 3 12 3M3 12H7M12 3V7M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="currentColor"/>
<path d="M13 4.06189V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V4.06189C11.3276 4.02104 11.6613 4 12 4C12.3387 4 12.6724 4.02104 13 4.06189Z" fill="currentColor"/>
<path d="M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H19.9381Z" fill="currentColor"/>
<path d="M13 19.9381V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V19.9381C11.3276 19.979 11.6613 20 12 20C12.3387 20 12.6724 19.979 13 19.9381Z" fill="currentColor"/>
<path d="M4.06189 13H7C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11H4.06189C4.02104 11.3276 4 11.6613 4 12C4 12.3387 4.02104 12.6724 4.06189 13Z" fill="currentColor"/>
<path d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13H12.01C12.5623 13 13.01 12.5523 13.01 12C13.01 11.4477 12.5623 11 12.01 11H12Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17M12 21C7.02944 21 3 16.9706 3 12M12 21V17M3 12C3 7.02944 7.02944 3 12 3M3 12H7M12 3V7M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CrosshairSimple;