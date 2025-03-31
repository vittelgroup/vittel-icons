import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PoundSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 20H19M5 13H15M18 6.81794C17.1896 5.14985 15.4791 4 13.5 4C10.7386 4 8.5 6.23858 8.5 9V17C8.5 18.6569 7.15685 20 5.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 5C11.2909 5 9.5 6.79086 9.5 9V12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9.5V17C9.5 17.7286 9.30521 18.4117 8.96487 19H19C19.5523 19 20 19.4477 20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H5.5C6.60457 19 7.5 18.1046 7.5 17V14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H7.5V9C7.5 5.68629 10.1863 3 13.5 3C15.8764 3 17.9282 4.38164 18.8995 6.38097C19.1408 6.87774 18.9337 7.47608 18.437 7.71741C17.9402 7.95875 17.3419 7.75167 17.1005 7.25491C16.4511 5.91806 15.0818 5 13.5 5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 20H19M5 13H15M18 6.81794C17.1896 5.14985 15.4791 4 13.5 4C10.7386 4 8.5 6.23858 8.5 9V17C8.5 18.6569 7.15685 20 5.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 12.4477 4.44772 12 5 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H5C4.44772 14 4 13.5523 4 13Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M9.5 9C9.5 6.79086 11.2909 5 13.5 5C15.0818 5 16.4511 5.91806 17.1005 7.25491C17.3419 7.75167 17.9402 7.95875 18.437 7.71741C18.9337 7.47608 19.1408 6.87774 18.8995 6.38097C17.9282 4.38164 15.8764 3 13.5 3C10.1863 3 7.5 5.68629 7.5 9V12H9.5V9Z" fill="currentColor"/>
<path d="M9.5 14H7.5V17C7.5 18.1046 6.60457 19 5.5 19H5C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 19.4477 19.5523 19 19 19H8.96487C9.30521 18.4117 9.5 17.7286 9.5 17V14Z" fill="currentColor"/>
</g>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 20H19M5 13H15M18 6.81794C17.1896 5.14985 15.4791 4 13.5 4C10.7386 4 8.5 6.23858 8.5 9V17C8.5 18.6569 7.15685 20 5.5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default PoundSign;