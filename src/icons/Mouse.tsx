import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Mouse: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.3631 21C10.4012 21 8 18.5989 8 15.6369V5.67924C8 3.81038 9.7563 2.4391 11.5694 2.89236L16.6422 4.16057C18.6156 4.65392 20 6.42702 20 8.46115V14.3631C20 18.0286 17.0286 21 13.3631 21ZM13.3631 21H13C8.02944 21 4 17.8223 4 13.9024C4 11.4416 5.58803 9.27327 8 8.00002M14 8.00002V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5.67924C7 3.15981 9.36769 1.31117 11.8119 1.92222L16.8847 3.19043C19.3033 3.79508 21 5.96816 21 8.46115V14.3632C21 18.5809 17.5809 22 13.3631 22H13C12.9191 22 12.8405 21.9904 12.7652 21.9723C9.53131 21.6709 7 18.9495 7 15.6369V5.67924ZM15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V8Z" fill="currentColor"/>
<path d="M6 8.11279C4.1866 9.55104 3 11.5817 3 13.9024C3 17.1524 5.27163 19.7932 8.43074 21.1039C6.93809 19.7564 6 17.8062 6 15.6369V8.11279Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M16.6422 4.16057L11.5694 2.89236C9.7563 2.4391 8 3.81038 8 5.67924V8.00002C5.58803 9.27327 4 11.4416 4 13.9024C4 17.8223 8.02944 21 13 21H13.3631C17.0286 21 20 18.0286 20 14.3631V8.46115C20 6.42702 18.6156 4.65392 16.6422 4.16057Z" fill="currentColor"/>
<path d="M13.3631 21C10.4012 21 8 18.5989 8 15.6369V5.67924C8 3.81038 9.7563 2.4391 11.5694 2.89236L16.6422 4.16057C18.6156 4.65392 20 6.42702 20 8.46115V14.3631C20 18.0286 17.0286 21 13.3631 21ZM13.3631 21H13C8.02944 21 4 17.8223 4 13.9024C4 11.4416 5.58803 9.27327 8 8.00002M14 8.00002V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8119 1.92222C9.36769 1.31117 7 3.15981 7 5.67924V15.6369C7 18.9495 9.53132 21.6709 12.7652 21.9723C12.8405 21.9904 12.9191 22 13 22H13.3631C17.5809 22 21 18.5809 21 14.3632V8.46115C21 5.96816 19.3033 3.79508 16.8847 3.19043L11.8119 1.92222ZM15 8C15 7.44772 14.5523 7 14 7C13.4477 7 13 7.44772 13 8V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V8Z" fill="currentColor"/>
<path d="M14 7C14.5523 7 15 7.44772 15 8V10C15 10.5523 14.5523 11 14 11C13.4477 11 13 10.5523 13 10V8C13 7.44772 13.4477 7 14 7Z" fill="currentColor"/>
<path d="M7 15.6369V7.41779C4.6352 8.85355 3 11.1781 3 13.9024C3 18.5807 7.70716 21.9969 12.9927 22C12.9144 21.9994 12.8382 21.9899 12.7652 21.9723C9.53131 21.6709 7 18.9495 7 15.6369Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.3631 21C10.4012 21 8 18.5989 8 15.6369V5.67924C8 3.81038 9.7563 2.4391 11.5694 2.89236L16.6422 4.16057C18.6156 4.65392 20 6.42702 20 8.46115V14.3631C20 18.0286 17.0286 21 13.3631 21ZM13.3631 21H13C8.02944 21 4 17.8223 4 13.9024C4 11.4416 5.58803 9.27327 8 8.00002M14 8.00002V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Mouse;