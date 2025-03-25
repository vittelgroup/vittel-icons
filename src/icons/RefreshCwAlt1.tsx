import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RefreshCwAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C7.02944 21 3 16.9706 3 12C3 9.69494 3.86656 7.59227 5.29168 6L8 3M12 3C16.9706 3 21 7.02944 21 12C21 14.3051 20.1334 16.4077 18.7083 18L16 21M3 3H8M8 3V8M21 21H16M16 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H8C8.55228 2 9 2.44772 9 3V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V5.60001L6.03542 6.66847C4.76888 8.0843 4 9.95117 4 12C4 16.4183 7.58172 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22C6.47715 22 2 17.5228 2 12C2 9.43946 2.96367 7.10161 4.54655 5.33309L4.5494 5.32989L4.54941 5.3299L5.75001 4H3C2.44772 4 2 3.55228 2 3ZM11 3C11 2.44772 11.4477 2 12 2C17.5228 2 22 6.47715 22 12C22 14.5605 21.0363 16.8984 19.4535 18.6669L19.4506 18.6701L18.25 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H16C15.4477 22 15 21.5523 15 21V16C15 15.4477 15.4477 15 16 15C16.5523 15 17 15.4477 17 16V18.4L17.9632 17.3331C17.9636 17.3326 17.964 17.3321 17.9645 17.3316C19.2311 15.9158 20 14.0489 20 12C20 7.58172 16.4183 4 12 4C11.4477 4 11 3.55228 11 3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C7.02944 21 3 16.9706 3 12C3 9.69494 3.86656 7.59227 5.29168 6L8 3M12 3C16.9706 3 21 7.02944 21 12C21 14.3051 20.1334 16.4077 18.7083 18L16 21M3 3H8M8 3V8M21 21H16M16 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.6701 2.25774C9.08005 2.62783 9.11236 3.26016 8.74227 3.67011L6.03542 6.66848C4.76888 8.08431 4 9.95117 4 12C4 16.4183 7.58172 20 12 20C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22C6.47715 22 2 17.5229 2 12C2 9.43947 2.96367 7.10162 4.54655 5.33309L4.5494 5.3299L4.54941 5.32991L7.25773 2.32991C7.62782 1.91996 8.26016 1.88765 8.6701 2.25774ZM11 3.00001C11 2.44772 11.4477 2.00001 12 2.00001C17.5228 2.00001 22 6.47716 22 12C22 14.5605 21.0363 16.8984 19.4535 18.6669L19.4506 18.6701L16.7423 21.6701C16.3722 22.0801 15.7398 22.1124 15.3299 21.7423C14.92 21.3722 14.8876 20.7399 15.2577 20.3299L17.9632 17.3331C17.9636 17.3326 17.964 17.3321 17.9645 17.3316C19.2311 15.9158 20 14.0489 20 12C20 7.58173 16.4183 4.00001 12 4.00001C11.4477 4.00001 11 3.55229 11 3.00001Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 2.44772 2.44772 2 3 2H8C8.55228 2 9 2.44772 9 3V8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8V4H3C2.44772 4 2 3.55228 2 3ZM16 15C16.5523 15 17 15.4477 17 16V20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H16C15.4477 22 15 21.5523 15 21V16C15 15.4477 15.4477 15 16 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C7.02944 21 3 16.9706 3 12C3 9.69494 3.86656 7.59227 5.29168 6L8 3M12 3C16.9706 3 21 7.02944 21 12C21 14.3051 20.1334 16.4077 18.7083 18L16 21M3 3H8M8 3V8M21 21H16M16 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RefreshCwAlt1;