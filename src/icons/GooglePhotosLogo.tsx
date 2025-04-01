import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GooglePhotosLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12C12 9.51472 9.98528 7.5 7.5 7.5C5.01472 7.5 3 9.51472 3 12H12ZM12 12C12 14.4853 14.0147 16.5 16.5 16.5C18.9853 16.5 21 14.4853 21 12H12ZM12 12C9.51472 12 7.5 14.0147 7.5 16.5C7.5 18.9853 9.51472 21 12 21V12ZM12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3V12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V7.75716C10.0491 6.97182 8.82963 6.5 7.5 6.5C4.46243 6.5 2 8.96243 2 12C2 12.5523 2.44772 13 3 13H7.75716C6.97182 13.9509 6.5 15.1704 6.5 16.5C6.5 19.5376 8.96243 22 12 22C12.5523 22 13 21.5523 13 21V16.2428C13.9509 17.0282 15.1704 17.5 16.5 17.5C19.5376 17.5 22 15.0376 22 12C22 11.4477 21.5523 11 21 11H16.2428C17.0282 10.0491 17.5 8.82963 17.5 7.5C17.5 4.46243 15.0376 2 12 2ZM7.5 8.5C9.08551 8.5 10.4248 9.55426 10.8551 11H4.14494C4.57521 9.55426 5.91449 8.5 7.5 8.5ZM16.5 15.5C18.0855 15.5 19.4248 14.4457 19.8551 13H13.1449C13.5752 14.4457 14.9145 15.5 16.5 15.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M7.5 16.5C7.5 18.9853 9.51472 21 12 21V12C9.51472 12 7.5 14.0147 7.5 16.5Z" fill="currentColor"/>
<path d="M16.5 7.5C16.5 5.01472 14.4853 3 12 3V12C14.4853 12 16.5 9.98528 16.5 7.5Z" fill="currentColor"/>
</g>
<path d="M12 12C12 9.51472 9.98528 7.5 7.5 7.5C5.01472 7.5 3 9.51472 3 12H12ZM12 12C12 14.4853 14.0147 16.5 16.5 16.5C18.9853 16.5 21 14.4853 21 12H12ZM12 12C9.51472 12 7.5 14.0147 7.5 16.5C7.5 18.9853 9.51472 21 12 21V12ZM12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3V12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11 11.0907V3C11 2.44771 11.4477 2 12 2C15.0376 2 17.5 4.46243 17.5 7.5C17.5 10.1961 15.5601 12.4391 13 12.9093V21C13 21.5523 12.5523 22 12 22C8.96243 22 6.5 19.5376 6.5 16.5C6.5 13.8039 8.43988 11.5609 11 11.0907Z" fill="currentColor"/>
<path d="M7.5 6.5C4.46243 6.5 2 8.96243 2 12C2 12.5523 2.44772 13 3 13H11.0907C11.5609 15.5601 13.8039 17.5 16.5 17.5C19.5376 17.5 22 15.0376 22 12C22 11.4477 21.5523 11 21 11H12.9093C12.4391 8.43988 10.1961 6.5 7.5 6.5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12C12 9.51472 9.98528 7.5 7.5 7.5C5.01472 7.5 3 9.51472 3 12H12ZM12 12C12 14.4853 14.0147 16.5 16.5 16.5C18.9853 16.5 21 14.4853 21 12H12ZM12 12C9.51472 12 7.5 14.0147 7.5 16.5C7.5 18.9853 9.51472 21 12 21V12ZM12 12C14.4853 12 16.5 9.98528 16.5 7.5C16.5 5.01472 14.4853 3 12 3V12Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default GooglePhotosLogo;