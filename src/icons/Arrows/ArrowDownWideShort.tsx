import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowDownWideShort: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 21L3 17M7 21L11 17M14 3H21M14 9H19M14 15H17M14 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C7.55228 2 8 2.44772 8 3V18.5858L10.2929 16.2929C10.6834 15.9024 11.3166 15.9024 11.7071 16.2929C12.0976 16.6834 12.0976 17.3166 11.7071 17.7071L7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L6 18.5858V3C6 2.44772 6.44772 2 7 2ZM13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H14C13.4477 4 13 3.55228 13 3ZM13 9C13 8.44772 13.4477 8 14 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H14C13.4477 10 13 9.55228 13 9ZM13 15C13 14.4477 13.4477 14 14 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H14C13.4477 16 13 15.5523 13 15ZM15 22H14C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 21L3 17M7 21L11 17M14 3H21M14 9H19M14 15H17M14 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H14C13.4477 4 13 3.55228 13 3Z" fill="currentColor"/>
<path d="M13 9C13 8.44772 13.4477 8 14 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H14C13.4477 10 13 9.55228 13 9Z" fill="currentColor"/>
<path d="M13 15C13 14.4477 13.4477 14 14 14H17C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H14C13.4477 16 13 15.5523 13 15Z" fill="currentColor"/>
<path d="M15 22H14C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C7.55228 2 8 2.44772 8 3V18.5858L10.2929 16.2929C10.6834 15.9024 11.3166 15.9024 11.7071 16.2929C12.0976 16.6834 12.0976 17.3166 11.7071 17.7071L7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071L2.29289 17.7071C1.90237 17.3166 1.90237 16.6834 2.29289 16.2929C2.68342 15.9024 3.31658 15.9024 3.70711 16.2929L6 18.5858V3C6 2.44772 6.44772 2 7 2Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 21L3 17M7 21L11 17M14 3H21M14 9H19M14 15H17M14 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ArrowDownWideShort;