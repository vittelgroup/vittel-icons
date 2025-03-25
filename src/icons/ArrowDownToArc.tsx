import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowDownToArc: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 11L12 15M12 15L16 11M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V12.5858L8.70711 10.2929C8.31658 9.90237 7.68342 9.90237 7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071L11.2929 15.7071C11.6834 16.0976 12.3166 16.0976 12.7071 15.7071L16.7071 11.7071C17.0976 11.3166 17.0976 10.6834 16.7071 10.2929C16.3166 9.90237 15.6834 9.90237 15.2929 10.2929L13 12.5858V3Z" fill="currentColor"/>
<path d="M3 10H5.17083C4.79865 11.0553 5.0346 12.2772 5.87868 13.1213L9.87868 17.1213C11.0503 18.2929 12.9497 18.2929 14.1213 17.1213L18.1213 13.1213C18.9654 12.2772 19.2013 11.0553 18.8292 10H21C21.5523 10 22 10.4477 22 11V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12V11C2 10.4477 2.44772 10 3 10Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C16.9706 21 21 16.9706 21 12V11H3V12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/>
<path d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 11L12 15M12 15L16 11M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929C7.68342 9.90237 8.31658 9.90237 8.70711 10.2929L11 12.5858V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
<path opacity="0.3" d="M5.17083 10H3C2.44772 10 2 10.4477 2 11V12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12V11C22 10.4477 21.5523 10 21 10H18.8292C19.2013 11.0553 18.9654 12.2772 18.1213 13.1213L14.1213 17.1213C12.9497 18.2929 11.0503 18.2929 9.87868 17.1213L5.87868 13.1213C5.0346 12.2772 4.79865 11.0553 5.17083 10Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 11V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V11M8 11L12 15M12 15L16 11M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowDownToArc;