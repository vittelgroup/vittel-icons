import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TrainTrack: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H18M4 11H20M3 18L21 18M9.0002 3.00005L4.00009 21M20 21L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7324 2.03625C15.2645 1.88843 15.8157 2.19999 15.9635 2.73212L16.0379 2.99977H18C18.5523 2.99977 19 3.44748 19 3.99976C19 4.55205 18.5523 4.99976 18 4.99976H16.5934L17.9823 9.99976H20C20.5523 9.99976 21 10.4475 21 10.9998C21 11.552 20.5523 11.9998 20 11.9998H18.5379L19.9268 16.9998H21C21.5523 16.9998 22 17.4475 22 17.9998C22 18.5521 21.5523 18.9998 21 18.9998H20.4823L20.9635 20.7321C21.1113 21.2643 20.7998 21.8155 20.2676 21.9633C19.7355 22.1111 19.1843 21.7995 19.0365 21.2674L18.4066 18.9998L5.59353 18.9998L4.9636 21.2674C4.81578 21.7996 4.26457 22.1111 3.73244 21.9633C3.2003 21.8155 2.88875 21.2643 3.03657 20.7321L3.5178 18.9998H3C2.44772 18.9998 2 18.552 2 17.9998C2 17.4475 2.44772 16.9998 3 16.9998H4.07336L5.46229 11.9998H4C3.44772 11.9998 3 11.552 3 10.9998C3 10.4475 3.44772 9.99976 4 9.99976H6.01786L7.40678 4.99976H6C5.44772 4.99976 5 4.55205 5 3.99976C5 3.44748 5.44772 2.99977 6 2.99977H7.96235L8.03668 2.73216C8.1845 2.20003 8.73571 1.88848 9.26785 2.0363C9.71062 2.15929 10.0007 2.56157 10.0005 2.99977H13.9997C13.9995 2.56155 14.2896 2.15925 14.7324 2.03625ZM14.5177 4.99976H9.48251L8.09359 9.99976H15.9066L14.5177 4.99976ZM16.4621 11.9998H7.53802L6.1491 16.9998L17.851 16.9998L16.4621 11.9998Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M15.2773 4H8.72199L4.83301 18L19.1662 18L15.2773 4Z" fill="currentColor"/>
<path d="M6 4H18M4 11H20M3 18L21 18M9.0002 3.00005L4.00009 21M20 21L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4C19 4.55228 18.5523 5 18 5H6C5.44772 5 5 4.55228 5 4ZM3 11C3 10.4477 3.44772 10 4 10H20C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11ZM2 18C2 17.4477 2.44772 17 3 17L21 17C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19L3 19C2.44772 19 2 18.5523 2 18Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7325 2.03625C15.2647 1.88843 15.8159 2.19999 15.9637 2.73212L20.9637 20.7321C21.1115 21.2643 20.7999 21.8155 20.2678 21.9633C19.7357 22.1111 19.1845 21.7995 19.0366 21.2674L14.0366 3.26741C13.8888 2.73527 14.2004 2.18406 14.7325 2.03625ZM9.26802 2.0363C9.80015 2.18412 10.1117 2.73533 9.96388 3.26746L4.96377 21.2674C4.81595 21.7996 4.26474 22.1111 3.7326 21.9633C3.20047 21.8155 2.88892 21.2643 3.03674 20.7321L8.03685 2.73216C8.18467 2.20003 8.73588 1.88848 9.26802 2.0363Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 4H18M4 11H20M3 18L21 18M9.0002 3.00005L4.00009 21M20 21L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TrainTrack;