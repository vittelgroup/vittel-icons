import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LiraSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 13C19 17.4183 14.5228 21 9 21V3M15 10L5 12M15 6L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00019 2C9.55248 2 10.0002 2.44772 10.0002 3V5.9802L14.8041 5.01942C15.3456 4.91111 15.8725 5.26232 15.9808 5.80388C16.0891 6.34544 15.7379 6.87227 15.1963 6.98058L10.0002 8.0198V9.9802L14.8041 9.01942C15.3456 8.91111 15.8725 9.26232 15.9808 9.80388C16.0891 10.3454 15.7379 10.8723 15.1963 10.9806L10.0002 12.0198V19.9581C14.6726 19.5629 18.0002 16.4293 18.0002 13C18.0002 12.4477 18.4479 12 19.0002 12C19.5525 12 20.0002 12.4477 20.0002 13C20.0002 18.1673 14.8556 22 9.00019 22C8.44791 22 8.00019 21.5523 8.00019 21V12.4198L5.19631 12.9806C4.65475 13.0889 4.12792 12.7377 4.01961 12.1961C3.9113 11.6546 4.26252 11.1277 4.80408 11.0194L8.00019 10.3802V8.4198L5.19631 8.98058C4.65475 9.08889 4.12792 8.73768 4.01961 8.19612C3.9113 7.65456 4.26252 7.12773 4.80408 7.01942L8.00019 6.3802V3C8.00019 2.44772 8.44791 2 9.00019 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 13C19 17.4183 14.5228 21 9 21V3M15 10L5 12M15 6L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.9808 5.80383C16.0891 6.34539 15.7379 6.87222 15.1963 6.98053L5.19631 8.98053C4.65475 9.08884 4.12792 8.73762 4.01961 8.19606C3.9113 7.65451 4.26252 7.12768 4.80408 7.01937L14.8041 5.01937C15.3456 4.91106 15.8725 5.26227 15.9808 5.80383ZM15.9808 9.80383C16.0891 10.3454 15.7379 10.8722 15.1963 10.9805L5.19631 12.9805C4.65475 13.0888 4.12792 12.7376 4.01961 12.1961C3.9113 11.6545 4.26252 11.1277 4.80408 11.0194L14.8041 9.01937C15.3456 8.91106 15.8725 9.26227 15.9808 9.80383Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C9.55228 2 10 2.44772 10 3V19.9581C14.6724 19.5629 18 16.4293 18 13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13C20 18.1673 14.8554 22 9 22C8.44772 22 8 21.5523 8 21V3C8 2.44772 8.44772 2 9 2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 13C19 17.4183 14.5228 21 9 21V3M15 10L5 12M15 6L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default LiraSign;