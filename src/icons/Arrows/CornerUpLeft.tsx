import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerUpLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 20V17.6C20 14.2397 20 12.5595 19.346 11.2761C18.7708 10.1471 17.8529 9.2292 16.7239 8.65396C15.4405 8 13.7603 8 10.4 8H4M4 8L8 12M4 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 3.29289C9.09763 3.68342 9.09763 4.31658 8.70711 4.70711L6.41421 7H10.4444C12.087 6.99999 13.3809 6.99999 14.4222 7.08507C15.4846 7.17186 16.3717 7.35217 17.1779 7.76295C18.4951 8.43407 19.5659 9.50493 20.237 10.8221C20.6478 11.6283 20.8281 12.5154 20.9149 13.5778C21 14.6191 21 15.913 21 17.5556V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V17.6C19 15.9033 18.9992 14.691 18.9216 13.7406C18.8449 12.802 18.6982 12.2073 18.455 11.73C17.9757 10.7892 17.2108 10.0243 16.27 9.54497C15.7927 9.30179 15.198 9.15512 14.2594 9.07842C13.309 9.00078 12.0967 9 10.4 9H6.41421L8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289L7.29289 3.29289C7.68342 2.90237 8.31658 2.90237 8.70711 3.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 20V17.6C20 14.2397 20 12.5595 19.346 11.2761C18.7708 10.1471 17.8529 9.2292 16.7239 8.65396C15.4405 8 13.7603 8 10.4 8H4M4 8L8 12M4 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M14.2597 9.07842C13.3094 9.00078 12.097 9 10.4004 9H4C3.44772 9 3 8.55229 3 8C3 7.44772 3.44772 7 4 7L10.4448 7C12.0873 6.99999 13.3813 6.99999 14.4226 7.08507C15.485 7.17186 16.3721 7.35217 17.1783 7.76295C18.4955 8.43407 19.5663 9.50493 20.2374 10.8221C20.6482 11.6283 20.8285 12.5154 20.9153 13.5778C21.0004 14.6191 21.0004 15.913 21.0004 17.5556V20C21.0004 20.5523 20.5527 21 20.0004 21C19.4481 21 19.0004 20.5523 19.0004 20V17.6C19.0004 15.9033 18.9996 14.691 18.922 13.7406C18.8453 12.802 18.6986 12.2073 18.4554 11.73C17.9761 10.7892 17.2112 10.0243 16.2703 9.54497C15.7931 9.30179 15.1984 9.15512 14.2597 9.07842Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 3.29289C9.09763 3.68342 9.09763 4.31658 8.70711 4.70711L5.41421 8L8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071C8.31658 13.0976 7.68342 13.0976 7.29289 12.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289L7.29289 3.29289C7.68342 2.90237 8.31658 2.90237 8.70711 3.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 20V17.6C20 14.2397 20 12.5595 19.346 11.2761C18.7708 10.1471 17.8529 9.2292 16.7239 8.65396C15.4405 8 13.7603 8 10.4 8H4M4 8L8 12M4 8L8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CornerUpLeft;