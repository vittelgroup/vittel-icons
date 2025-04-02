import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TurkishLiraSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 12.1429V20H11.8889C15.8162 20 19 16.8162 19 12.8889V12M7 12.1429V8.14286M7 12.1429L5 13M7 12.1429L12 10M7 8.14286V4M7 8.14286L5 9M7 8.14286L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00026 3C7.55254 3 8.00026 3.44772 8.00026 4V6.62632L11.6063 5.08085C12.114 4.8633 12.7018 5.09845 12.9194 5.60608C13.137 6.11371 12.9018 6.70159 12.3942 6.91915L8.00026 8.80225V10.6263L11.6063 9.08085C12.114 8.8633 12.7018 9.09845 12.9194 9.60608C13.137 10.1137 12.9018 10.7016 12.3942 10.9191L8.00026 12.8023V19H11.8891C15.2642 19 18.0003 16.264 18.0003 12.8889V12C18.0003 11.4477 18.448 11 19.0003 11C19.5525 11 20.0003 11.4477 20.0003 12V12.8889C20.0003 17.3685 16.3688 21 11.8891 21H7.00026C6.44797 21 6.00026 20.5523 6.00026 20V13.6594L5.39418 13.9191C4.88655 14.1367 4.29867 13.9015 4.08111 13.3939C3.86356 12.8863 4.09871 12.2984 4.60634 12.0809L6.00026 11.4835V9.6594L5.39418 9.91915C4.88655 10.1367 4.29867 9.90155 4.08111 9.39392C3.86356 8.88629 4.09871 8.29841 4.60634 8.08085L6.00026 7.48346V4C6.00026 3.44772 6.44797 3 7.00026 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 12.1429V20H11.8889C15.8162 20 19 16.8162 19 12.8889V12M7 12.1429V8.14286M7 12.1429L5 13M7 12.1429L12 10M7 8.14286V4M7 8.14286L5 9M7 8.14286L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8 4C8 3.44772 7.55228 3 7 3C6.44772 3 6 3.44772 6 4V7.48383L8 6.62668V4Z" fill="currentColor"/>
<path d="M8 8.80262L6 9.65976V11.4838L8 10.6267V8.80262Z" fill="currentColor"/>
<path d="M8 12.8026L6 13.6598V20C6 20.5523 6.44772 21 7 21H11.8889C16.3685 21 20 17.3685 20 12.8889V12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12V12.8889C18 16.264 15.264 19 11.8889 19H8V12.8026Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9194 5.60609C13.137 6.11372 12.9018 6.7016 12.3942 6.91916L5.39418 9.91916C4.88655 10.1367 4.29867 9.90156 4.08111 9.39393C3.86356 8.8863 4.09871 8.29842 4.60634 8.08087L11.6063 5.08087C12.114 4.86331 12.7018 5.09846 12.9194 5.60609ZM12.9194 9.60609C13.137 10.1137 12.9018 10.7016 12.3942 10.9192L5.39418 13.9192C4.88655 14.1367 4.29867 13.9016 4.08111 13.3939C3.86356 12.8863 4.09871 12.2984 4.60634 12.0809L11.6063 9.08087C12.114 8.86331 12.7018 9.09846 12.9194 9.60609Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 12.1429V20H11.8889C15.8162 20 19 16.8162 19 12.8889V12M7 12.1429V8.14286M7 12.1429L5 13M7 12.1429L12 10M7 8.14286V4M7 8.14286L5 9M7 8.14286L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TurkishLiraSign;