import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CompressAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M14 10H18.5M14 10V5.5M10 14L3 21M10 14H5.5M10 14L10 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L16.4142 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H14C13.4477 11 13 10.5523 13 10V5.5C13 4.94772 13.4477 4.5 14 4.5C14.5523 4.5 15 4.94772 15 5.5V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289ZM4.5 14C4.5 13.4477 4.94772 13 5.5 13H10C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L7.58579 15H5.5C4.94772 15 4.5 14.5523 4.5 14Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M14 10H18.5M14 10V5.5M10 14L3 21M10 14H5.5M10 14L10 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M4.5 14C4.5 13.4477 4.94772 13 5.5 13H10C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.4142L3.70711 21.7071C3.31658 22.0976 2.68342 22.0976 2.29289 21.7071C1.90237 21.3166 1.90237 20.6834 2.29289 20.2929L7.58579 15H5.5C4.94772 15 4.5 14.5523 4.5 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7071 2.29289C22.0976 2.68342 22.0976 3.31658 21.7071 3.70711L16.4142 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H14C13.4477 11 13 10.5523 13 10V5.5C13 4.94772 13.4477 4.5 14 4.5C14.5523 4.5 15 4.94772 15 5.5V7.58579L20.2929 2.29289C20.6834 1.90237 21.3166 1.90237 21.7071 2.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10L21 3M14 10H18.5M14 10V5.5M10 14L3 21M10 14H5.5M10 14L10 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CompressAlt;