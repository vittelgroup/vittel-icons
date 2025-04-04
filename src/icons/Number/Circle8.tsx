import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle8: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.25 11.5H11.75M12.25 11.5C13.7688 11.5 15 12.7312 15 14.25C15 15.7688 13.7688 17 12.25 17H11.75C10.2312 17 9 15.7688 9 14.25C9 12.7312 10.2312 11.5 11.75 11.5M12.25 11.5C13.4926 11.5 14.5 10.4926 14.5 9.25C14.5 8.00736 13.4926 7 12.25 7H11.75C10.5074 7 9.5 8.00736 9.5 9.25C9.5 10.4926 10.5074 11.5 11.75 11.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.5 9.25C10.5 9.94036 11.0596 10.5 11.75 10.5H12.25C12.9404 10.5 13.5 9.94036 13.5 9.25C13.5 8.55964 12.9404 8 12.25 8H11.75C11.0596 8 10.5 8.55964 10.5 9.25Z" fill="currentColor"/>
<path d="M10 14.25C10 13.2835 10.7835 12.5 11.75 12.5H12.25C13.2165 12.5 14 13.2835 14 14.25C14 15.2165 13.2165 16 12.25 16H11.75C10.7835 16 10 15.2165 10 14.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.75 6C9.95507 6 8.5 7.45507 8.5 9.25C8.5 10.0744 8.80692 10.827 9.31271 11.4C8.50922 12.0878 8 13.1094 8 14.25C8 16.3211 9.67893 18 11.75 18H12.25C14.3211 18 16 16.3211 16 14.25C16 13.1094 15.4908 12.0878 14.6873 11.4C15.1931 10.827 15.5 10.0744 15.5 9.25C15.5 7.45507 14.0449 6 12.25 6H11.75Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M12.25 11.5H11.75M12.25 11.5C13.7688 11.5 15 12.7312 15 14.25C15 15.7688 13.7688 17 12.25 17H11.75C10.2312 17 9 15.7688 9 14.25C9 12.7312 10.2312 11.5 11.75 11.5M12.25 11.5C13.4926 11.5 14.5 10.4926 14.5 9.25C14.5 8.00736 13.4926 7 12.25 7H11.75C10.5074 7 9.5 8.00736 9.5 9.25C9.5 10.4926 10.5074 11.5 11.75 11.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 9.25C8.5 7.45507 9.95507 6 11.75 6H12.25C14.0449 6 15.5 7.45507 15.5 9.25C15.5 10.0744 15.1931 10.827 14.6873 11.4C15.4908 12.0878 16 13.1094 16 14.25C16 16.3211 14.3211 18 12.25 18H11.75C9.67893 18 8 16.3211 8 14.25C8 13.1094 8.50922 12.0878 9.31271 11.4C8.80692 10.827 8.5 10.0744 8.5 9.25ZM11.75 10.5C11.0596 10.5 10.5 9.94036 10.5 9.25C10.5 8.55964 11.0596 8 11.75 8H12.25C12.9404 8 13.5 8.55964 13.5 9.25C13.5 9.94036 12.9404 10.5 12.25 10.5H11.75ZM12.25 12.5H11.75C10.7835 12.5 10 13.2835 10 14.25C10 15.2165 10.7835 16 11.75 16H12.25C13.2165 16 14 15.2165 14 14.25C14 13.2835 13.2165 12.5 12.25 12.5Z" fill="currentColor"/>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.25 11.5H11.75M12.25 11.5C13.7688 11.5 15 12.7312 15 14.25C15 15.7688 13.7688 17 12.25 17H11.75C10.2312 17 9 15.7688 9 14.25C9 12.7312 10.2312 11.5 11.75 11.5M12.25 11.5C13.4926 11.5 14.5 10.4926 14.5 9.25C14.5 8.00736 13.4926 7 12.25 7H11.75C10.5074 7 9.5 8.00736 9.5 9.25C9.5 10.4926 10.5074 11.5 11.75 11.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Circle8;