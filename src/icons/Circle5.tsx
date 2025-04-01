import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle5: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 15C9 16.1046 9.89544 17 11 17H12C13.6569 17 15 15.6569 15 14C15 12.3432 13.6569 11 12 11H9L11 7H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 6C10.6212 6 10.275 6.214 10.1056 6.55279L8.10557 10.5528C7.95058 10.8628 7.96714 11.2309 8.14935 11.5258C8.33156 11.8206 8.65342 12 9 12H12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16H11C10.4477 16 10 15.5523 10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15C8 16.6568 9.34315 18 11 18H12C14.2091 18 16 16.2091 16 14C16 11.7909 14.2091 10 12 10H10.618L11.618 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M9 11L8.10557 10.5528C7.95058 10.8628 7.96714 11.2309 8.14935 11.5258C8.33156 11.8206 8.65342 12 9 12V11ZM10 15C10 14.4477 9.55228 14 9 14C8.44772 14 8 14.4477 8 15H10ZM11 7V6C10.6212 6 10.275 6.214 10.1056 6.55279L11 7ZM15 8C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6V8ZM12 16H11V18H12V16ZM9 12H12V10H9V12ZM11 16C10.4477 16 10 15.5523 10 15H8C8 16.6568 9.34315 18 11 18V16ZM14 14C14 15.1046 13.1046 16 12 16V18C14.2091 18 16 16.2091 16 14H14ZM16 14C16 11.7909 14.2091 10 12 10V12C13.1046 12 14 12.8954 14 14H16ZM9.89443 11.4472L11.8944 7.44721L10.1056 6.55279L8.10557 10.5528L9.89443 11.4472ZM11 8H15V6H11V8ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z" fill="currentColor"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1056 6.55279C10.275 6.214 10.6212 6 11 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H11.618L10.618 10H12C14.2091 10 16 11.7909 16 14C16 16.2091 14.2091 18 12 18H11C9.34315 18 8 16.6568 8 15C8 14.4477 8.44772 14 9 14C9.55229 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H12C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12H9C8.65342 12 8.33156 11.8206 8.14935 11.5258C7.96714 11.2309 7.95058 10.8628 8.10557 10.5528L10.1056 6.55279Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 15C9 16.1046 9.89544 17 11 17H12C13.6569 17 15 15.6569 15 14C15 12.3432 13.6569 11 12 11H9L11 7H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Circle5;