import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GolfClub: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.1891 16.0745L5.48915 13.6279C4.22584 13.3092 3 14.2642 3 15.5671V19C3 20.1046 3.89543 21 5 21H11.7003C12.4906 21 13.2069 20.5345 13.5279 19.8123L15.1891 16.0745ZM15.1891 16.0745L21 3M3 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21.4061 2.08619C21.9108 2.3105 22.1381 2.90146 21.9138 3.40614L14.4417 20.2184C13.9602 21.3018 12.8858 22 11.7003 22H5C3.34315 22 2 20.6569 2 19V18H6C6.55228 18 7 17.5523 7 17C7 16.4477 6.55228 16 6 16H2V15.5671C2 13.6128 3.83876 12.1802 5.73372 12.6582L14.6173 14.899L20.0862 2.59387C20.3105 2.08918 20.9015 1.86189 21.4061 2.08619Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 21.0001H11.7003C12.4906 21.0001 13.2069 20.5346 13.5279 19.8123L15.1891 16.0746L5.48915 13.6279C4.22584 13.3092 3 14.2643 3 15.5672V19.0001C3 20.1046 3.89543 21.0001 5 21.0001Z" fill="currentColor"/>
<path d="M15.1891 16.0745L5.48915 13.6279C4.22584 13.3092 3 14.2642 3 15.5671V19C3 20.1046 3.89543 21 5 21H11.7003C12.4906 21 13.2069 20.5345 13.5279 19.8123L15.1891 16.0745ZM15.1891 16.0745L21 3M3 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 21.0001H11.7003C12.4906 21.0001 13.2069 20.5346 13.5279 19.8123L15.1891 16.0746L5.48915 13.6279C4.22584 13.3092 3 14.2643 3 15.5672V19.0001C3 20.1046 3.89543 21.0001 5 21.0001Z" fill="currentColor"/>
<path d="M15.1891 16.0745L5.48915 13.6279C4.22584 13.3092 3 14.2642 3 15.5671V19C3 20.1046 3.89543 21 5 21H11.7003C12.4906 21 13.2069 20.5345 13.5279 19.8123L15.1891 16.0745ZM15.1891 16.0745L21 3M3 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.1891 16.0745L5.48915 13.6279C4.22584 13.3092 3 14.2642 3 15.5671V19C3 20.1046 3.89543 21 5 21H11.7003C12.4906 21 13.2069 20.5345 13.5279 19.8123L15.1891 16.0745ZM15.1891 16.0745L21 3M3 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default GolfClub;