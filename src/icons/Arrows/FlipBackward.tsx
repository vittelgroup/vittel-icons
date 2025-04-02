import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FlipBackward: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 4.29289C7.09763 4.68342 7.09763 5.31658 6.70711 5.70711L5.41421 7H16.5C19.5376 7 22 9.46243 22 12.5C22 15.5376 19.5376 18 16.5 18H3C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16H16.5C18.433 16 20 14.433 20 12.5C20 10.567 18.433 9 16.5 9H5.41421L6.70711 10.2929C7.09763 10.6834 7.09763 11.3166 6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289L5.29289 4.29289C5.68342 3.90237 6.31658 3.90237 6.70711 4.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 7.44772 2.44772 7 3 7H16.5C19.5376 7 22 9.46243 22 12.5C22 15.5376 19.5376 18 16.5 18H3C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16H16.5C18.433 16 20 14.433 20 12.5C20 10.567 18.433 9 16.5 9H3C2.44772 9 2 8.55228 2 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 4.29289C7.09763 4.68342 7.09763 5.31658 6.70711 5.70711L4.41421 8L6.70711 10.2929C7.09763 10.6834 7.09763 11.3166 6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289L5.29289 4.29289C5.68342 3.90237 6.31658 3.90237 6.70711 4.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default FlipBackward;