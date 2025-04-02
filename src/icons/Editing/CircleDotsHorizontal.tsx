import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleDotsHorizontal: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H12.01M16 12H16.01M8 12H8.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.25 13.2002C7.94036 13.2002 8.5 12.6406 8.5 11.9502C8.5 11.2598 7.94036 10.7002 7.25 10.7002C6.55964 10.7002 6 11.2598 6 11.9502C6 12.6406 6.55964 13.2002 7.25 13.2002ZM12.0498 13.2002C12.7402 13.2002 13.2998 12.6406 13.2998 11.9502C13.2998 11.2598 12.7402 10.7002 12.0498 10.7002C11.3594 10.7002 10.7998 11.2598 10.7998 11.9502C10.7998 12.6406 11.3594 13.2002 12.0498 13.2002ZM18 11.9502C18 12.6406 17.4404 13.2002 16.75 13.2002C16.0596 13.2002 15.5 12.6406 15.5 11.9502C15.5 11.2598 16.0596 10.7002 16.75 10.7002C17.4404 10.7002 18 11.2598 18 11.9502Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M12 12H12.01M16 12H16.01M8 12H8.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 13.2002C7.94036 13.2002 8.5 12.6406 8.5 11.9502C8.5 11.2598 7.94036 10.7002 7.25 10.7002C6.55964 10.7002 6 11.2598 6 11.9502C6 12.6406 6.55964 13.2002 7.25 13.2002ZM12.0498 13.2002C12.7402 13.2002 13.2998 12.6406 13.2998 11.9502C13.2998 11.2598 12.7402 10.7002 12.0498 10.7002C11.3594 10.7002 10.7998 11.2598 10.7998 11.9502C10.7998 12.6406 11.3594 13.2002 12.0498 13.2002ZM18 11.9502C18 12.6406 17.4404 13.2002 16.75 13.2002C16.0596 13.2002 15.5 12.6406 15.5 11.9502C15.5 11.2598 16.0596 10.7002 16.75 10.7002C17.4404 10.7002 18 11.2598 18 11.9502Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H12.01M16 12H16.01M8 12H8.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CircleDotsHorizontal;