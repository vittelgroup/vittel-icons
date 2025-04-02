import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RefreshCcwAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12C3 16.9706 7.02944 21 12 21C14.3051 21 16.4077 20.1334 18 18.7083L21 16M21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168L3 8M21 21V16M21 16H16M3 3V8M3 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55228 2 4 2.44772 4 3V5.75001L5.33308 4.54654C7.1016 2.96367 9.43946 2 12 2C17.5228 2 22 6.47715 22 12C22 12.5523 21.5523 13 21 13C20.4477 13 20 12.5523 20 12C20 7.58172 16.4183 4 12 4C9.95117 4 8.0843 4.76888 6.66847 6.03542L5.60001 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H3C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2ZM3 11C3.55228 11 4 11.4477 4 12C4 16.4183 7.58172 20 12 20C14.0489 20 15.9158 19.2311 17.3316 17.9645C17.3321 17.964 17.3326 17.9636 17.3331 17.9632L18.4 17H16C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15H21C21.5523 15 22 15.4477 22 16V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V18.25L18.6701 19.4506L18.6669 19.4535C16.8984 21.0363 14.5605 22 12 22C6.47715 22 2 17.5228 2 12C2 11.4477 2.44772 11 3 11Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12C3 16.9706 7.02944 21 12 21C14.3051 21 16.4077 20.1334 18 18.7083L21 16M21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168L3 8M21 21V16M21 16H16M3 3V8M3 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.66848 6.03542C8.08431 4.76888 9.95117 4 12 4C16.4183 4 20 7.58172 20 12C20 12.5523 20.4477 13 21 13C21.5523 13 22 12.5523 22 12C22 6.47715 17.5229 2 12 2C9.43947 2 7.10162 2.96367 5.33309 4.54655L2.32991 7.25773C1.91996 7.62782 1.88765 8.26016 2.25774 8.6701C2.62783 9.08005 3.26016 9.11236 3.67011 8.74227L6.66848 6.03542ZM3.00001 11C3.55229 11 4.00001 11.4477 4.00001 12C4.00001 16.4183 7.58173 20 12 20C14.0489 20 15.9158 19.2311 17.3316 17.9645C17.3321 17.964 17.3326 17.9636 17.3331 17.9632L20.3299 15.2577C20.7399 14.8876 21.3722 14.92 21.7423 15.3299C22.1124 15.7398 22.0801 16.3722 21.6701 16.7423L18.6701 19.4506L18.6669 19.4535C16.8984 21.0363 14.5605 22 12 22C6.47716 22 2.00001 17.5228 2.00001 12C2.00001 11.4477 2.44772 11 3.00001 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 2C3.55228 2 4 2.44772 4 3V7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H3C2.44772 9 2 8.55228 2 8V3C2 2.44772 2.44772 2 3 2ZM15 16C15 15.4477 15.4477 15 16 15H21C21.5523 15 22 15.4477 22 16V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V17H16C15.4477 17 15 16.5523 15 16Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12C3 16.9706 7.02944 21 12 21C14.3051 21 16.4077 20.1334 18 18.7083L21 16M21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168L3 8M21 21V16M21 16H16M3 3V8M3 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default RefreshCcwAlt;