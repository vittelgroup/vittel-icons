import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const YenSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 20V12M12 12L7 4M12 12L17 4M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.47013 3.15189C6.93847 2.85918 7.55542 3.00155 7.84813 3.46989L12.0001 10.1131L16.1521 3.46989C16.4448 3.00155 17.0618 2.85918 17.5301 3.15189C17.9985 3.4446 18.1408 4.06155 17.8481 4.52989L13.8044 10.9999H16.0001C16.5524 10.9999 17.0001 11.4476 17.0001 11.9999C17.0001 12.5522 16.5524 12.9999 16.0001 12.9999H13.0001V14.9999H16.0001C16.5524 14.9999 17.0001 15.4476 17.0001 15.9999C17.0001 16.5522 16.5524 16.9999 16.0001 16.9999H13.0001V19.9999C13.0001 20.5522 12.5524 20.9999 12.0001 20.9999C11.4478 20.9999 11.0001 20.5522 11.0001 19.9999V16.9999H8.00013C7.44785 16.9999 7.00013 16.5522 7.00013 15.9999C7.00013 15.4476 7.44785 14.9999 8.00013 14.9999H11.0001V12.9999H8.00013C7.44785 12.9999 7.00013 12.5522 7.00013 11.9999C7.00013 11.4476 7.44785 10.9999 8.00013 10.9999H10.1959L6.15214 4.52989C5.85943 4.06155 6.0018 3.4446 6.47013 3.15189Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 20V12M12 12L7 4M12 12L17 4M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M7.84813 3.47013C7.55542 3.0018 6.93847 2.85943 6.47013 3.15214C6.0018 3.44485 5.85943 4.0618 6.15214 4.53013L10.1958 11H13.8045L17.8481 4.53013C18.1408 4.0618 17.9985 3.44485 17.5301 3.15214C17.0618 2.85943 16.4448 3.0018 16.1521 3.47013L12.0001 10.1133L7.84813 3.47013Z" fill="currentColor"/>
<path d="M13.0001 13H11.0001V15H13.0001V13Z" fill="currentColor"/>
<path d="M13.0001 17H11.0001V20.0001C11.0001 20.5524 11.4478 21.0001 12.0001 21.0001C12.5524 21.0001 13.0001 20.5524 13.0001 20.0001V17Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12ZM7 16C7 15.4477 7.44772 15 8 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 20V12M12 12L7 4M12 12L17 4M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default YenSign;