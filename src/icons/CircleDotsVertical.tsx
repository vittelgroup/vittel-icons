import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleDotsVertical: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H12.01M12 16H12.01M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.25 16.7002C13.25 16.0098 12.6904 15.4502 12 15.4502C11.3096 15.4502 10.75 16.0098 10.75 16.7002C10.75 17.3906 11.3096 17.9502 12 17.9502C12.6904 17.9502 13.25 17.3906 13.25 16.7002ZM13.25 11.9004C13.25 11.21 12.6904 10.6504 12 10.6504C11.3096 10.6504 10.75 11.21 10.75 11.9004C10.75 12.5907 11.3096 13.1504 12 13.1504C12.6904 13.1504 13.25 12.5907 13.25 11.9004ZM12 5.9502C12.6904 5.9502 13.25 6.50984 13.25 7.2002C13.25 7.89055 12.6904 8.4502 12 8.4502C11.3096 8.4502 10.75 7.89055 10.75 7.2002C10.75 6.50984 11.3096 5.9502 12 5.9502Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M12 12H12.01M12 16H12.01M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 16.7002C13.25 16.0098 12.6904 15.4502 12 15.4502C11.3096 15.4502 10.75 16.0098 10.75 16.7002C10.75 17.3906 11.3096 17.9502 12 17.9502C12.6904 17.9502 13.25 17.3906 13.25 16.7002ZM13.25 11.9004C13.25 11.21 12.6904 10.6504 12 10.6504C11.3096 10.6504 10.75 11.21 10.75 11.9004C10.75 12.5907 11.3096 13.1504 12 13.1504C12.6904 13.1504 13.25 12.5907 13.25 11.9004ZM12 5.9502C12.6904 5.9502 13.25 6.50984 13.25 7.2002C13.25 7.89055 12.6904 8.4502 12 8.4502C11.3096 8.4502 10.75 7.89055 10.75 7.2002C10.75 6.50984 11.3096 5.9502 12 5.9502Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12H12.01M12 16H12.01M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CircleDotsVertical;