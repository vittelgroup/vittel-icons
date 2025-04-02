import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CompressAlt2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 11L21 3M13 11L17.5 11M13 11V6.5M3 21L11 13M11 13H6.5M11 13V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L15.4142 10L17.5 10C18.0523 10 18.5 10.4477 18.5 11C18.5 11.5523 18.0523 12 17.5 12L13 12C12.7348 12 12.4804 11.8946 12.2929 11.7071C12.1054 11.5196 12 11.2652 12 11V6.5C12 5.94772 12.4477 5.5 13 5.5C13.5523 5.5 14 5.94772 14 6.5V8.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289ZM5.5 13C5.5 12.4477 5.94772 12 6.5 12H11C11.5523 12 12 12.4477 12 13V17.5C12 18.0523 11.5523 18.5 11 18.5C10.4477 18.5 10 18.0523 10 17.5V15.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L8.58579 14H6.5C5.94772 14 5.5 13.5523 5.5 13Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 11L21 3M13 11L17.5 11M13 11V6.5M3 21L11 13M11 13H6.5M11 13V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M5.5 13C5.5 12.4477 5.94772 12 6.5 12H11C11.5523 12 12 12.4477 12 13V17.5C12 18.0523 11.5523 18.5 11 18.5C10.4477 18.5 10 18.0523 10 17.5V15.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L8.58579 14H6.5C5.94772 14 5.5 13.5523 5.5 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L15.4142 10L17.5 10C18.0523 10 18.5 10.4477 18.5 11C18.5 11.5523 18.0523 12 17.5 12L13 12C12.7348 12 12.4804 11.8946 12.2929 11.7071C12.1054 11.5196 12 11.2652 12 11V6.5C12 5.94772 12.4477 5.5 13 5.5C13.5523 5.5 14 5.94772 14 6.5V8.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 11L21 3M13 11L17.5 11M13 11V6.5M3 21L11 13M11 13H6.5M11 13V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CompressAlt2;