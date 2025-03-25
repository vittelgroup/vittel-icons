import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RefreshCcwAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 9.69494 20.1334 7.59227 18.7083 6L16 3M12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18L8 21M21 3H16M16 3V8M3 21H8M8 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 14.0488 4.76889 15.9157 6.03544 17.3316C6.0359 17.3321 6.03636 17.3326 6.03682 17.3331L7 18.4V16C7 15.4477 7.44772 15 8 15C8.55228 15 9 15.4477 9 16V21C9 21.5523 8.55228 22 8 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H5.75001L4.54654 18.6669C2.96367 16.8984 2 14.5605 2 12C2 6.47715 6.47715 2 12 2C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4ZM15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H18.25L19.4535 5.33308C21.0363 7.10161 22 9.43946 22 12C22 17.5228 17.5228 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4477 11.4477 20 12 20C16.4183 20 20 16.4183 20 12C20 9.95112 19.2311 8.08422 17.9645 6.66839C17.9641 6.66789 17.9636 6.6674 17.9632 6.66691L17 5.60001V8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V3Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 9.69494 20.1334 7.59227 18.7083 6L16 3M12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18L8 21M21 3H16M16 3V8M3 21H8M8 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.3299 2.25774C15.7398 1.88765 16.3722 1.91996 16.7423 2.32991L19.4535 5.33309C21.0363 7.10162 22 9.43947 22 12C22 17.5229 17.5228 22 12 22C11.4477 22 11 21.5523 11 21C11 20.4477 11.4477 20 12 20C16.4183 20 20 16.4183 20 12C20 9.95113 19.2311 8.08423 17.9645 6.66839C17.9641 6.6679 17.9636 6.66741 17.9632 6.66692L15.2577 3.67011C14.8876 3.26016 14.92 2.62783 15.3299 2.25774ZM12 4.00001C7.58172 4.00001 4 7.58173 4 12C4 14.0489 4.76889 15.9157 6.03544 17.3316C6.0359 17.3321 6.03636 17.3326 6.03682 17.3331L8.74227 20.3299C9.11236 20.7399 9.08005 21.3722 8.6701 21.7423C8.26016 22.1124 7.62782 22.0801 7.25773 21.6701L4.54654 18.6669C2.96367 16.8984 2 14.5605 2 12C2 6.47716 6.47715 2.00001 12 2.00001C12.5523 2.00001 13 2.44772 13 3.00001C13 3.55229 12.5523 4.00001 12 4.00001Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15 2.44772 15.4477 2 16 2H21C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H17V8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V3ZM8 15C8.55228 15 9 15.4477 9 16V21C9 21.5523 8.55228 22 8 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H7V16C7 15.4477 7.44772 15 8 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 9.69494 20.1334 7.59227 18.7083 6L16 3M12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18L8 21M21 3H16M16 3V8M3 21H8M8 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RefreshCcwAlt1;