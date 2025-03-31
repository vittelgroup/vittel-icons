import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SignalSlash: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V14.3945M16 16V20M16 8V10.399M12 12V20M8 16V20M4 19V20M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L11 12.4142V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V14.4142L15 16.4142V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V18.4142L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L3.70711 2.29289Z" fill="currentColor"/>
<path d="M19 14.786V4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4V16.786L19 14.786Z" fill="currentColor"/>
<path d="M15 10.786L17 12.786V8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8V10.786Z" fill="currentColor"/>
<path d="M9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16V20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20V16Z" fill="currentColor"/>
<path d="M4 18C4.55228 18 5 18.4477 5 19V20C5 20.5523 4.55228 21 4 21C3.44772 21 3 20.5523 3 20V19C3 18.4477 3.44772 18 4 18Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V14.3945M16 16V20M16 8V10.399M12 12V20M8 16V20M4 19V20M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M11 12.4142V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V14.4142L11 12.4142Z" fill="currentColor"/>
<path d="M15 16.4142V20C15 20.5523 15.4477 21 16 21C16.5523 21 17 20.5523 17 20V18.4142L15 16.4142Z" fill="currentColor"/>
<path d="M19 14.786V4C19 3.44772 19.4477 3 20 3C20.5523 3 21 3.44772 21 4V16.786L19 14.786Z" fill="currentColor"/>
<path d="M17 12.786L15 10.786V8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8V12.786Z" fill="currentColor"/>
<path d="M9 16C9 15.4477 8.55228 15 8 15C7.44772 15 7 15.4477 7 16V20C7 20.5523 7.44772 21 8 21C8.55228 21 9 20.5523 9 20V16Z" fill="currentColor"/>
<path d="M5 19C5 18.4477 4.55228 18 4 18C3.44772 18 3 18.4477 3 19V20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20V19Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 2.29289C2.68342 1.90237 3.31658 1.90237 3.70711 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L2.29289 3.70711C1.90237 3.31658 1.90237 2.68342 2.29289 2.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4V14.3945M16 16V20M16 8V10.399M12 12V20M8 16V20M4 19V20M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default SignalSlash;