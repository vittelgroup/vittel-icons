import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle0: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M15.5 12C15.5 13.25 15.3194 14.0172 15 14.7778C14.3989 16.2092 13.2727 17 12 17C10.7273 17 9.61404 16.1178 9 14.7778C8.63593 13.9833 8.5 13.25 8.5 12C8.5 10.75 8.63593 10.0167 9 9.22222C9.61404 7.88224 10.7273 7 12 7C13.2727 7 14.386 7.88224 15 9.22222C15.3641 10.0167 15.5 10.75 15.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.9091 9.63881C10.4133 8.53851 11.2314 8 12 8C12.7686 8 13.5867 8.53851 14.0909 9.63881C14.3765 10.262 14.5 10.8411 14.5 12C14.5 13.1297 14.3412 13.7638 14.078 14.3906C13.6045 15.518 12.8018 16 12 16C11.2314 16 10.4133 15.4615 9.9091 14.3612C9.62354 13.738 9.5 13.1589 9.5 12C9.5 10.8411 9.62354 10.262 9.9091 9.63881Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 6C10.2231 6 8.81478 7.22596 8.0909 8.80563C7.64832 9.77147 7.5 10.6589 7.5 12C7.5 13.3411 7.64832 14.2285 8.0909 15.1944C8.81478 16.774 10.2231 18 12 18C13.7437 18 15.1932 16.9004 15.922 15.165C16.2976 14.2706 16.5 13.3703 16.5 12C16.5 10.6589 16.3517 9.77147 15.9091 8.80563C15.1852 7.22596 13.7769 6 12 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M15.5 12C15.5 13.25 15.3194 14.0172 15 14.7778C14.3989 16.2092 13.2727 17 12 17C10.7273 17 9.61404 16.1178 9 14.7778C8.63593 13.9833 8.5 13.25 8.5 12C8.5 10.75 8.63593 10.0167 9 9.22222C9.61404 7.88224 10.7273 7 12 7C13.2727 7 14.386 7.88224 15 9.22222C15.3641 10.0167 15.5 10.75 15.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C11.2314 8 10.4133 8.53851 9.9091 9.63881C9.62354 10.262 9.5 10.8411 9.5 12C9.5 13.1589 9.62354 13.738 9.9091 14.3612C10.4133 15.4615 11.2314 16 12 16C12.8018 16 13.6045 15.518 14.078 14.3906C14.3412 13.7638 14.5 13.1297 14.5 12C14.5 10.8411 14.3765 10.262 14.0909 9.63881C13.5867 8.53851 12.7686 8 12 8ZM8.0909 8.80563C8.81478 7.22596 10.2231 6 12 6C13.7769 6 15.1852 7.22596 15.9091 8.80563C16.3517 9.77147 16.5 10.6589 16.5 12C16.5 13.3703 16.2976 14.2706 15.922 15.165C15.1932 16.9004 13.7437 18 12 18C10.2231 18 8.81478 16.774 8.0909 15.1944C7.64832 14.2285 7.5 13.3411 7.5 12C7.5 10.6589 7.64832 9.77147 8.0909 8.80563Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M15.5 12C15.5 13.25 15.3194 14.0172 15 14.7778C14.3989 16.2092 13.2727 17 12 17C10.7273 17 9.61404 16.1178 9 14.7778C8.63593 13.9833 8.5 13.25 8.5 12C8.5 10.75 8.63593 10.0167 9 9.22222C9.61404 7.88224 10.7273 7 12 7C13.2727 7 14.386 7.88224 15 9.22222C15.3641 10.0167 15.5 10.75 15.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Circle0;