import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const GraduationHatAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 9L12 4L2 9L12 14L22 9ZM22 9V15M19 10.5V16.5L12 20L5 16.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5528 3.10557C11.8343 2.96481 12.1657 2.96481 12.4472 3.10557L22.4279 8.09589C22.5 8.13009 22.5674 8.17267 22.6288 8.22238C22.6758 8.2604 22.719 8.30242 22.7581 8.3478C22.9088 8.52289 23 8.7508 23 9V15C23 15.5523 22.5523 16 22 16C21.4477 16 21 15.5523 21 15V10.618L12.4472 14.8944C12.1657 15.0352 11.8343 15.0352 11.5528 14.8944L1.55279 9.89443C1.214 9.72504 1 9.37877 1 9C1 8.62123 1.214 8.27496 1.55279 8.10557L11.5528 3.10557Z" fill="currentColor"/>
<path d="M4 16.4999V13.354L10.6584 16.6832C11.5029 17.1055 12.4971 17.1055 13.3416 16.6832L20 13.354V16.4999C20 16.8787 19.786 17.2249 19.4472 17.3943L12.4472 20.8943C12.1657 21.0351 11.8343 21.0351 11.5528 20.8943L4.55279 17.3943C4.214 17.2249 4 16.8787 4 16.4999Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M22 9L19 10.5V16.5L12 20L5 16.5V10.5L2 9L12 4L22 9Z" fill="currentColor"/>
<path d="M22 9L12 4L2 9L12 14L22 9ZM22 9V15M19 10.5V16.5L12 20L5 16.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5528 3.10557C11.8343 2.96481 12.1657 2.96481 12.4472 3.10557L22.4279 8.09589C22.5 8.13009 22.5674 8.17267 22.6288 8.22238C22.6758 8.2604 22.719 8.30242 22.7581 8.3478C22.9088 8.52289 23 8.7508 23 9V15C23 15.5523 22.5523 16 22 16C21.4477 16 21 15.5523 21 15V10.618L12.4472 14.8944C12.1657 15.0352 11.8343 15.0352 11.5528 14.8944L1.55279 9.89443C1.214 9.72504 1 9.37877 1 9C1 8.62123 1.214 8.27496 1.55279 8.10557L11.5528 3.10557Z" fill="currentColor"/>
<path opacity="0.3" d="M4 11.118V16.4999C4 16.8787 4.214 17.2249 4.55279 17.3943L11.5528 20.8943C11.8343 21.0351 12.1657 21.0351 12.4472 20.8943L19.4472 17.3943C19.786 17.2249 20 16.8787 20 16.4999V11.118L12.4472 14.8944C12.1657 15.0352 11.8343 15.0352 11.5528 14.8944L4 11.118Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M22 9L12 4L2 9L12 14L22 9ZM22 9V15M19 10.5V16.5L12 20L5 16.5V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default GraduationHatAlt;