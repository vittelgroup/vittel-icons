import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MailboxAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 6H16.2C17.8802 6 18.7202 6 19.362 6.32698C19.9265 6.6146 20.3854 7.07354 20.673 7.63803C21 8.27976 21 9.11984 21 10.8V18H11M7 6C9.20914 6 11 7.79086 11 10V18M7 6C4.79086 6 3 7.79086 3 10V18H11M17 3H14V12M10 18V21H14V18M7 12H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 13.4477 2 14 2H17C17.5523 2 18 2.44772 18 3C18 3.55228 17.5523 4 17 4H15V5H13V3Z" fill="currentColor"/>
<path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 5V12C13 12.5523 13.4477 13 14 13C14.5523 13 15 12.5523 15 12V5L16.2413 5C17.0463 4.99999 17.7106 4.99998 18.2518 5.04419C18.8139 5.09012 19.3306 5.18868 19.816 5.43597C20.5686 5.81947 21.1805 6.43139 21.564 7.18404C21.8113 7.66937 21.9099 8.18608 21.9558 8.74817C22 9.28936 22 9.95372 22 10.7587V18C22 18.5523 21.5523 19 21 19H15V21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V19H3C2.44772 19 2 18.5523 2 18V10C2 7.23858 4.23858 5 7 5H13ZM13 19H11V20H13V19ZM10 17V10C10 8.34315 8.65685 7 7 7C5.34315 7 4 8.34315 4 10V17H10Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 10.8V18H11V10C11 7.79086 9.20914 6 7 6H16.2C17.8802 6 18.7202 6 19.362 6.32698C19.9265 6.6146 20.3854 7.07354 20.673 7.63803C21 8.27976 21 9.11984 21 10.8Z" fill="currentColor"/>
<path d="M7 6H16.2C17.8802 6 18.7202 6 19.362 6.32698C19.9265 6.6146 20.3854 7.07354 20.673 7.63803C21 8.27976 21 9.11984 21 10.8V18H11M7 6C9.20914 6 11 7.79086 11 10V18M7 6C4.79086 6 3 7.79086 3 10V18H11M17 3H14V12M10 18V21H14V18M7 12H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M18.2518 5.0442C18.8139 5.09012 19.3306 5.18868 19.816 5.43598C20.5686 5.81947 21.1805 6.43139 21.564 7.18404C21.8113 7.66938 21.9099 8.18608 21.9558 8.74818C22 9.28937 22 9.95372 22 10.7587V18C22 18.5523 21.5523 19 21 19L11 19C11.5523 19 12 18.5523 12 18V10C12 7.23858 9.76142 5 7 5H16.2413C17.0463 4.99999 17.7106 4.99998 18.2518 5.0442Z" fill="currentColor"/>
<path d="M13 3C13 2.44772 13.4477 2 14 2H17C17.5523 2 18 2.44772 18 3C18 3.55228 17.5523 4 17 4H15V12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 21C15 21.5523 14.5523 22 14 22H10C9.44772 22 9 21.5523 9 21V19H3C2.44772 19 2 18.5523 2 18V10C2 7.23858 4.23858 5 7 5C9.76142 5 12 7.23858 12 10V18C12 18.5523 11.5523 19 11 19V20H13V19H15V21ZM8 11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10C7.55228 10 8 10.4477 8 11Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 6H16.2C17.8802 6 18.7202 6 19.362 6.32698C19.9265 6.6146 20.3854 7.07354 20.673 7.63803C21 8.27976 21 9.11984 21 10.8V18H11M7 6C9.20914 6 11 7.79086 11 10V18M7 6C4.79086 6 3 7.79086 3 10V18H11M17 3H14V12M10 18V21H14V18M7 12H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MailboxAlt;