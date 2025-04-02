import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowsLeftRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 7.29289C8.09763 7.68342 8.09763 8.31658 7.70711 8.70711L5.41421 11H18.5858L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13H5.41421L7.70711 15.2929C8.09763 15.6834 8.09763 16.3166 7.70711 16.7071C7.31658 17.0976 6.68342 17.0976 6.29289 16.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L6.29289 7.29289C6.68342 6.90237 7.31658 6.90237 7.70711 7.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 11H18.5858L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13H12V11Z" fill="currentColor"/>
<path d="M12 11H5.41421L7.70711 8.70711C8.09763 8.31658 8.09763 7.68342 7.70711 7.29289C7.31658 6.90237 6.68342 6.90237 6.29289 7.29289L2.29289 11.2929C1.90237 11.6834 1.90237 12.3166 2.29289 12.7071L6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071C8.09763 16.3166 8.09763 15.6834 7.70711 15.2929L5.41421 13H12V11Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M3 12L7 8M3 12L7 16M21 12L17 16M21 12L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ArrowsLeftRight;