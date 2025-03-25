import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowUpAZ: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 3L11 7M7 3L3 7M15.5 3H20.5L15.5 10H20.5M16 20H20M15 21L18 14L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289ZM18.5568 4H15.5C14.9477 4 14.5 3.55228 14.5 3C14.5 2.44772 14.9477 2 15.5 2H20.5C20.8746 2 21.2178 2.20935 21.3892 2.54242C21.5606 2.87549 21.5315 3.27642 21.3137 3.58124L17.4432 9H20.5C21.0523 9 21.5 9.44772 21.5 10C21.5 10.5523 21.0523 11 20.5 11H15.5C15.1254 11 14.7822 10.7907 14.6108 10.4576C14.4394 10.1245 14.4685 9.72358 14.6863 9.41876L18.5568 4ZM18 13C18.4 13 18.7616 13.2384 18.9191 13.6061L21.9191 20.6061C22.1367 21.1137 21.9015 21.7016 21.3939 21.9191C20.8863 22.1367 20.2984 21.9015 20.0809 21.3939L19.912 21H16.088L15.9191 21.3939C15.7016 21.9015 15.1137 22.1367 14.6061 21.9191C14.0985 21.7016 13.8633 21.1137 14.0809 20.6061L17.0809 13.6061C17.2384 13.2384 17.6 13 18 13ZM16.9451 19H19.0549L18 16.5386L16.9451 19Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20.5716 20H15.4287L18.0001 14L20.5716 20Z" fill="currentColor"/>
<path d="M7 3V21M7 3L11 7M7 3L3 7M15.5 3H20.5L15.5 10H20.5M16 20H20M15 21L18 14L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M15.5003 4H18.5571L14.6865 9.41876C14.4688 9.72358 14.4397 10.1245 14.6111 10.4576C14.7825 10.7907 15.1257 11 15.5003 11H20.5003C21.0525 11 21.5003 10.5523 21.5003 10C21.5003 9.44772 21.0525 9 20.5003 9H17.4434L21.314 3.58124C21.5317 3.27642 21.5608 2.87549 21.3894 2.54242C21.218 2.20935 20.8748 2 20.5003 2H15.5003C14.948 2 14.5003 2.44772 14.5003 3C14.5003 3.55228 14.948 4 15.5003 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.9194 13.6061C18.7618 13.2384 18.4003 13 18.0003 13C17.6002 13 17.2387 13.2384 17.0811 13.6061L14.0811 20.6061C13.8636 21.1137 14.0987 21.7016 14.6063 21.9191C15.114 22.1367 15.7018 21.9015 15.9194 21.3939L16.0882 21H19.9123L20.0811 21.3939C20.2987 21.9015 20.8865 22.1367 21.3942 21.9191C21.9018 21.7016 22.137 21.1137 21.9194 20.6061L18.9194 13.6061ZM18.0002 16.5386L19.0551 19H16.9453L18.0002 16.5386Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 2.29289C6.68342 1.90237 7.31658 1.90237 7.70711 2.29289L11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711L8 5.41421V21C8 21.5523 7.55228 22 7 22C6.44772 22 6 21.5523 6 21V5.41421L3.70711 7.70711C3.31658 8.09763 2.68342 8.09763 2.29289 7.70711C1.90237 7.31658 1.90237 6.68342 2.29289 6.29289L6.29289 2.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 3V21M7 3L11 7M7 3L3 7M15.5 3H20.5L15.5 10H20.5M16 20H20M15 21L18 14L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowUpAZ;