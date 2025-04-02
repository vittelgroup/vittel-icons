import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DropletDegree: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z" fill="currentColor"/>
<path d="M15.5 2C15.1662 2 14.8545 2.16652 14.6689 2.44393L14.664 2.45119L14.6513 2.47023L14.6035 2.54248C14.562 2.60543 14.5016 2.69746 14.425 2.81538C14.2719 3.05118 14.0539 3.39082 13.7926 3.80886C13.2706 4.64406 12.5733 5.7965 11.8746 7.06184C11.1776 8.32409 10.4699 9.71535 9.93388 11.0253C9.41086 12.3033 9 13.6229 9 14.7C9 16.6171 9.53828 18.4317 10.6469 19.7877C11.7737 21.1661 13.4359 22 15.5 22C17.5641 22 19.2263 21.1661 20.3531 19.7877C21.4617 18.4317 22 16.6171 22 14.7C22 13.6229 21.5891 12.3033 21.0661 11.0253C20.5301 9.71535 19.8224 8.32409 19.1254 7.06184C18.4267 5.7965 17.7294 4.64406 17.2074 3.80886C16.9461 3.39082 16.7281 3.05118 16.575 2.81538C16.4984 2.69746 16.438 2.60543 16.3965 2.54248L16.3487 2.47023L16.336 2.45119L16.3311 2.44393C16.1455 2.16652 15.8338 2 15.5 2Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="currentColor"/>
<path d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M15.5 2C15.1662 2 14.8545 2.16652 14.6689 2.44393L14.664 2.45119L14.6513 2.47023L14.6035 2.54248C14.562 2.60543 14.5016 2.69746 14.425 2.81538C14.2719 3.05118 14.0539 3.39082 13.7926 3.80886C13.2706 4.64406 12.5733 5.7965 11.8746 7.06184C11.1776 8.32409 10.4699 9.71535 9.93388 11.0253C9.41086 12.3033 9 13.6229 9 14.7C9 16.6171 9.53828 18.4317 10.6469 19.7877C11.7737 21.1661 13.4359 22 15.5 22C17.5641 22 19.2263 21.1661 20.3531 19.7877C21.4617 18.4317 22 16.6171 22 14.7C22 13.6229 21.5891 12.3033 21.0661 11.0253C20.5301 9.71535 19.8224 8.32409 19.1254 7.06184C18.4267 5.7965 17.7294 4.64406 17.2074 3.80886C16.9461 3.39082 16.7281 3.05118 16.575 2.81538C16.4984 2.69746 16.438 2.60543 16.3965 2.54248L16.3487 2.47023L16.336 2.45119L16.3311 2.44393C16.1455 2.16652 15.8338 2 15.5 2Z" fill="currentColor"/>
<path d="M6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default DropletDegree;