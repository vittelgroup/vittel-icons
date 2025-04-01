import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GoogleDriveLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.10714 4H14.8929M9.10714 4L3 14.2857M9.10714 4L17.7857 20M14.8929 4L21 14.2857M14.8929 4L6.21429 20M3 14.2857L6.21429 20M3 14.2857H21M6.21429 20H17.7857M17.7857 20L21 14.2857" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.10714 3C8.75424 3 8.42746 3.18601 8.24729 3.48946L2.14015 13.7752C1.95756 14.0827 1.9531 14.4643 2.12842 14.776L5.34271 20.4903C5.51983 20.8051 5.85301 21 6.21429 21H17.7857C18.147 21 18.4802 20.8051 18.6573 20.4903L21.8716 14.776C22.0469 14.4643 22.0424 14.0827 21.8599 13.7752L15.7527 3.48946C15.5725 3.18601 15.2458 3 14.8929 3H9.10714ZM10.8624 9.33333L9.06784 6.02491L4.75674 13.2857H8.71855L10.8624 9.33333ZM16.1057 19H7.89433L9.909 15.2857H14.091L16.1057 19ZM13.0062 13.2857H10.9938L12 11.4307L13.0062 13.2857ZM15.2814 13.2857L13.1376 9.33333L14.9322 6.02491L19.2433 13.2857H15.2814Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 14.2857L6.21429 20L9.31378 14.2857H3Z" fill="currentColor"/>
<path d="M14.8929 4H9.10714L12 9.33333L14.8929 4Z" fill="currentColor"/>
<path d="M17.7857 20L21 14.2857H14.6862L17.7857 20Z" fill="currentColor"/>
</g>
<path d="M9.10714 4H14.8929M9.10714 4L3 14.2857M9.10714 4L17.7857 20M14.8929 4L21 14.2857M14.8929 4L6.21429 20M3 14.2857L6.21429 20M3 14.2857H21M6.21429 20H17.7857M17.7857 20L21 14.2857" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.06696 6.0249L10.8615 9.33333L8.71768 13.2857H4.75586L9.06696 6.0249Z" fill="currentColor"/>
<path d="M7.89345 19H16.1048L14.0901 15.2857H9.90812L7.89345 19Z" fill="currentColor"/>
<path d="M13.1368 9.33333L15.2806 13.2857H19.2424L14.9313 6.0249L13.1368 9.33333Z" fill="currentColor"/>
<path d="M10.9929 13.2857H13.0053L11.9991 11.4307L10.9929 13.2857Z" fill="currentColor"/>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.10714 3C8.75424 3 8.42746 3.18601 8.24729 3.48946L2.14015 13.7752C1.95756 14.0827 1.9531 14.4643 2.12842 14.776L5.34271 20.4903C5.51983 20.8051 5.85301 21 6.21429 21H17.7857C18.147 21 18.4802 20.8051 18.6573 20.4903L21.8716 14.776C22.0469 14.4643 22.0424 14.0827 21.8599 13.7752L15.7527 3.48946C15.5725 3.18601 15.2458 3 14.8929 3H9.10714ZM7.89433 19H16.1057L14.091 15.2857H9.909L7.89433 19ZM10.8624 9.33333L9.06784 6.02491L4.75674 13.2857H8.71855L10.8624 9.33333ZM13.1376 9.33333L15.2814 13.2857H19.2433L14.9322 6.02491L13.1376 9.33333ZM13.0062 13.2857H10.9938L12 11.4307L13.0062 13.2857Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.10714 4H14.8929M9.10714 4L3 14.2857M9.10714 4L17.7857 20M14.8929 4L21 14.2857M14.8929 4L6.21429 20M3 14.2857L6.21429 20M3 14.2857H21M6.21429 20H17.7857M17.7857 20L21 14.2857" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default GoogleDriveLogo;