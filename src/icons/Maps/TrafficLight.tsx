import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TrafficLight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.0799 3 10.2 3H13.8C14.9201 3 15.4802 3 15.908 3.21799C16.2843 3.40973 16.5903 3.71569 16.782 4.09202C17 4.51984 17 5.0799 17 6.2V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 6.5C12.5 6.77614 12.2761 7 12 7C11.7239 7 11.5 6.77614 11.5 6.5C11.5 6.22386 11.7239 6 12 6C12.2761 6 12.5 6.22386 12.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 11.5C12.5 11.7761 12.2761 12 12 12C11.7239 12 11.5 11.7761 11.5 11.5C11.5 11.2239 11.7239 11 12 11C12.2761 11 12.5 11.2239 12.5 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5C11.5 16.2239 11.7239 16 12 16C12.2761 16 12.5 16.2239 12.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 2C9.95655 2 8.3 3.65655 8.3 5.7C8.3 7.39693 9.44236 8.82705 11 9.26328V19.9372C9.24698 19.7164 7.60576 18.9195 6.34315 17.6569C5.08052 16.3942 4.28353 14.753 4.06272 13H5C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11H3C2.44772 11 2 11.4477 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.80432 20.9464 9.34786 21.9999 12 21.9999C14.6521 21.9999 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 11.4477 21.5523 11 21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H19.9373C19.7165 14.753 18.9195 16.3942 17.6569 17.6569C16.3942 18.9195 14.753 19.7164 13 19.9372V9.26328C14.5576 8.82705 15.7 7.39693 15.7 5.7C15.7 3.65655 14.0435 2 12 2Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12.0008 8.4C13.492 8.4 14.7008 7.19117 14.7008 5.7C14.7008 4.20883 13.492 3 12.0008 3C10.5096 3 9.30078 4.20883 9.30078 5.7C9.30078 7.19117 10.5096 8.4 12.0008 8.4Z" fill="currentColor"/>
<path d="M12 8.4C13.4912 8.4 14.7 7.19117 14.7 5.7C14.7 4.20883 13.4912 3 12 3C10.5088 3 9.3 4.20883 9.3 5.7C9.3 7.19117 10.5088 8.4 12 8.4ZM12 8.4V20.9999M12 20.9999C9.61305 20.9999 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12H5M12 20.9999C14.3869 20.9999 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.30078 5.7C8.30078 3.65655 9.95733 2 12.0008 2C14.0442 2 15.7008 3.65655 15.7008 5.7C15.7008 7.74345 14.0442 9.4 12.0008 9.4C9.95733 9.4 8.30078 7.74345 8.30078 5.7Z" fill="currentColor"/>
<path opacity="0.3" d="M11 9.26332V19.9372C9.24698 19.7164 7.60576 18.9194 6.34315 17.6568C5.08052 16.3942 4.28353 14.753 4.06272 13L5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11L3 11C2.44772 11 2 11.4477 2 12C2 14.6521 3.05357 17.1957 4.92893 19.071C6.80432 20.9464 9.34786 21.9999 12 21.9999C14.6521 21.9999 17.1957 20.9464 19.0711 19.071C20.9464 17.1957 22 14.6521 22 12C22 11.4477 21.5523 11 21 11H19C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13H19.9373C19.7165 14.753 18.9195 16.3942 17.6569 17.6568C16.3942 18.9194 14.753 19.7164 13 19.9372V9.26321C12.6819 9.35233 12.3464 9.39999 11.9998 9.39999C11.6534 9.39999 11.318 9.35237 11 9.26332Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 6.2C7 5.0799 7 4.51984 7.21799 4.09202C7.40973 3.71569 7.71569 3.40973 8.09202 3.21799C8.51984 3 9.0799 3 10.2 3H13.8C14.9201 3 15.4802 3 15.908 3.21799C16.2843 3.40973 16.5903 3.71569 16.782 4.09202C17 4.51984 17 5.0799 17 6.2V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 6.5C12.5 6.77614 12.2761 7 12 7C11.7239 7 11.5 6.77614 11.5 6.5C11.5 6.22386 11.7239 6 12 6C12.2761 6 12.5 6.22386 12.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 11.5C12.5 11.7761 12.2761 12 12 12C11.7239 12 11.5 11.7761 11.5 11.5C11.5 11.2239 11.7239 11 12 11C12.2761 11 12.5 11.2239 12.5 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M12.5 16.5C12.5 16.7761 12.2761 17 12 17C11.7239 17 11.5 16.7761 11.5 16.5C11.5 16.2239 11.7239 16 12 16C12.2761 16 12.5 16.2239 12.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TrafficLight;