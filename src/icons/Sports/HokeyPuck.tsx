import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HokeyPuck: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 9C21 10.6569 16.9706 12 12 12C7.02944 12 3 10.6569 3 9M21 9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9M21 9V15C21 16.6569 16.9706 18 12 18C7.02944 18 3 16.6569 3 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 15V9C22 8.14805 21.4811 7.49559 20.9117 7.04685C20.331 6.58923 19.5528 6.22085 18.6802 5.93C16.9246 5.3448 14.5629 5 12 5C9.43715 5 7.07541 5.3448 5.31981 5.93C4.44724 6.22085 3.66896 6.58923 3.08829 7.04685C2.51889 7.49559 2 8.14805 2 9V15C2 15.8519 2.51889 16.5044 3.08829 16.9531C3.66896 17.4108 4.44724 17.7791 5.31981 18.07C7.07541 18.6552 9.43715 19 12 19C14.5629 19 16.9246 18.6552 18.6802 18.07C19.5528 17.7791 20.331 17.4108 20.9117 16.9531C21.4811 16.5044 22 15.8519 22 15ZM20 11.5266C19.5988 11.7318 19.1533 11.9123 18.6802 12.07C16.9246 12.6552 14.5629 13 12 13C9.43715 13 7.07541 12.6552 5.31981 12.07C4.84666 11.9123 4.40123 11.7318 4 11.5266V15C4 15 3.99998 15.0052 4.00305 15.0153C4.00645 15.0264 4.01483 15.0485 4.03507 15.0814C4.07752 15.1506 4.16408 15.2545 4.32624 15.3823C4.65642 15.6425 5.19616 15.9206 5.95227 16.1726C7.45402 16.6732 9.59229 17 12 17C14.4077 17 16.546 16.6732 18.0477 16.1726C18.8038 15.9206 19.3436 15.6425 19.6738 15.3823C19.8359 15.2545 19.9225 15.1506 19.9649 15.0814C19.9852 15.0485 19.9935 15.0264 19.9969 15.0153C20.0001 15.0049 20 15 20 15V11.5266Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 18C16.9706 18 21 16.6569 21 15V9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9V15C3 16.6569 7.02944 18 12 18Z" fill="currentColor"/>
<path d="M21 9C21 10.6569 16.9706 12 12 12C7.02944 12 3 10.6569 3 9M21 9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9M21 9V15C21 16.6569 16.9706 18 12 18C7.02944 18 3 16.6569 3 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 18C16.9706 18 21 16.6569 21 15V9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9V15C3 16.6569 7.02944 18 12 18Z" fill="currentColor"/>
<path d="M21 9C21 10.6569 16.9706 12 12 12C7.02944 12 3 10.6569 3 9M21 9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9M21 9V15C21 16.6569 16.9706 18 12 18C7.02944 18 3 16.6569 3 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 9C21 10.6569 16.9706 12 12 12C7.02944 12 3 10.6569 3 9M21 9C21 7.34315 16.9706 6 12 6C7.02944 6 3 7.34315 3 9M21 9V15C21 16.6569 16.9706 18 12 18C7.02944 18 3 16.6569 3 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default HokeyPuck;