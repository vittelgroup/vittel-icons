import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Sigma: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 6V3H5L14 12L5 21H19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.07615 2.61732C4.23093 2.24364 4.59557 2 5.00003 2H19C19.5523 2 20 2.44772 20 3V6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6V4H7.41424L14.7071 11.2929C15.0977 11.6834 15.0977 12.3166 14.7071 12.7071L7.41424 20H18V18C18 17.4477 18.4477 17 19 17C19.5523 17 20 17.4477 20 18V21C20 21.5523 19.5523 22 19 22H5.00003C4.59557 22 4.23093 21.7564 4.07615 21.3827C3.92137 21.009 4.00692 20.5789 4.29292 20.2929L12.5858 12L4.29292 3.70711C4.00692 3.42111 3.92137 2.99099 4.07615 2.61732Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 6V3H5L14 12L5 21H19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4.07615 2.61732C4.23093 2.24364 4.59557 2 5.00003 2H19C19.5523 2 20 2.44772 20 3V6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6V4H7.41424L14.7071 11.2929C15.0977 11.6834 15.0977 12.3166 14.7071 12.7071L7.41424 20H18V18C18 17.4477 18.4477 17 19 17C19.5523 17 20 17.4477 20 18V21C20 21.5523 19.5523 22 19 22H5.00003C4.59557 22 4.23093 21.7564 4.07615 21.3827C3.92137 21.009 4.00692 20.5789 4.29292 20.2929L12.5858 12L4.29292 3.70711C4.00692 3.42111 3.92137 2.99099 4.07615 2.61732Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 6V3H5L14 12L5 21H19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Sigma;