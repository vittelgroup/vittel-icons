import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GooglePlayLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21V3M4 21L20 12L4 3M4 21L13.9987 8.62427M4 3L13.9987 15.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.51012 2.13965C4.60978 2.19871 4.70079 2.27622 4.77787 2.37161L11.2716 10.4086L13.2209 7.9959L13.7727 7.34983L4.51012 2.13965Z" fill="currentColor"/>
<path d="M15.5 8.32146L14.7766 9.2528L12.5572 11.9998L14.7766 14.7466L15.5 15.6786L20.4903 12.8716C20.8051 12.6945 21 12.3613 21 12.0001C21 11.6388 20.8051 11.3056 20.4903 11.1285L15.5 8.32146Z" fill="currentColor"/>
<path d="M13.7571 16.659L13.2209 16.0036L11.2716 13.591L4.77789 21.6285C4.70135 21.7233 4.61109 21.8003 4.51226 21.8593L13.7571 16.659Z" fill="currentColor"/>
<path d="M3 21C3 20.7793 3.0727 20.5567 3.22218 20.3716L9.98599 11.9998L3.2222 3.62856C3.07273 3.44356 3.00003 3.22147 3 3.00082V21Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 3V21L20 12L4 3Z" fill="currentColor"/>
<path d="M4 21V3M4 21L20 12L4 3M4 21L13.9987 8.62427M4 3L13.9987 15.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M4.51012 2.13965C4.60978 2.19871 4.70079 2.27622 4.77787 2.37161L11.2716 10.4086L13.2209 7.9959L13.7727 7.34983L4.51012 2.13965Z" fill="currentColor"/>
<path d="M15.5 8.32146L14.7766 9.2528L12.5572 11.9998L14.7766 14.7466L15.5 15.6786L20.4903 12.8716C20.8051 12.6945 21 12.3613 21 12.0001C21 11.6388 20.8051 11.3056 20.4903 11.1285L15.5 8.32146Z" fill="currentColor"/>
<path d="M13.7571 16.659L13.2209 16.0036L11.2716 13.591L4.77789 21.6285C4.70135 21.7233 4.61109 21.8003 4.51226 21.8593L13.7571 16.659Z" fill="currentColor"/>
<path d="M3 21C3 20.7793 3.0727 20.5567 3.22218 20.3716L9.98599 11.9998L3.2222 3.62856C3.07273 3.44356 3.00003 3.22147 3 3.00082V21Z" fill="currentColor"/>
</g>
<path d="M4.77787 2.37159L11.2716 10.4086L13.2209 7.99588L13.7727 7.34981L15.5 8.32144L14.7766 9.25278L12.5572 11.9998L14.7766 14.7466L15.5 15.6786L13.7571 16.659L13.2209 16.0035L11.2716 13.591L4.77789 21.6285C4.4308 22.0581 3.80118 22.1249 3.37159 21.7779C2.94199 21.4308 2.8751 20.8012 3.22218 20.3716L9.98599 11.9998L3.2222 3.62854C2.87511 3.19895 2.94198 2.56927 3.37156 2.22218C3.80115 1.87509 4.43077 1.94201 4.77787 2.37159Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 21V3M4 21L20 12L4 3M4 21L13.9987 8.62427M4 3L13.9987 15.375" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default GooglePlayLogo;