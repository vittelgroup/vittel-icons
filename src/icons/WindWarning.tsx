import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WindWarning: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.0005 16C10.1647 16.6279 9.12582 17 8 17C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7C10.0503 7 11.8124 8.2341 12.584 10M8 10V11M8 14H8.01M16 10H18.5C19.8807 10 21 8.88071 21 7.5C21 6.11929 19.8807 5 18.5 5H17M11 13H18C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 4C16.4477 4 16 4.44772 16 5C16 5.55228 16.4477 6 17 6H18.5C19.3284 6 20 6.67157 20 7.5C20 8.32843 19.3284 9 18.5 9H16C15.4477 9 15 9.44772 15 10C15 10.5523 15.4477 11 16 11H18.5C20.433 11 22 9.433 22 7.5C22 5.567 20.433 4 18.5 4H17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5078 15.9598C11.4082 17.2106 9.79631 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C10.2465 6 12.2047 7.23466 13.2329 9.06243C13.0842 9.34208 13 9.6612 13 10C11.3431 10 10 11.3431 10 13C10 14.4892 11.0851 15.725 12.5078 15.9598ZM9 9C9 8.44771 8.55229 8 8 8C7.44772 8 7 8.44771 7 9V12C7 12.5523 7.44772 13 8 13C8.55229 13 9 12.5523 9 12V9ZM8 16C8.55229 16 9 15.5523 9 15C9 14.4477 8.55229 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16Z" fill="currentColor"/>
<path d="M12 13C12 12.4477 12.4477 12 13 12H18C20.2091 12 22 13.7909 22 16C22 18.2091 20.2091 20 18 20H16C15.4477 20 15 19.5523 15 19C15 18.4477 15.4477 18 16 18H18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14H13C12.4477 14 12 13.5523 12 13Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="8" cy="12" r="5" fill="#0000CC"/>
<path d="M11.0005 16C10.1647 16.6279 9.12582 17 8 17C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7C10.0503 7 11.8124 8.2341 12.584 10M8 10V11M8 14H8.01M16 10H18.5C19.8807 10 21 8.88071 21 7.5C21 6.11929 19.8807 5 18.5 5H17M11 13H18C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.5078 15.9598C11.4082 17.2106 9.79631 18 8 18C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6C10.2465 6 12.2047 7.23466 13.2329 9.06243C13.0842 9.34208 13 9.6612 13 10C11.3431 10 10 11.3431 10 13C10 14.4892 11.0851 15.725 12.5078 15.9598Z" fill="currentColor"/>
<path d="M16 5C16 4.44772 16.4477 4 17 4H18.5C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H16C15.4477 11 15 10.5523 15 10C15 9.44772 15.4477 9 16 9H18.5C19.3284 9 20 8.32843 20 7.5C20 6.67157 19.3284 6 18.5 6H17C16.4477 6 16 5.55228 16 5Z" fill="currentColor"/>
<path d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H18C19.1046 14 20 14.8954 20 16C20 17.1046 19.1046 18 18 18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H18C20.2091 20 22 18.2091 22 16C22 13.7909 20.2091 12 18 12H13Z" fill="currentColor"/>
<path d="M8 8C8.55229 8 9 8.44771 9 9V12C9 12.5523 8.55229 13 8 13C7.44772 13 7 12.5523 7 12V9C7 8.44771 7.44772 8 8 8Z" fill="currentColor"/>
<path d="M9 15C9 15.5523 8.55229 16 8 16C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14C8.55229 14 9 14.4477 9 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.0005 16C10.1647 16.6279 9.12582 17 8 17C5.23858 17 3 14.7614 3 12C3 9.23858 5.23858 7 8 7C10.0503 7 11.8124 8.2341 12.584 10M8 10V11M8 14H8.01M16 10H18.5C19.8807 10 21 8.88071 21 7.5C21 6.11929 19.8807 5 18.5 5H17M11 13H18C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default WindWarning;