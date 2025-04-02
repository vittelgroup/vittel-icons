import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MartiniGlass: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 14L5 3L19 3L12 14ZM12 14L12 21M8 21H16M7.54545 7H16.4545" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.12339 2.51879C4.29903 2.19885 4.63502 2 5 2L19 2C19.365 2 19.701 2.19885 19.8766 2.51879C20.0522 2.83874 20.0396 3.22896 19.8437 3.53688L13 14.2912L13 20H16C16.5523 20 17 20.4477 17 21C17 21.5523 16.5523 22 16 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11L11 14.2912L4.15634 3.53688C3.96039 3.22895 3.94776 2.83874 4.12339 2.51879ZM8.0944 6H15.9056L17.1783 4L6.82167 4L8.0944 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M16.454 7H7.54492L11.9995 14L16.454 7Z" fill="currentColor"/>
<path d="M12 14L5 3L19 3L12 14ZM12 14L12 21M8 21H16M7.54545 7H16.4545" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 2C4.63502 2 4.29903 2.19885 4.12339 2.51879C3.94776 2.83874 3.96039 3.22895 4.15634 3.53688L11 14.2912L11 20H8C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22H16C16.5523 22 17 21.5523 17 21C17 20.4477 16.5523 20 16 20H13L13 14.2912L19.8437 3.53688C20.0396 3.22896 20.0522 2.83874 19.8766 2.51879C19.701 2.19885 19.365 2 19 2L5 2ZM6.82167 4L17.1783 4L14.6329 8H9.36719L6.82167 4Z" fill="currentColor"/>
<path d="M9.36719 8L12.0001 12.1374L14.6329 8H9.36719Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 14L5 3L19 3L12 14ZM12 14L12 21M8 21H16M7.54545 7H16.4545" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MartiniGlass;