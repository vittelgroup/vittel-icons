import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 10.1746C9 8.42132 10.3431 7 12 7C13.6569 7 15 8.42132 15 10.1746C15 11.0337 14.4315 11.7525 13.8137 12.3494L9 17H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10 10.1746C10 8.91955 10.948 8 12 8C13.052 8 14 8.91955 14 10.1746C14 10.5901 13.7163 11.053 13.1188 11.6302L8.30518 16.2808C8.01204 16.564 7.92013 16.9968 8.07286 17.3747C8.22559 17.7526 8.5924 18 9 18H15C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16H11.4743L14.5085 13.0686C15.1467 12.452 16 11.4772 16 10.1746C16 7.92309 14.2617 6 12 6C9.73831 6 8 7.92309 8 10.1746C8 10.7269 8.44772 11.1746 9 11.1746C9.55228 11.1746 10 10.7269 10 10.1746Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M9 10.1746C9 8.42132 10.3431 7 12 7C13.6569 7 15 8.42132 15 10.1746C15 11.0337 14.4315 11.7525 13.8137 12.3494L9 17H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C10.948 8 10 8.91955 10 10.1746C10 10.7269 9.55232 11.1746 9.00003 11.1746C8.44775 11.1746 8.00003 10.7269 8.00003 10.1746C8.00003 7.92309 9.73835 6 12 6C14.2617 6 16 7.92309 16 10.1746C16 11.4772 15.1467 12.452 14.5085 13.0686L11.4743 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9.00003C8.59243 18 8.22562 17.7526 8.07289 17.3747C7.92016 16.9968 8.01207 16.564 8.30521 16.2808L13.1189 11.6302C13.7163 11.053 14 10.5901 14 10.1746C14 8.91955 13.0521 8 12 8Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 10.1746C9 8.42132 10.3431 7 12 7C13.6569 7 15 8.42132 15 10.1746C15 11.0337 14.4315 11.7525 13.8137 12.3494L9 17H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Circle2;