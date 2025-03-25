import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerDownRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 4V6.4C4 9.76032 4 11.4405 4.65396 12.7239C5.2292 13.8529 6.14708 14.7708 7.27606 15.346C8.55953 16 10.2397 16 13.6 16H20M20 16L16 12M20 16L16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4.55229 3 5 3.44772 5 4V6.4C5 8.09666 5.00078 9.30901 5.07842 10.2594C5.15512 11.198 5.30179 11.7927 5.54497 12.27C6.02433 13.2108 6.78924 13.9757 7.73005 14.455C8.20731 14.6982 8.80197 14.8449 9.74064 14.9216C10.691 14.9992 11.9033 15 13.6 15H17.5858L15.2929 12.7071C14.9024 12.3166 14.9024 11.6834 15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929L20.7071 15.2929C21.0976 15.6834 21.0976 16.3166 20.7071 16.7071L16.7071 20.7071C16.3166 21.0976 15.6834 21.0976 15.2929 20.7071C14.9024 20.3166 14.9024 19.6834 15.2929 19.2929L17.5858 17H13.5556C11.9131 17 10.6191 17 9.57778 16.9149C8.51543 16.8281 7.62827 16.6478 6.82207 16.237C5.50493 15.5659 4.43407 14.4951 3.76295 13.1779C3.35217 12.3717 3.17186 11.4846 3.08507 10.4222C2.99999 9.38091 2.99999 8.08696 3 6.44441L3 4C3 3.44772 3.44772 3 4 3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 4V6.4C4 9.76032 4 11.4405 4.65396 12.7239C5.2292 13.8529 6.14708 14.7708 7.27606 15.346C8.55953 16 10.2397 16 13.6 16H20M20 16L16 12M20 16L16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4.55229 3 5 3.44772 5 4V6.4C5 8.09666 5.00078 9.30901 5.07842 10.2594C5.15512 11.198 5.30179 11.7927 5.54497 12.27C6.02433 13.2108 6.78924 13.9757 7.73005 14.455C8.20731 14.6982 8.80197 14.8449 9.74064 14.9216C10.691 14.9992 11.9033 15 13.6 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H13.5556C11.9131 17 10.6191 17 9.57778 16.9149C8.51543 16.8281 7.62827 16.6478 6.82207 16.237C5.50493 15.5659 4.43407 14.4951 3.76295 13.1779C3.35217 12.3717 3.17186 11.4846 3.08507 10.4222C2.99999 9.38091 2.99999 8.08696 3 6.44441L3 4C3 3.44772 3.44772 3 4 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929L20.7071 15.2929C21.0976 15.6834 21.0976 16.3166 20.7071 16.7071L16.7071 20.7071C16.3166 21.0976 15.6834 21.0976 15.2929 20.7071C14.9024 20.3166 14.9024 19.6834 15.2929 19.2929L18.5858 16L15.2929 12.7071C14.9024 12.3166 14.9024 11.6834 15.2929 11.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 4V6.4C4 9.76032 4 11.4405 4.65396 12.7239C5.2292 13.8529 6.14708 14.7708 7.27606 15.346C8.55953 16 10.2397 16 13.6 16H20M20 16L16 12M20 16L16 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CornerDownRight;