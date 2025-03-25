import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RefreshCwAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C14.5605 2 16.8984 2.96367 18.6669 4.54655L18.6701 4.5494L18.6701 4.54941L20 5.75001V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9H16C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7H18.4L17.3331 6.03682C17.3326 6.03636 17.3321 6.0359 17.3316 6.03544C15.9157 4.76889 14.0488 4 12 4C7.58172 4 4 7.58172 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12ZM21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5228 22 12 22C9.43946 22 7.10161 21.0363 5.33309 19.4535L5.3299 19.4506L4 18.25V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V16C2 15.4477 2.44772 15 3 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H5.60001L6.66691 17.9632C6.6674 17.9636 6.66789 17.9641 6.66839 17.9645C8.08422 19.2311 9.95112 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2.00001 12C2.00001 6.47715 6.47716 2 12 2C14.5605 2 16.8984 2.96367 18.6669 4.54655L18.6701 4.5494L18.6701 4.54941L21.6701 7.25773C22.0801 7.62782 22.1124 8.26016 21.7423 8.6701C21.3722 9.08005 20.7399 9.11236 20.3299 8.74227L17.3331 6.03682C17.3326 6.03636 17.3321 6.0359 17.3316 6.03544C15.9157 4.76889 14.0489 4 12 4C7.58173 4 4.00001 7.58172 4.00001 12C4.00001 12.5523 3.55229 13 3.00001 13C2.44772 13 2.00001 12.5523 2.00001 12ZM21 11C21.5523 11 22 11.4477 22 12C22 17.5228 17.5229 22 12 22C9.43947 22 7.10162 21.0363 5.33309 19.4535L5.32991 19.4506L2.32991 16.7423C1.91996 16.3722 1.88765 15.7398 2.25774 15.3299C2.62783 14.92 3.26016 14.8876 3.67011 15.2577L6.66692 17.9632C6.66741 17.9636 6.6679 17.9641 6.66839 17.9645C8.08423 19.2311 9.95113 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 20.4477 11 21 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 2C21.5523 2 22 2.44772 22 3V8C22 8.55228 21.5523 9 21 9H16C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7H20V3C20 2.44772 20.4477 2 21 2ZM2 16C2 15.4477 2.44772 15 3 15H8C8.55228 15 9 15.4477 9 16C9 16.5523 8.55228 17 8 17H4V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V16Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RefreshCwAlt;