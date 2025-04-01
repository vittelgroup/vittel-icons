import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ClockExclamation: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V13.5M12 16.5H12.01M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.70711 2.79289C5.31658 2.40237 4.68342 2.40237 4.29289 2.79289L2.29289 4.79289C1.90237 5.18342 1.90237 5.81658 2.29289 6.20711C2.68342 6.59763 3.31658 6.59763 3.70711 6.20711L5.70711 4.20711C6.09763 3.81658 6.09763 3.18342 5.70711 2.79289Z" fill="currentColor"/>
<path d="M19.7071 2.79289C19.3166 2.40237 18.6834 2.40237 18.2929 2.79289C17.9024 3.18342 17.9024 3.81658 18.2929 4.20711L20.2929 6.20711C20.6834 6.59763 21.3166 6.59763 21.7071 6.20711C22.0976 5.81658 22.0976 5.18342 21.7071 4.79289L19.7071 2.79289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5ZM11 8.5C11 7.94771 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V8.5ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" fill="currentColor"/>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V13.5M12 16.5H12.01M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5Z" fill="currentColor"/>
<path d="M5.70711 2.79289C5.31658 2.40237 4.68342 2.40237 4.29289 2.79289L2.29289 4.79289C1.90237 5.18342 1.90237 5.81658 2.29289 6.20711C2.68342 6.59763 3.31658 6.59763 3.70711 6.20711L5.70711 4.20711C6.09763 3.81658 6.09763 3.18342 5.70711 2.79289Z" fill="currentColor"/>
<path d="M19.7071 2.79289C19.3166 2.40237 18.6834 2.40237 18.2929 2.79289C17.9024 3.18342 17.9024 3.81658 18.2929 4.20711L20.2929 6.20711C20.6834 6.59763 21.3166 6.59763 21.7071 6.20711C22.0976 5.81658 22.0976 5.18342 21.7071 4.79289L19.7071 2.79289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 8.5C11 7.94771 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V8.5ZM13 16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5C11 15.9477 11.4477 15.5 12 15.5C12.5523 15.5 13 15.9477 13 16.5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V13.5M12 16.5H12.01M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ClockExclamation;