import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ClockMinus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 12.5L8 12.5008M3 5.5L5 3.5M21 5.5L19 3.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.70711 2.79289C5.31658 2.40237 4.68342 2.40237 4.29289 2.79289L2.29289 4.79289C1.90237 5.18342 1.90237 5.81658 2.29289 6.20711C2.68342 6.59763 3.31658 6.59763 3.70711 6.20711L5.70711 4.20711C6.09763 3.81658 6.09763 3.18342 5.70711 2.79289Z" fill="currentColor"/>
<path d="M19.7071 2.79289C19.3166 2.40237 18.6834 2.40237 18.2929 2.79289C17.9024 3.18342 17.9024 3.81658 18.2929 4.20711L20.2929 6.20711C20.6834 6.59763 21.3166 6.59763 21.7071 6.20711C22.0976 5.81658 22.0976 5.18342 21.7071 4.79289L19.7071 2.79289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5ZM8.00014 11.5C7.44785 11.4999 7.00008 11.9476 7 12.4999C6.99992 13.0521 7.44758 13.4999 7.99986 13.5L15.9999 13.5008C16.5521 13.5009 16.9999 13.0532 17 12.501C17.0001 11.9487 16.5524 11.5009 16.0001 11.5008L8.00014 11.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" fill="currentColor"/>
<path d="M16 12.5L8 12.5008M3 5.5L5 3.5M21 5.5L19 3.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5Z" fill="currentColor"/>
<path d="M4.29289 2.79289C4.68342 2.40237 5.31658 2.40237 5.70711 2.79289C6.09763 3.18342 6.09763 3.81658 5.70711 4.20711L3.70711 6.20711C3.31658 6.59763 2.68342 6.59763 2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289L4.29289 2.79289Z" fill="currentColor"/>
<path d="M18.2929 2.79289C18.6834 2.40237 19.3166 2.40237 19.7071 2.79289L21.7071 4.79289C22.0976 5.18342 22.0976 5.81658 21.7071 6.20711C21.3166 6.59763 20.6834 6.59763 20.2929 6.20711L18.2929 4.20711C17.9024 3.81658 17.9024 3.18342 18.2929 2.79289Z" fill="currentColor"/>
<path d="M7 12.4999C7.00008 11.9476 7.44785 11.4999 8.00014 11.5L16.0001 11.5008C16.5524 11.5009 17.0001 11.9487 17 12.501C16.9999 13.0532 16.5521 13.5009 15.9999 13.5008L7.99986 13.5C7.44758 13.4999 6.99992 13.0521 7 12.4999Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 12.5L8 12.5008M3 5.5L5 3.5M21 5.5L19 3.5M20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ClockMinus;