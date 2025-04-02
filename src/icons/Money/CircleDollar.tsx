import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleDollar: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 14C14 14.5523 13.5523 15 13 15V13C13.5523 13 14 13.4477 14 14Z" fill="currentColor"/>
<path d="M10 10C10 9.44772 10.4477 9 11 9V11C10.4477 11 10 10.5523 10 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 6.5C13 5.94772 12.5523 5.5 12 5.5C11.4477 5.5 11 5.94772 11 6.5V7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13V15H10.9583C10.4291 15 10 14.5709 10 14.0417V14C10 13.4477 9.55229 13 9 13C8.44771 13 8 13.4477 8 14V14.0417C8 15.6755 9.32449 17 10.9583 17H11V17.5C11 18.0523 11.4477 18.5 12 18.5C12.5523 18.5 13 18.0523 13 17.5V17C14.6569 17 16 15.6569 16 14C16 12.3431 14.6569 11 13 11V9H13.0833C13.5896 9 14 9.41041 14 9.91667V10C14 10.5523 14.4477 11 15 11C15.5523 11 16 10.5523 16 10V9.91667C16 8.30584 14.6942 7 13.0833 7H13V6.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.5C12.5523 5.5 13 5.94772 13 6.5V7H13.0833C14.6942 7 16 8.30584 16 9.91667V10C16 10.5523 15.5523 11 15 11C14.4477 11 14 10.5523 14 10V9.91667C14 9.41041 13.5896 9 13.0833 9H13V11C14.6569 11 16 12.3431 16 14C16 15.6569 14.6569 17 13 17V17.5C13 18.0523 12.5523 18.5 12 18.5C11.4477 18.5 11 18.0523 11 17.5V17H10.9583C9.32449 17 8 15.6755 8 14.0417V14C8 13.4477 8.44771 13 9 13C9.55229 13 10 13.4477 10 14V14.0417C10 14.5709 10.4291 15 10.9583 15H11V13C9.34315 13 8 11.6569 8 10C8 8.34315 9.34315 7 11 7V6.5C11 5.94772 11.4477 5.5 12 5.5ZM11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11V9ZM13 15C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13V15Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 10V9.91667C15 8.85812 14.1419 8 13.0833 8H11C9.89543 8 9 8.89543 9 10C9 11.1046 9.89543 12 11 12H13C14.1046 12 15 12.8954 15 14C15 15.1046 14.1046 16 13 16H10.9583C9.87678 16 9 15.1232 9 14.0417V14M12 17.5V6.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleDollar;