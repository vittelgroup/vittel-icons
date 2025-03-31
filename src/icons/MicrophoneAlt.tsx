import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MicrophoneAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13V7ZM4 11C4.55228 11 5 11.4477 5 12V13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V12C3 11.4477 3.44772 11 4 11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="8" y="3" width="8" height="14" rx="4" fill="#0000CC"/>
<path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4.55228 11 5 11.4477 5 12V13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V12C3 11.4477 3.44772 11 4 11Z" fill="currentColor"/>
<path d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13V7Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default MicrophoneAlt;