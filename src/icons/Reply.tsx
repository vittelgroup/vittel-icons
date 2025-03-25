import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Reply: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 17V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H4M4 11L8 7M4 11L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 6.29289C9.09763 6.68342 9.09763 7.31658 8.70711 7.70711L6.41421 10L15.2413 10C16.0463 9.99999 16.7106 9.99998 17.2518 10.0442C17.8139 10.0901 18.3306 10.1887 18.816 10.436C19.5686 10.8195 20.1805 11.4314 20.564 12.184C20.8113 12.6694 20.9099 13.1861 20.9558 13.7482C21 14.2894 21 14.9537 21 15.7587V17C21 17.5523 20.5523 18 20 18C19.4477 18 19 17.5523 19 17V15.8C19 14.9434 18.9992 14.3611 18.9624 13.911C18.9266 13.4726 18.8617 13.2484 18.782 13.092C18.5903 12.7157 18.2843 12.4097 17.908 12.218C17.7516 12.1383 17.5274 12.0734 17.089 12.0376C16.6389 12.0008 16.0566 12 15.2 12H6.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929L7.29289 6.29289C7.68342 5.90237 8.31658 5.90237 8.70711 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 17V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H4M4 11L8 7M4 11L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M17.089 12.0376C16.6389 12.0008 16.0566 12 15.2 12H4C3.44772 12 3 11.5523 3 11C3 10.4477 3.44772 10 4 10L15.2413 10C16.0463 9.99999 16.7106 9.99998 17.2518 10.0442C17.8139 10.0901 18.3306 10.1887 18.816 10.436C19.5686 10.8195 20.1805 11.4314 20.564 12.184C20.8113 12.6694 20.9099 13.1861 20.9558 13.7482C21 14.2894 21 14.9537 21 15.7587V17C21 17.5523 20.5523 18 20 18C19.4477 18 19 17.5523 19 17V15.8C19 14.9434 18.9992 14.3611 18.9624 13.911C18.9266 13.4726 18.8617 13.2484 18.782 13.092C18.5903 12.7157 18.2843 12.4097 17.908 12.218C17.7516 12.1383 17.5274 12.0734 17.089 12.0376Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 6.29289C9.09763 6.68342 9.09763 7.31658 8.70711 7.70711L5.41421 11L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929L7.29289 6.29289C7.68342 5.90237 8.31658 5.90237 8.70711 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 17V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H4M4 11L8 7M4 11L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Reply;