import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ExpandAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M21 3H16.5M21 3V7.5M10 14L3 21M3 21H7.5M3 21L3 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4C15.9477 4 15.5 3.55228 15.5 3C15.5 2.44772 15.9477 2 16.5 2H21C21.5523 2 22 2.44772 22 3V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H16.5ZM10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L5.41421 20H7.5C8.05228 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21L2 16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M21 3H16.5M21 3V7.5M10 14L3 21M3 21H7.5M3 21L3 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M10.7071 13.2929C11.0976 13.6834 11.0976 14.3166 10.7071 14.7071L5.41421 20H7.5C8.05228 20 8.5 20.4477 8.5 21C8.5 21.5523 8.05228 22 7.5 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V16.5C2 15.9477 2.44772 15.5 3 15.5C3.55229 15.5 4 15.9477 4 16.5L4 18.5858L9.29289 13.2929C9.68342 12.9024 10.3166 12.9024 10.7071 13.2929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4C15.9477 4 15.5 3.55228 15.5 3C15.5 2.44772 15.9477 2 16.5 2H21C21.5523 2 22 2.44772 22 3V7.5C22 8.05228 21.5523 8.5 21 8.5C20.4477 8.5 20 8.05228 20 7.5V5.41421L14.7071 10.7071C14.3166 11.0976 13.6834 11.0976 13.2929 10.7071C12.9024 10.3166 12.9024 9.68342 13.2929 9.29289L18.5858 4H16.5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M21 3H16.5M21 3V7.5M10 14L3 21M3 21H7.5M3 21L3 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ExpandAlt;