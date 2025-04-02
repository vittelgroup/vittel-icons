import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Enter: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 6C20.5523 6 21 6.44772 21 7V8.24132C21 9.04628 21 9.71064 20.9558 10.2518C20.9099 10.8139 20.8113 11.3306 20.564 11.816C20.1805 12.5686 19.5686 13.1805 18.816 13.564C18.3306 13.8113 17.8139 13.9099 17.2518 13.9558C16.7106 14 16.0463 14 15.2413 14H6.41421L8.70711 16.2929C9.09763 16.6834 9.09763 17.3166 8.70711 17.7071C8.31658 18.0976 7.68342 18.0976 7.29289 17.7071L3.29289 13.7071C2.90237 13.3166 2.90237 12.6834 3.29289 12.2929L7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289C9.09763 8.68342 9.09763 9.31658 8.70711 9.70711L6.41421 12H15.2C16.0566 12 16.6389 11.9992 17.089 11.9624C17.5274 11.9266 17.7516 11.8617 17.908 11.782C18.2843 11.5903 18.5903 11.2843 18.782 10.908C18.8617 10.7516 18.9266 10.5274 18.9624 10.089C18.9992 9.63887 19 9.05658 19 8.2V7C19 6.44772 19.4477 6 20 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M20.0002 6C20.5525 6 21.0002 6.44772 21.0002 7V8.24132C21.0002 9.04628 21.0002 9.71064 20.956 10.2518C20.9101 10.8139 20.8115 11.3306 20.5642 11.816C20.1807 12.5686 19.5688 13.1805 18.8162 13.564C18.3308 13.8113 17.8141 13.9099 17.252 13.9558C16.7108 14 16.0465 14 15.2415 14H4C3.44772 14 3 13.5523 3 13C3 12.4477 3.44772 12 4 12H15.2002C16.0568 12 16.6391 11.9992 17.0892 11.9624C17.5276 11.9266 17.7518 11.8617 17.9082 11.782C18.2845 11.5903 18.5905 11.2843 18.7822 10.908C18.8619 10.7516 18.9268 10.5274 18.9626 10.089C18.9994 9.63887 19.0002 9.05658 19.0002 8.2V7C19.0002 6.44772 19.4479 6 20.0002 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 8.29289C9.09763 8.68342 9.09763 9.31658 8.70711 9.70711L5.41421 13L8.70711 16.2929C9.09763 16.6834 9.09763 17.3166 8.70711 17.7071C8.31658 18.0976 7.68342 18.0976 7.29289 17.7071L3.29289 13.7071C2.90237 13.3166 2.90237 12.6834 3.29289 12.2929L7.29289 8.29289C7.68342 7.90237 8.31658 7.90237 8.70711 8.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 7V8.2C20 9.88016 20 10.7202 19.673 11.362C19.3854 11.9265 18.9265 12.3854 18.362 12.673C17.7202 13 16.8802 13 15.2 13H4M4 13L8 9M4 13L8 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Enter;