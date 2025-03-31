import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SignsPost: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V4M12 9V12M12 17V21M4 4H19L21 6.5L19 9H4V4ZM20 12H5L3 14.5L5 17H20V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3H19C19.3038 3 19.5911 3.13809 19.7809 3.3753L21.7809 5.8753C22.073 6.24052 22.073 6.75948 21.7809 7.12469L19.7809 9.62469C19.5911 9.86191 19.3038 10 19 10H13V11H20C20.5523 11 21 11.4477 21 12V17C21 17.5523 20.5523 18 20 18H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18H5C4.69622 18 4.4089 17.8619 4.21913 17.6247L2.21913 15.1247C1.92696 14.7595 1.92696 14.2405 2.21913 13.8753L4.21913 11.3753C4.4089 11.1381 4.69622 11 5 11H11V10H4C3.44772 10 3 9.55228 3 9V4C3 3.44772 3.44772 3 4 3H11C11 2.44772 11.4477 2 12 2ZM5.48062 13L4.28062 14.5L5.48062 16H19V13H5.48062Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M4 4H19L21 6.5L19 9H4V4Z" fill="currentColor"/>
<path d="M20 12H5L3 14.5L5 17H20V12Z" fill="currentColor"/>
</g>
<path d="M12 3V4M12 9V12M12 17V21M4 4H19L21 6.5L19 9H4V4ZM20 12H5L3 14.5L5 17H20V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3H13Z" fill="currentColor"/>
<path d="M11 10V11H13V10H11Z" fill="currentColor"/>
<path d="M13 18H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V18Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M4 3C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H19C19.3038 10 19.5911 9.86191 19.7809 9.62469L21.7809 7.12469C22.073 6.75948 22.073 6.24052 21.7809 5.8753L19.7809 3.3753C19.5911 3.13809 19.3038 3 19 3H4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 11H5C4.69622 11 4.4089 11.1381 4.21913 11.3753L2.21913 13.8753C1.92696 14.2405 1.92696 14.7595 2.21913 15.1247L4.21913 17.6247C4.4089 17.8619 4.69622 18 5 18H20C20.5523 18 21 17.5523 21 17V12C21 11.4477 20.5523 11 20 11ZM4.28062 14.5L5.48062 13H19V16H5.48062L4.28062 14.5Z" fill="currentColor"/>
</g>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V4M12 9V12M12 17V21M4 4H19L21 6.5L19 9H4V4ZM20 12H5L3 14.5L5 17H20V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SignsPost;