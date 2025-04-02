import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon5: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 18C6 19.6569 7.34316 21 9.00003 21H13.5C15.9853 21 18 18.9853 18 16.5C18 14.0147 15.9853 12 13.5 12H6L9 3H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05132 2.68377C8.18744 2.27543 8.56958 2 9.00001 2H18C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4H9.72077L7.38743 11H13.5C16.5376 11 19 13.4625 19 16.5C19 19.5376 16.5376 22 13.5 22H9.00004C6.79088 22 5.00001 20.2092 5.00001 18C5.00001 17.4477 5.44772 17 6.00001 17C6.55229 17 7.00001 17.4477 7.00001 18C7.00001 19.1046 7.89545 20 9.00004 20H13.5C15.433 20 17 18.433 17 16.5C17 14.567 15.433 13 13.5 13H6.00001C5.67856 13 5.37672 12.8455 5.18877 12.5847C5.00081 12.324 4.94967 11.9887 5.05132 11.6838L8.05132 2.68377Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 18C6 19.6569 7.34316 21 9.00003 21H13.5C15.9853 21 18 18.9853 18 16.5C18 14.0147 15.9853 12 13.5 12H6L9 3H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.05132 2.68377C8.18744 2.27543 8.56958 2 9.00001 2H18C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4H9.72077L7.38743 11H13.5C16.5376 11 19 13.4625 19 16.5C19 19.5376 16.5376 22 13.5 22H9.00004C6.79088 22 5.00001 20.2092 5.00001 18C5.00001 17.4477 5.44772 17 6.00001 17C6.55229 17 7.00001 17.4477 7.00001 18C7.00001 19.1046 7.89545 20 9.00004 20H13.5C15.433 20 17 18.433 17 16.5C17 14.567 15.433 13 13.5 13H6.00001C5.67856 13 5.37672 12.8455 5.18877 12.5847C5.00081 12.324 4.94967 11.9887 5.05132 11.6838L8.05132 2.68377Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 18C6 19.6569 7.34316 21 9.00003 21H13.5C15.9853 21 18 18.9853 18 16.5C18 14.0147 15.9853 12 13.5 12H6L9 3H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default 5;