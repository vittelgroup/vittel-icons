import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerLeftDown: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L12 16M8 20L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5556 3L20 3C20.5523 3 21 3.44772 21 4C21 4.55229 20.5523 5 20 5H17.6C15.9033 5 14.691 5.00078 13.7406 5.07842C12.802 5.15512 12.2073 5.30179 11.73 5.54497C10.7892 6.02433 10.0243 6.78924 9.54497 7.73005C9.30179 8.20732 9.15512 8.80197 9.07842 9.74064C9.00078 10.691 9 11.9033 9 13.6V17.5858L11.2929 15.2929C11.6834 14.9024 12.3166 14.9024 12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21C7.73478 21 7.48043 20.8946 7.29289 20.7071L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929C3.68342 14.9024 4.31658 14.9024 4.70711 15.2929L7 17.5858V13.5556C6.99999 11.913 6.99999 10.6191 7.08507 9.57778C7.17186 8.51543 7.35217 7.62827 7.76295 6.82207C8.43407 5.50493 9.50493 4.43407 10.8221 3.76296C11.6283 3.35217 12.5154 3.17186 13.5778 3.08507C14.6191 2.99999 15.913 2.99999 17.5556 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L12 16M8 20L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M17.5556 3L20 3C20.5523 3 21 3.44772 21 4C21 4.55229 20.5523 5 20 5H17.6C15.9033 5 14.691 5.00078 13.7406 5.07842C12.802 5.15512 12.2073 5.30179 11.73 5.54497C10.7892 6.02433 10.0243 6.78924 9.54497 7.73005C9.30179 8.20732 9.15512 8.80197 9.07842 9.74064C9.00078 10.691 9 11.9033 9 13.6V20C9 20.5523 8.55229 21 8 21C7.44772 21 7 20.5523 7 20L7 13.5556C6.99999 11.913 6.99999 10.6191 7.08507 9.57778C7.17186 8.51543 7.35217 7.62827 7.76296 6.82207C8.43407 5.50493 9.50493 4.43407 10.8221 3.76296C11.6283 3.35217 12.5154 3.17186 13.5778 3.08507C14.6191 2.99999 15.913 2.99999 17.5556 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 15.2929C3.68342 14.9024 4.31658 14.9024 4.70711 15.2929L8 18.5858L11.2929 15.2929C11.6834 14.9024 12.3166 14.9024 12.7071 15.2929C13.0976 15.6834 13.0976 16.3166 12.7071 16.7071L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21C7.73478 21 7.48043 20.8946 7.29289 20.7071L3.29289 16.7071C2.90237 16.3166 2.90237 15.6834 3.29289 15.2929Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V20M8 20L12 16M8 20L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CornerLeftDown;