import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WatchAlt2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.0102 7.5369L15 3H9.00003L7.99805 7.52953M15.9976 16.4744L14.9996 21H8.9996L8.00651 16.478M12 9.5V12L14 13.5M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00003 2C8.53097 2 8.12494 2.32602 8.02363 2.78401L7.08824 7.01255C5.79918 8.28217 5 10.0478 5 12C5 13.9563 5.80251 15.7252 7.09629 16.9954L8.02288 21.2145C8.12362 21.6732 8.52997 22 8.9996 22H14.9996C15.4689 22 15.8751 21.6736 15.9761 21.2153L16.9076 16.9916C18.1991 15.7216 19 13.9544 19 12C19 10.0517 18.2041 8.28935 16.9196 7.02031L15.9761 2.78267C15.8743 2.32533 15.4686 2 15 2H9.00003ZM9.80382 20L9.48172 18.5333C10.2632 18.8348 11.1123 19 12 19C12.8882 19 13.7378 18.8346 14.5196 18.5328L14.1961 20H9.80382ZM12 5C12.8904 5 13.742 5.16624 14.5253 5.46938L14.1982 4H9.80299L9.47826 5.46799C10.2607 5.16573 11.111 5 12 5ZM13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5V12C11 12.3148 11.1482 12.6111 11.4 12.8L13.4 14.3C13.8418 14.6314 14.4686 14.5418 14.8 14.1C15.1314 13.6582 15.0418 13.0314 14.6 12.7L13 11.5V9.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="6" fill="#0000CC"/>
<path d="M16.0102 7.5369L15 3H9.00003L7.99805 7.52953M15.9976 16.4744L14.9996 21H8.9996L8.00651 16.478M12 9.5V12L14 13.5M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8.99968 2C8.53062 2 8.1246 2.32602 8.02329 2.78401L7.08789 7.01255C7.08789 7.01252 7.0879 7.01258 7.08789 7.01255C8.35154 5.76792 10.086 5 11.9998 5C13.9174 5 15.655 5.77111 16.9192 7.02018L15.9758 2.78267C15.874 2.32533 15.4682 2 14.9997 2H8.99968Z" fill="currentColor"/>
<path d="M7.09596 16.9953C8.35891 18.2352 10.09 19 11.9998 19C13.9113 19 15.6439 18.2338 16.9072 16.9917L15.9758 21.2153C15.8747 21.6736 15.4686 22 14.9993 22H8.99926C8.52963 22 8.12327 21.6732 8.02253 21.2145L7.09596 16.9953C7.09597 16.9952 7.09595 16.9953 7.09596 16.9953Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM13 9.5C13 8.94771 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94771 11 9.5V12C11 12.3148 11.1482 12.6111 11.4 12.8L13.4 14.3C13.8418 14.6314 14.4686 14.5418 14.8 14.1C15.1314 13.6582 15.0418 13.0314 14.6 12.7L13 11.5V9.5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.0102 7.5369L15 3H9.00003L7.99805 7.52953M15.9976 16.4744L14.9996 21H8.9996L8.00651 16.478M12 9.5V12L14 13.5M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default WatchAlt2;