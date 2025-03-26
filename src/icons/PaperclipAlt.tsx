import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PaperclipAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 5.93023V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.33333C7 4.49238 8.49238 3 10.3333 3C12.1743 3 13.6667 4.49238 13.6667 6.33333V15.9845C13.6667 16.905 12.9205 17.6512 12 17.6512C11.0795 17.6512 10.3333 16.905 10.3333 15.9845V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3333 4C9.04467 4 8 5.04467 8 6.33333V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V5.93023C16 5.37795 16.4477 4.93023 17 4.93023C17.5523 4.93023 18 5.37795 18 5.93023V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6.33333C6 3.9401 7.9401 2 10.3333 2C12.7266 2 14.6667 3.9401 14.6667 6.33333V15.9845C14.6667 17.4573 13.4728 18.6512 12 18.6512C10.5272 18.6512 9.33333 17.4573 9.33333 15.9845V6.5C9.33333 5.94772 9.78105 5.5 10.3333 5.5C10.8856 5.5 11.3333 5.94772 11.3333 6.5V15.9845C11.3333 16.3527 11.6318 16.6512 12 16.6512C12.3682 16.6512 12.6667 16.3527 12.6667 15.9845V6.33333C12.6667 5.04467 11.622 4 10.3333 4Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 5.93023V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.33333C7 4.49238 8.49238 3 10.3333 3C12.1743 3 13.6667 4.49238 13.6667 6.33333V15.9845C13.6667 16.905 12.9205 17.6512 12 17.6512C11.0795 17.6512 10.3333 16.905 10.3333 15.9845V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.3333 4C9.04467 4 8 5.04467 8 6.33333V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V5.93023C16 5.37795 16.4477 4.93023 17 4.93023C17.5523 4.93023 18 5.37795 18 5.93023V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6.33333C6 3.9401 7.9401 2 10.3333 2C12.7266 2 14.6667 3.9401 14.6667 6.33333V15.9845C14.6667 17.4573 13.4728 18.6512 12 18.6512C10.5272 18.6512 9.33333 17.4573 9.33333 15.9845V6.5C9.33333 5.94772 9.78105 5.5 10.3333 5.5C10.8856 5.5 11.3333 5.94772 11.3333 6.5V15.9845C11.3333 16.3527 11.6318 16.6512 12 16.6512C12.3682 16.6512 12.6667 16.3527 12.6667 15.9845V6.33333C12.6667 5.04467 11.622 4 10.3333 4Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 5.93023V16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16V6.33333C7 4.49238 8.49238 3 10.3333 3C12.1743 3 13.6667 4.49238 13.6667 6.33333V15.9845C13.6667 16.905 12.9205 17.6512 12 17.6512C11.0795 17.6512 10.3333 16.905 10.3333 15.9845V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default PaperclipAlt;