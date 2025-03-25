import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerUpRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V17.6C4 14.2397 4 12.5595 4.65396 11.2761C5.2292 10.1471 6.14708 9.2292 7.27606 8.65396C8.55953 8 10.2397 8 13.6 8H20M20 8L16 12M20 8L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289L20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071C14.9024 12.3166 14.9024 11.6834 15.2929 11.2929L17.5858 9H13.6C11.9033 9 10.691 9.00078 9.74064 9.07842C8.80197 9.15512 8.20732 9.30179 7.73005 9.54497C6.78924 10.0243 6.02433 10.7892 5.54497 11.73C5.30179 12.2073 5.15512 12.802 5.07842 13.7406C5.00078 14.691 5 15.9033 5 17.6V20C5 20.5523 4.55229 21 4 21C3.44772 21 3 20.5523 3 20L3 17.5556C2.99999 15.913 2.99999 14.6191 3.08507 13.5778C3.17186 12.5154 3.35217 11.6283 3.76295 10.8221C4.43407 9.50493 5.50493 8.43407 6.82207 7.76295C7.62827 7.35217 8.51543 7.17186 9.57778 7.08507C10.6191 6.99999 11.913 6.99999 13.5556 7H17.5858L15.2929 4.70711C14.9024 4.31658 14.9024 3.68342 15.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V17.6C4 14.2397 4 12.5595 4.65396 11.2761C5.2292 10.1471 6.14708 9.2292 7.27606 8.65396C8.55953 8 10.2397 8 13.6 8H20M20 8L16 12M20 8L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M13.5556 7L20 7C20.5523 7 21 7.44772 21 8C21 8.55229 20.5523 9 20 9H13.6C11.9033 9 10.691 9.00078 9.74064 9.07842C8.80197 9.15512 8.20732 9.30179 7.73005 9.54497C6.78924 10.0243 6.02433 10.7892 5.54497 11.73C5.30179 12.2073 5.15512 12.802 5.07842 13.7406C5.00078 14.691 5 15.9033 5 17.6V20C5 20.5523 4.55229 21 4 21C3.44772 21 3 20.5523 3 20L3 17.5556C2.99999 15.913 2.99999 14.6191 3.08507 13.5778C3.17186 12.5154 3.35217 11.6283 3.76295 10.8221C4.43407 9.50493 5.50493 8.43407 6.82207 7.76295C7.62827 7.35217 8.51543 7.17186 9.57778 7.08507C10.6191 6.99999 11.913 6.99999 13.5556 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289L20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L16.7071 12.7071C16.3166 13.0976 15.6834 13.0976 15.2929 12.7071C14.9024 12.3166 14.9024 11.6834 15.2929 11.2929L18.5858 8L15.2929 4.70711C14.9024 4.31658 14.9024 3.68342 15.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20V17.6C4 14.2397 4 12.5595 4.65396 11.2761C5.2292 10.1471 6.14708 9.2292 7.27606 8.65396C8.55953 8 10.2397 8 13.6 8H20M20 8L16 12M20 8L16 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CornerUpRight;