import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MoveRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5H21M10 10H21M10 14H21M3 19H21M3 9L6 12L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5ZM2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289C2.68342 7.90237 3.31658 7.90237 3.70711 8.29289L6.70711 11.2929C7.09763 11.6834 7.09763 12.3166 6.70711 12.7071L3.70711 15.7071C3.31658 16.0976 2.68342 16.0976 2.29289 15.7071C1.90237 15.3166 1.90237 14.6834 2.29289 14.2929L4.58579 12L2.29289 9.70711ZM9 10C9 9.44772 9.44772 9 10 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H10C9.44772 11 9 10.5523 9 10ZM9 14C9 13.4477 9.44772 13 10 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H10C9.44772 15 9 14.5523 9 14ZM21 20H3C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5H21M10 10H21M10 14H21M3 19H21M3 9L6 12L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5ZM9 10C9 9.44772 9.44772 9 10 9H21C21.5523 9 22 9.44772 22 10C22 10.5523 21.5523 11 21 11H10C9.44772 11 9 10.5523 9 10ZM9 14C9 13.4477 9.44772 13 10 13H21C21.5523 13 22 13.4477 22 14C22 14.5523 21.5523 15 21 15H10C9.44772 15 9 14.5523 9 14ZM21 20H3C2.44772 20 2 19.5523 2 19C2 18.4477 2.44772 18 3 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20Z" fill="currentColor"/>
<path d="M2.29289 9.70711C1.90237 9.31658 1.90237 8.68342 2.29289 8.29289C2.68342 7.90237 3.31658 7.90237 3.70711 8.29289L6.70711 11.2929C7.09763 11.6834 7.09763 12.3166 6.70711 12.7071L3.70711 15.7071C3.31658 16.0976 2.68342 16.0976 2.29289 15.7071C1.90237 15.3166 1.90237 14.6834 2.29289 14.2929L4.58579 12L2.29289 9.70711Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5H21M10 10H21M10 14H21M3 19H21M3 9L6 12L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MoveRight;