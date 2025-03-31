import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CirclePlug: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8V11M14 8V11M12 21V16M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8 11H16V12.8C16 13.9201 16 14.4802 15.782 14.908C15.5903 15.2843 15.2843 15.5903 14.908 15.782C14.4802 16 13.9201 16 12.8 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.1853 18.0533 21.4489 13 21.9506C12.6711 21.9833 12.3375 22 12 22C11.6625 22 11.3289 21.9833 11 21.9506C5.94668 21.4489 2 17.1853 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 19.9381V17H14C15.6569 17 17 15.6569 17 14V11C17 10.4477 16.5523 10 16 10H15V8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8V10H11V8C11 7.44772 10.5523 7 10 7C9.44771 7 9 7.44772 9 8V10H8C7.44772 10 7 10.4477 7 11V14C7 15.6569 8.34315 17 10 17H11V19.9381C11.3276 19.979 11.6613 20 12 20C12.3387 20 12.6724 19.979 13 19.9381Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16 12.8V11H8V12.8C8 13.9201 8 14.4802 8.21799 14.908C8.40973 15.2843 8.71569 15.5903 9.09202 15.782C9.51984 16 10.0799 16 11.2 16H12.8C13.9201 16 14.4802 16 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C16 14.4802 16 13.9201 16 12.8Z" fill="currentColor"/>
<path d="M10 8V11M14 8V11M12 21V16M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8 11H16V12.8C16 13.9201 16 14.4802 15.782 14.908C15.5903 15.2843 15.2843 15.5903 14.908 15.782C14.4802 16 13.9201 16 12.8 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 19.9381V17H14C15.6569 17 17 15.6569 17 14V11C17 10.4477 16.5523 10 16 10H15V8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8V10H11V8C11 7.44772 10.5523 7 10 7C9.44771 7 9 7.44772 9 8V10H8C7.44772 10 7 10.4477 7 11V14C7 15.6569 8.34315 17 10 17H11V19.9381C11.3276 19.979 11.6613 20 12 20C12.3387 20 12.6724 19.979 13 19.9381Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8V11M14 8V11M12 21V16M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8 11H16V12.8C16 13.9201 16 14.4802 15.782 14.908C15.5903 15.2843 15.2843 15.5903 14.908 15.782C14.4802 16 13.9201 16 12.8 16H11.2C10.0799 16 9.51984 16 9.09202 15.782C8.71569 15.5903 8.40973 15.2843 8.21799 14.908C8 14.4802 8 13.9201 8 12.8V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CirclePlug;