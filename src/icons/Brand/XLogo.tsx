import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const XLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.498 10.5L19.9993 4M4 20L10.5 13.5M4 4H9L20 20H15L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3C3.62864 3 3.28787 3.20579 3.11498 3.53445C2.94209 3.86311 2.96557 4.26051 3.17596 4.56653L9.22323 13.3626L3.2929 19.2929C2.90237 19.6834 2.90237 20.3166 3.2929 20.7071C3.68342 21.0976 4.31659 21.0976 4.70711 20.7071L10.3756 15.0387L14.176 20.5665C14.3625 20.8379 14.6707 21 15 21H20C20.3714 21 20.7121 20.7942 20.885 20.4655C21.0579 20.1369 21.0344 19.7395 20.824 19.4335L14.776 10.6363L20.7063 4.70717C21.0969 4.31669 21.097 3.68352 20.7065 3.29296C20.316 2.9024 19.6828 2.90234 19.2923 3.29283L13.6237 8.96027L9.82404 3.43347C9.63749 3.16212 9.3293 3 9 3H4Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 4H4L15 20H20L9 4Z" fill="currentColor"/>
<path d="M13.498 10.5L19.9993 4M4 20L10.5 13.5M4 4H9L20 20H15L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M4 3C3.62864 3 3.28787 3.20579 3.11498 3.53445C2.94209 3.86311 2.96557 4.26051 3.17596 4.56653L14.176 20.5665C14.3625 20.8379 14.6707 21 15 21H20C20.3714 21 20.7121 20.7942 20.885 20.4655C21.0579 20.1369 21.0344 19.7395 20.824 19.4335L9.82404 3.43347C9.63749 3.16212 9.3293 3 9 3H4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7065 3.29296C21.097 3.68352 21.0969 4.31669 20.7063 4.70717L14.2051 11.2072C13.8145 11.5977 13.1814 11.5976 12.7909 11.207C12.4004 10.8165 12.4004 10.1833 12.791 9.79283L19.2923 3.29283C19.6828 2.90234 20.316 2.9024 20.7065 3.29296Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2071 12.7929C11.5976 13.1834 11.5976 13.8166 11.2071 14.2071L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L9.79289 12.7929C10.1834 12.4024 10.8166 12.4024 11.2071 12.7929Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.498 10.5L19.9993 4M4 20L10.5 13.5M4 4H9L20 20H15L4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default XLogo;