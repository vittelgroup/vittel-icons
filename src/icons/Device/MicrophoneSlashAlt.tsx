import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MicrophoneSlashAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 10.4V7.00003C16 4.79089 14.2091 3.00003 12 3.00003C11.0406 3.00003 10.1601 3.3378 9.47086 3.90092M4 12V13C4 17.4183 7.58172 21 12 21C14.4653 21 16.6701 19.8849 18.1376 18.1316M3 3L21 21M12 17C9.79086 17 8 15.2092 8 13V8.00003L15.2815 15.288C14.5585 16.323 13.3583 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.09325 3.87923L17 12.786V7C17 4.23858 14.7614 2 12 2C10.4191 2 9.00949 2.73373 8.09325 3.87923Z" fill="currentColor"/>
<path d="M7 8.41421V13C7 15.7614 9.23858 18 12 18C13.2753 18 14.4391 17.5225 15.3224 16.7366L16.7383 18.1525C15.4917 19.2996 13.8276 20 12 20C8.13401 20 5 16.866 5 13V12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12V13C3 17.9706 7.02944 22 12 22C14.3799 22 16.5441 21.0762 18.1535 19.5677L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L7 8.41421Z" fill="currentColor"/>
<path d="M20.4144 16.2003L18.8159 14.6019C18.9363 14.0874 19 13.5511 19 13V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V13C21 14.1272 20.7928 15.206 20.4144 16.2003Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="8" y="3" width="8" height="14" rx="4" fill="#0000CC"/>
<path d="M16 10.4V7.00003C16 4.79089 14.2091 3.00003 12 3.00003C11.0406 3.00003 10.1601 3.3378 9.47086 3.90092M4 12V13C4 17.4183 7.58172 21 12 21C14.4653 21 16.6701 19.8849 18.1376 18.1316M3 3L21 21M12 17C9.79086 17 8 15.2092 8 13V8.00003L15.2815 15.288C14.5585 16.323 13.3583 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 12.786L8.09325 3.87923C9.00949 2.73373 10.4191 2 12 2C14.7614 2 17 4.23858 17 7V12.786Z" fill="currentColor"/>
<path d="M7 13V8.41421L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L15.3224 16.7366C14.4391 17.5225 13.2753 18 12 18C9.23858 18 7 15.7614 7 13Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M16.7383 18.1525C15.4917 19.2996 13.8276 20 12 20C8.13401 20 5 16.866 5 13V12C5 11.4477 4.55228 11 4 11C3.44772 11 3 11.4477 3 12V13C3 17.9706 7.02944 22 12 22C14.3799 22 16.5441 21.0762 18.1535 19.5677L16.7383 18.1525Z" fill="currentColor"/>
<path d="M18.8159 14.6019L20.4144 16.2003C20.7928 15.206 21 14.1272 21 13V12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12V13C19 13.5511 18.9363 14.0874 18.8159 14.6019Z" fill="currentColor"/>
</g>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 10.4V7.00003C16 4.79089 14.2091 3.00003 12 3.00003C11.0406 3.00003 10.1601 3.3378 9.47086 3.90092M4 12V13C4 17.4183 7.58172 21 12 21C14.4653 21 16.6701 19.8849 18.1376 18.1316M3 3L21 21M12 17C9.79086 17 8 15.2092 8 13V8.00003L15.2815 15.288C14.5585 16.323 13.3583 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MicrophoneSlashAlt;