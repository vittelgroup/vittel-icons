import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Magnet: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 7V5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5V7M5 7H9M5 7V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V7M9 7V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V7M15 7V5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V7M15 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5V6H4V5Z" fill="currentColor"/>
<path d="M4 14V8H10V14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14V8H20V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14Z" fill="currentColor"/>
<path d="M20 6V5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5V6H20Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C15.866 21 19 17.866 19 14V7H15V14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14V7H5V14C5 17.866 8.13401 21 12 21Z" fill="currentColor"/>
<path d="M5 7V5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5V7M5 7H9M5 7V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V7M9 7V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V7M15 7V5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V7M15 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 8V5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5V8H20Z" fill="currentColor"/>
<path d="M10 8H4V5C4 3.34315 5.34315 2 7 2C8.65685 2 10 3.34315 10 5V8Z" fill="currentColor"/>
<path opacity="0.3" d="M4 8V14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14V8H14V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V8H4Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 7V5C5 3.89543 5.89543 3 7 3C8.10457 3 9 3.89543 9 5V7M5 7H9M5 7V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14V7M9 7V14C9 15.6569 10.3431 17 12 17C13.6569 17 15 15.6569 15 14V7M15 7V5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V7M15 7H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
)
  }
};

export default Magnet;