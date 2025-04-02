import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Monument: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 21L9 5L12 3L15 5L17 21M11 14H13M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L15.5547 4.16795C15.7965 4.32916 15.9562 4.58759 15.9923 4.87597L17.8828 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21C4 20.4477 4.44772 20 5 20H6.11722L8.00772 4.87597C8.04377 4.58759 8.20349 4.32916 8.4453 4.16795L11.4453 2.16795ZM11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H11Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 5L7 21H17L15 5L12 3L9 5Z" fill="currentColor"/>
<path d="M7 21L9 5L12 3L15 5L17 21M11 14H13M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.5547 2.16795C12.2188 1.94402 11.7812 1.94402 11.4453 2.16795L8.44527 4.16795C8.20346 4.32916 8.04374 4.58759 8.00769 4.87597L6.11719 20H17.8828L15.9922 4.87597C15.9562 4.58759 15.7965 4.32916 15.5547 4.16795L12.5547 2.16795Z" fill="currentColor"/>
<path d="M10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z" fill="currentColor"/>
<path d="M4 21C4 20.4477 4.44772 20 5 20H19C19.5523 20 20 20.4477 20 21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 21L9 5L12 3L15 5L17 21M11 14H13M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Monument;