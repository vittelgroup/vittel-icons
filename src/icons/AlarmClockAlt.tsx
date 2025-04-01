import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const AlarmClockAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V12.5L14 14.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.70711 2.79289C5.31658 2.40237 4.68342 2.40237 4.29289 2.79289L2.29289 4.79289C1.90237 5.18342 1.90237 5.81658 2.29289 6.20711C2.68342 6.59763 3.31658 6.59763 3.70711 6.20711L5.70711 4.20711C6.09763 3.81658 6.09763 3.18342 5.70711 2.79289Z" fill="currentColor"/>
<path d="M19.7071 2.79289C19.3166 2.40237 18.6834 2.40237 18.2929 2.79289C17.9024 3.18342 17.9024 3.81658 18.2929 4.20711L20.2929 6.20711C20.6834 6.59763 21.3166 6.59763 21.7071 6.20711C22.0976 5.81658 22.0976 5.18342 21.7071 4.79289L19.7071 2.79289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C11 13.2652 11.1054 13.5196 11.2929 13.7071L13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929L13 12.5858V9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" fill="currentColor"/>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V12.5L14 14.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M3 12.5C3 7.52944 7.02944 3.5 12 3.5C16.9706 3.5 21 7.52944 21 12.5C21 17.4706 16.9706 21.5 12 21.5C7.02944 21.5 3 17.4706 3 12.5Z" fill="currentColor"/>
<path d="M5.70711 2.79289C5.31658 2.40237 4.68342 2.40237 4.29289 2.79289L2.29289 4.79289C1.90237 5.18342 1.90237 5.81658 2.29289 6.20711C2.68342 6.59763 3.31658 6.59763 3.70711 6.20711L5.70711 4.20711C6.09763 3.81658 6.09763 3.18342 5.70711 2.79289Z" fill="currentColor"/>
<path d="M19.7071 2.79289C19.3166 2.40237 18.6834 2.40237 18.2929 2.79289C17.9024 3.18342 17.9024 3.81658 18.2929 4.20711L20.2929 6.20711C20.6834 6.59763 21.3166 6.59763 21.7071 6.20711C22.0976 5.81658 22.0976 5.18342 21.7071 4.79289L19.7071 2.79289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C11 13.2652 11.1054 13.5196 11.2929 13.7071L13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929L13 12.5858V9Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 5.5L5 3.5M21 5.5L19 3.5M12 8.5V12.5L14 14.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default AlarmClockAlt;