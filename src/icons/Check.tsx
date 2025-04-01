import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Check: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.7096 5.79536C21.0987 6.18724 21.0965 6.82041 20.7046 7.20957L9.62772 18.2096C9.23776 18.5968 8.60839 18.5968 8.21844 18.2096L3.29536 13.3207C2.90348 12.9315 2.90127 12.2984 3.29043 11.9065C3.67959 11.5146 4.31276 11.5124 4.70464 11.9015L8.92308 16.0907L19.2954 5.79043C19.6872 5.40127 20.3204 5.40348 20.7096 5.79536Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M20.7096 5.79536C21.0987 6.18724 21.0965 6.82041 20.7046 7.20957L9.62772 18.2096C9.23776 18.5968 8.60839 18.5968 8.21844 18.2096L3.29536 13.3207C2.90348 12.9315 2.90127 12.2984 3.29043 11.9065C3.67959 11.5146 4.31276 11.5124 4.70464 11.9015L8.92308 16.0907L19.2954 5.79043C19.6872 5.40127 20.3204 5.40348 20.7096 5.79536Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Check;