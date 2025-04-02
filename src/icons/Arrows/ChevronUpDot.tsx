import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChevronUpDot: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15L12 9L18 15M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071C5.68342 16.0976 6.31658 16.0976 6.70711 15.7071L12 10.4142L17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929L12.7071 8.29289Z" fill="currentColor"/>
<path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15L12 9L18 15M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" fill="currentColor"/>
<path d="M12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L5.29289 14.2929C4.90237 14.6834 4.90237 15.3166 5.29289 15.7071C5.68342 16.0976 6.31658 16.0976 6.70711 15.7071L12 10.4142L17.2929 15.7071C17.6834 16.0976 18.3166 16.0976 18.7071 15.7071C19.0976 15.3166 19.0976 14.6834 18.7071 14.2929L12.7071 8.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15L12 9L18 15M12 15H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ChevronUpDot;