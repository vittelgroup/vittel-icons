import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChartScatterBubble: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M9 15H9.01M16 13H16.01M10 10H10.01M17 8H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3C4 2.44772 3.55229 2 3 2C2.44772 2 2 2.44772 2 3L2 16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74817 21.9558C6.28936 22 6.95372 22 7.75868 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H7.8C6.94342 20 6.36113 19.9992 5.91104 19.9624C5.47262 19.9266 5.24842 19.8617 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.1383 18.7516 4.07337 18.5274 4.03755 18.089C4.00078 17.6389 4 17.0566 4 16.2V3Z" fill="currentColor"/>
<path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z" fill="currentColor"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10C9 9.44771 9.44771 9 10 9C10.5523 9 11 9.44771 11 10Z" fill="currentColor"/>
<path d="M17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13Z" fill="currentColor"/>
<path d="M10 15C10 15.5523 9.55229 16 9 16C8.44771 16 8 15.5523 8 15C8 14.4477 8.44771 14 9 14C9.55229 14 10 14.4477 10 15Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M9 15H9.01M16 13H16.01M10 10H10.01M17 8H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M4 3C4 2.44772 3.55229 2 3 2C2.44772 2 2 2.44772 2 3L2 16.2413C1.99999 17.0463 1.99998 17.7106 2.04419 18.2518C2.09012 18.8139 2.18868 19.3306 2.43598 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C4.66937 21.8113 5.18608 21.9099 5.74817 21.9558C6.28936 22 6.95372 22 7.75868 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H7.8C6.94342 20 6.36113 19.9992 5.91104 19.9624C5.47262 19.9266 5.24842 19.8617 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.1383 18.7516 4.07337 18.5274 4.03755 18.089C4.00078 17.6389 4 17.0566 4 16.2V3Z" fill="currentColor"/>
<path d="M18 8C18 8.55229 17.5523 9 17 9C16.4477 9 16 8.55229 16 8C16 7.44772 16.4477 7 17 7C17.5523 7 18 7.44772 18 8Z" fill="currentColor"/>
<path d="M11 10C11 10.5523 10.5523 11 10 11C9.44771 11 9 10.5523 9 10C9 9.44771 9.44771 9 10 9C10.5523 9 11 9.44771 11 10Z" fill="currentColor"/>
<path d="M17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13Z" fill="currentColor"/>
<path d="M10 15C10 15.5523 9.55229 16 9 16C8.44771 16 8 15.5523 8 15C8 14.4477 8.44771 14 9 14C9.55229 14 10 14.4477 10 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M9 15H9.01M16 13H16.01M10 10H10.01M17 8H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChartScatterBubble;