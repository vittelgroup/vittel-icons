import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FontCase: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 12V21M2 21L8 3L14 21M11 14H5M19 21C17.3431 21 16 19.6569 16 18V15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15V18C22 19.6569 20.6569 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00027 2C8.4307 2 8.81284 2.27543 8.94895 2.68377L14.949 20.6838C15.1236 21.2077 14.8404 21.774 14.3165 21.9487C13.7926 22.1233 13.2262 21.8402 13.0516 21.3162L10.9462 15H5.05436L2.94895 21.3162C2.77431 21.8402 2.20799 22.1233 1.68404 21.9487C1.1601 21.774 0.87694 21.2077 1.05159 20.6838L7.05159 2.68377C7.1877 2.27543 7.56984 2 8.00027 2ZM5.72103 13H10.2795L8.00027 6.16228L5.72103 13ZM15.0003 15C15.0003 12.7909 16.7911 11 19.0003 11C19.7657 11 20.4809 11.215 21.0889 11.5879C21.2459 11.2412 21.5949 11 22.0003 11C22.5526 11 23.0003 11.4477 23.0003 12V21C23.0003 21.5523 22.5526 22 22.0003 22C21.5949 22 21.2459 21.7588 21.0889 21.4121C20.4809 21.785 19.7657 22 19.0003 22C16.7911 22 15.0003 20.2091 15.0003 18V15ZM21.0003 18V15C21.0003 13.8954 20.1048 13 19.0003 13C17.8957 13 17.0003 13.8954 17.0003 15V18C17.0003 19.1046 17.8957 20 19.0003 20C20.1048 20 21.0003 19.1046 21.0003 18Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M11.6673 14H4.33398L8.00065 3L11.6673 14Z" fill="currentColor"/>
<path d="M19 12C17.3431 12 16 13.3431 16 15V18C16 19.6569 17.3431 21 19 21C20.6569 21 22 19.6569 22 18V15C22 13.3431 20.6569 12 19 12Z" fill="currentColor"/>
</g>
<path d="M22 12V21M2 21L4.33333 14M14 21L11.6667 14M4.33333 14L8 3L11.6667 14M4.33333 14H5H11H11.6667M19 21C17.3431 21 16 19.6569 16 18V15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15V18C22 19.6569 20.6569 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M19 11C16.7909 11 15 12.7909 15 15V18C15 20.2091 16.7909 22 19 22C19.7654 22 20.4807 21.785 21.0886 21.4121C21.2456 21.7588 21.5946 22 22 22C22.5523 22 23 21.5523 23 21V12C23 11.4477 22.5523 11 22 11C21.5946 11 21.2456 11.2412 21.0886 11.5879C20.4807 11.215 19.7654 11 19 11ZM21 15V18C21 19.1046 20.1046 20 19 20C17.8954 20 17 19.1046 17 18V15C17 13.8954 17.8954 13 19 13C20.1046 13 21 13.8954 21 15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00027 2C8.4307 2 8.81284 2.27543 8.94895 2.68377L14.949 20.6838C15.1236 21.2077 14.8404 21.774 14.3165 21.9487C13.7926 22.1233 13.2262 21.8402 13.0516 21.3162L10.9462 15H5.05436L2.94895 21.3162C2.77431 21.8402 2.20799 22.1233 1.68404 21.9487C1.1601 21.774 0.87694 21.2077 1.05159 20.6838L7.05159 2.68377C7.1877 2.27543 7.56984 2 8.00027 2ZM5.72103 13H10.2795L8.00027 6.16228L5.72103 13Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 12V21M2 21L8 3L14 21M11 14H5M19 21C17.3431 21 16 19.6569 16 18V15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15V18C22 19.6569 20.6569 21 19 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default FontCase;