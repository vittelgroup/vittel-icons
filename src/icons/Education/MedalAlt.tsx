import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MedalAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 11L8 3H4L8.5058 12.4622M12 11L16 3H20L15.4942 12.4622M12 11C13.344 11 14.5848 11.5635 15.4942 12.4622M12 11C10.656 11 9.41518 11.5635 8.5058 12.4622M15.4942 12.4622C16.4182 13.3753 17 14.6344 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 14.6344 7.58179 13.3753 8.5058 12.4622" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 2C3.65684 2 3.33765 2.17595 3.15444 2.46611C2.97124 2.75628 2.94961 3.12011 3.09714 3.42993L6.84639 11.3033C6.92878 11.2132 7.01335 11.1252 7.1 11.0396C8.35331 9.80107 10.0884 9 12 9C13.9116 9 15.6467 9.80107 16.9 11.0396C16.9866 11.1252 17.0712 11.2132 17.1536 11.3033L20.9029 3.42993C21.0504 3.12011 21.0288 2.75628 20.8456 2.46611C20.6624 2.17595 20.3432 2 20 2H16C15.6212 2 15.275 2.214 15.1056 2.55279L12 8.76393L8.89443 2.55279C8.72504 2.214 8.37877 2 8 2H4Z" fill="currentColor"/>
<path d="M12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16C6 19.3137 8.68629 22 12 22Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="16" r="5" fill="#0000CC"/>
<path d="M12 11L8 3H4L8.5058 12.4622M12 11L16 3H20L15.4942 12.4622M12 11C13.344 11 14.5848 11.5635 15.4942 12.4622M12 11C10.656 11 9.41518 11.5635 8.5058 12.4622M15.4942 12.4622C16.4182 13.3753 17 14.6344 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 14.6344 7.58179 13.3753 8.5058 12.4622" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M3.15444 2.46611C3.33765 2.17595 3.65684 2 4 2H8C8.37877 2 8.72504 2.214 8.89443 2.55279L12 8.76393L15.1056 2.55279C15.275 2.214 15.6212 2 16 2H20C20.3432 2 20.6624 2.17595 20.8456 2.46611C21.0288 2.75628 21.0504 3.12011 20.9029 3.42993L17.1536 11.3033C17.0712 11.2132 16.9866 11.1252 16.9 11.0396C15.6467 9.80107 13.9116 9 12 9C10.0884 9 8.35331 9.80107 7.1 11.0396C7.01335 11.1252 6.92878 11.2132 6.84639 11.3033L3.09714 3.42993C2.94961 3.12011 2.97124 2.75628 3.15444 2.46611Z" fill="currentColor"/>
<path d="M18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 11L8 3H4L8.5058 12.4622M12 11L16 3H20L15.4942 12.4622M12 11C13.344 11 14.5848 11.5635 15.4942 12.4622M12 11C10.656 11 9.41518 11.5635 8.5058 12.4622M15.4942 12.4622C16.4182 13.3753 17 14.6344 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 14.6344 7.58179 13.3753 8.5058 12.4622" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MedalAlt;