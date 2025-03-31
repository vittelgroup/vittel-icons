import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Microphone: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M15 6H13M15 10H13M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V11H13C12.4477 11 12 10.5523 12 10C12 9.44772 12.4477 9 13 9H16V7H13C12.4477 7 12 6.55228 12 6C12 5.44772 12.4477 5 13 5H16C16 2.79086 14.2091 1 12 1Z" fill="currentColor"/>
<path d="M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10V12C4 16.0796 7.05369 19.446 11 19.9381V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V19.9381C16.9463 19.446 20 16.0796 20 12V10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V10Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="9" y="2" width="6" height="13" rx="3" fill="#0000CC"/>
<path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M15 6H13M15 10H13M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M6 10C6 9.44772 5.55228 9 5 9C4.44772 9 4 9.44772 4 10V12C4 16.0796 7.05369 19.446 11 19.9381V21H8C7.44772 21 7 21.4477 7 22C7 22.5523 7.44772 23 8 23H16C16.5523 23 17 22.5523 17 22C17 21.4477 16.5523 21 16 21H13V19.9381C16.9463 19.446 20 16.0796 20 12V10C20 9.44772 19.5523 9 19 9C18.4477 9 18 9.44772 18 10V12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12V10Z" fill="currentColor"/>
<path d="M12 1C9.79086 1 8 2.79086 8 5V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V11H13C12.4477 11 12 10.5523 12 10C12 9.44772 12.4477 9 13 9H16V7H13C12.4477 7 12 6.55228 12 6C12 5.44772 12.4477 5 13 5H16C16 2.79086 14.2091 1 12 1Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M15 6H13M15 10H13M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Microphone;