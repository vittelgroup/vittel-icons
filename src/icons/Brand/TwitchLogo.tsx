import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TwitchLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 11V7M16 11V7M3 3H21V12.9L16.5 17H11L6 21V17H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V12.9C22 13.1814 21.8815 13.4497 21.6735 13.6392L17.1735 17.7392C16.9893 17.907 16.7491 18 16.5 18H11.3508L6.62469 21.7809C6.32452 22.021 5.91328 22.0678 5.56681 21.9013C5.22035 21.7348 5 21.3844 5 21V18H3C2.44772 18 2 17.5523 2 17V3ZM12 7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7V11C10 11.5523 10.4477 12 11 12C11.5523 12 12 11.5523 12 11V7ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11V7Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 3H3V17H6V21L11 17H16.5L21 12.9V3Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M11 11V7M16 11V7M3 3H21V12.9L16.5 17H11L6 21V17H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3 2C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18H5V21C5 21.3844 5.22035 21.7348 5.56681 21.9013C5.91328 22.0678 6.32452 22.021 6.62469 21.7809L11.3508 18H16.5C16.7491 18 16.9893 17.907 17.1735 17.7392L21.6735 13.6392C21.8815 13.4497 22 13.1814 22 12.9V3C22 2.44772 21.5523 2 21 2H3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11.5523 6 12 6.44772 12 7V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V7C10 6.44772 10.4477 6 11 6ZM16 6C16.5523 6 17 6.44772 17 7V11C17 11.5523 16.5523 12 16 12C15.4477 12 15 11.5523 15 11V7C15 6.44772 15.4477 6 16 6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 11V7M16 11V7M3 3H21V12.9L16.5 17H11L6 21V17H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TwitchLogo;