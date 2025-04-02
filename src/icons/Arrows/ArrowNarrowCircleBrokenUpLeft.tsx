import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowNarrowCircleBrokenUpLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.6569 10H10M10 10V15.6569M10 10L18.364 18.364M20.8278 13.7568C21.3917 10.9096 20.5704 7.84251 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C7.84251 20.5704 10.9096 21.3917 13.7568 20.8278" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19.7429 18.3287C21.1536 16.6049 22 14.4013 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C14.4013 22 16.6049 21.1536 18.3287 19.7429L11 12.4142V15.6569C11 16.2091 10.5523 16.6569 10 16.6569C9.44771 16.6569 9 16.2091 9 15.6569V10C9 9.44771 9.44771 9 10 9H15.6569C16.2091 9 16.6569 9.44771 16.6569 10C16.6569 10.5523 16.2091 11 15.6569 11H12.4142L19.7429 18.3287Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M15.6569 10H10M10 10V15.6569M10 10L18.364 18.364M20.8278 13.7568C21.3917 10.9096 20.5704 7.84251 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C7.84251 20.5704 10.9096 21.3917 13.7568 20.8278" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path d="M18.3287 19.7429L11 12.4142V15.6569C11 16.2091 10.5523 16.6569 10 16.6569C9.44772 16.6569 9 16.2091 9 15.6569V10C9 9.44772 9.44772 9 10 9H15.6569C16.2091 9 16.6569 9.44772 16.6569 10C16.6569 10.5523 16.2091 11 15.6569 11H12.4142L19.7429 18.3287C19.3198 18.8458 18.8458 19.3198 18.3287 19.7429Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.6569 10H10M10 10V15.6569M10 10L18.364 18.364M20.8278 13.7568C21.3917 10.9096 20.5704 7.84251 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C7.84251 20.5704 10.9096 21.3917 13.7568 20.8278" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ArrowNarrowCircleBrokenUpLeft;