import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CheckDouble: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7032 4.289C17.0959 4.67736 17.0994 5.31051 16.711 5.70319L9.78793 12.7032C9.60008 12.8931 9.34405 13 9.07692 13C8.80979 13 8.55376 12.8931 8.36592 12.7032L5.289 9.59208C4.90064 9.1994 4.90413 8.56625 5.29681 8.17789C5.68949 7.78953 6.32264 7.79302 6.711 8.1857L9.07692 10.5779L15.289 4.29681C15.6774 3.90413 16.3105 3.90064 16.7032 4.289ZM20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071L3.29289 14.7071C2.90237 14.3166 2.90237 13.6834 3.29289 13.2929C3.68342 12.9024 4.31658 12.9024 4.70711 13.2929L9 17.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M16.7032 4.289C17.0959 4.67736 17.0994 5.31051 16.711 5.70319L9.78793 12.7032C9.60008 12.8931 9.34405 13 9.07692 13C8.80979 13 8.55376 12.8931 8.36592 12.7032L5.289 9.59208C4.90064 9.1994 4.90413 8.56625 5.29681 8.17789C5.68949 7.78953 6.32264 7.79302 6.711 8.1857L9.07692 10.5779L15.289 4.29681C15.6774 3.90413 16.3105 3.90064 16.7032 4.289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071L3.29289 14.7071C2.90237 14.3166 2.90237 13.6834 3.29289 13.2929C3.68342 12.9024 4.31658 12.9024 4.70711 13.2929L9 17.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 14L9 19L20 8M6 8.88889L9.07692 12L16 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CheckDouble;