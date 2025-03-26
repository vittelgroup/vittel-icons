import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChartWaterfall: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55229 2 4 2.44772 4 3V16.2C4 17.0566 4.00078 17.6389 4.03755 18.089C4.07337 18.5274 4.1383 18.7516 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.24842 19.8617 5.47262 19.9266 5.91104 19.9624C6.36113 19.9992 6.94342 20 7.8 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H7.75868C6.95372 22 6.28936 22 5.74817 21.9558C5.18608 21.9099 4.66937 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43598 19.816C2.18868 19.3306 2.09012 18.8139 2.04419 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413L2 3C2 2.44772 2.44772 2 3 2ZM15 3C15.5523 3 16 3.44772 16 4V8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8V4C14 3.44772 14.4477 3 15 3ZM19 3C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V4C18 3.44772 18.4477 3 19 3ZM11 7C11.5523 7 12 7.44772 12 8V12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12V8C10 7.44772 10.4477 7 11 7ZM7 12C7.55229 12 8 12.4477 8 13V17C8 17.5523 7.55229 18 7 18C6.44772 18 6 17.5523 6 17V13C6 12.4477 6.44772 12 7 12Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55229 2 4 2.44772 4 3V16.2C4 17.0566 4.00078 17.6389 4.03755 18.089C4.07337 18.5274 4.1383 18.7516 4.21799 18.908C4.40973 19.2843 4.7157 19.5903 5.09202 19.782C5.24842 19.8617 5.47262 19.9266 5.91104 19.9624C6.36113 19.9992 6.94342 20 7.8 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H7.75868C6.95372 22 6.28936 22 5.74817 21.9558C5.18608 21.9099 4.66937 21.8113 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43598 19.816C2.18868 19.3306 2.09012 18.8139 2.04419 18.2518C1.99998 17.7106 1.99999 17.0463 2 16.2413L2 3C2 2.44772 2.44772 2 3 2Z" fill="currentColor"/>
<path d="M15 3C15.5523 3 16 3.44772 16 4V8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8V4C14 3.44772 14.4477 3 15 3Z" fill="currentColor"/>
<path d="M19 3C19.5523 3 20 3.44772 20 4V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V4C18 3.44772 18.4477 3 19 3Z" fill="currentColor"/>
<path d="M11 7C11.5523 7 12 7.44772 12 8V12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12V8C10 7.44772 10.4477 7 11 7Z" fill="currentColor"/>
<path d="M7 12C7.55228 12 8 12.4477 8 13V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V13C6 12.4477 6.44772 12 7 12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V3M15 4V8M11 8V12M7 13V17M19 4V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChartWaterfall;