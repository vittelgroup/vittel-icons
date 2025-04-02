import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FramerLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V15H19L5 3H19V9H5V15L12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.00005 2C4.58157 2 4.20735 2.26057 4.06216 2.65305C3.91697 3.04554 4.03153 3.48692 4.34926 3.75926L9.29679 8H5.00005C4.44776 8 4.00005 8.44772 4.00005 9V15C4.00005 15.2919 4.12761 15.5693 4.34926 15.7593L11.3493 21.7593C11.6458 22.0134 12.0631 22.0717 12.4179 21.9085C12.7727 21.7453 13 21.3905 13 21V16H19C19.4185 16 19.7927 15.7394 19.9379 15.3469C20.0831 14.9545 19.9686 14.5131 19.6508 14.2407L14.7033 10H19C19.5523 10 20 9.55228 20 9V3C20 2.44772 19.5523 2 19 2H5.00005Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 15V21L5 15V9H12L5 3H19V9H12L19 15H12Z" fill="currentColor"/>
<path d="M12 21V15H19L12 9L5 3H19V9H5V15L12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M4.06216 2.65305C4.20735 2.26057 4.58157 2 5.00005 2H19C19.5523 2 20 2.44772 20 3V9C20 9.55228 19.5523 10 19 10H14.7033L12.6508 8.24074C12.4695 8.08539 12.2387 8 12 8H9.29679L4.34926 3.75926C4.03153 3.48692 3.91697 3.04554 4.06216 2.65305Z" fill="currentColor"/>
<path d="M5 8C4.44772 8 4 8.44772 4 9V15C4 15.2919 4.12756 15.5693 4.34921 15.7593L11.3492 21.7593C11.6457 22.0134 12.0631 22.0717 12.4179 21.9085C12.7727 21.7453 13 21.3905 13 21V16H19C19.4185 16 19.7927 15.7394 19.9379 15.3469C20.0831 14.9545 19.9685 14.5131 19.6508 14.2407L12.6508 8.24074C12.4695 8.08539 12.2387 8 12 8H5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V15H19L5 3H19V9H5V15L12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default FramerLogo;