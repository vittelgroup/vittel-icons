import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CodepenLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 9L12 4M3 9L12 14M3 9V15M12 4L21 9M12 4V10M21 9L12 14M21 9V15M12 14V20M3 15L12 10M3 15L12 20M12 10L21 15M21 15L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5144 3.12584C11.8164 2.95805 12.1836 2.95805 12.4856 3.12584L21.4856 8.12584C21.8031 8.30221 22 8.63683 22 9V15C22 15.3632 21.8031 15.6978 21.4856 15.8742L12.9873 20.5954C12.9951 20.5893 12.9992 20.5859 12.9992 20.5859V14.5884L17.6581 12L15.599 10.8561L11.9992 12.8561L8.39897 10.8561L6.34039 11.9997L4 10.6995V13.3005L6.34039 11.9997L10.9992 14.5884V20.5859C10.9992 20.5859 11.0019 20.5882 11.0071 20.5924L2.51436 15.8742C2.19689 15.6978 2 15.3632 2 15V9C2 8.63683 2.19689 8.30221 2.51436 8.12584L11.5144 3.12584ZM13 9.4116L15.6 10.856L18.9409 9L13 5.69951V9.4116ZM11 5.69951V9.4116L8.4 10.856L5.05913 9L11 5.69951ZM20 10.6995L17.6591 12L20 13.3005V10.6995Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 10L3 15L12 20L21 15L12 10Z" fill="currentColor"/>
<path d="M3 9L12 4M3 9L12 14M3 9V15M12 4L21 9M12 4V10M21 9L12 14M21 9V15M12 14V20M3 15L12 10M3 15L12 20M12 10L21 15M21 15L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M8.4 12L3 9V15L8.4 12Z" fill="currentColor"/>
<path d="M12 4L3 9L8.4 12L12 10V4Z" fill="currentColor"/>
<path d="M21 9L12 4V10L15.6 12L21 9Z" fill="currentColor"/>
<path d="M21 9L15.6 12L21 15V9Z" fill="currentColor"/>
<path d="M15.6 12L12 14V20L21 15L15.6 12Z" fill="currentColor"/>
<path d="M8.4 12L12 14L15.6 12L12 10L8.4 12Z" fill="currentColor"/>
<path d="M12 14L8.4 12L3 15L12 20V14Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5144 3.12584C11.8164 2.95805 12.1836 2.95805 12.4856 3.12584L21.4856 8.12584C21.8031 8.30221 22 8.63683 22 9V15C22 15.3632 21.8031 15.6978 21.4856 15.8742L12.4856 20.8742C12.1836 21.0419 11.8164 21.0419 11.5144 20.8742L2.51436 15.8742C2.19689 15.6978 2 15.3632 2 15V9C2 8.63683 2.19689 8.30221 2.51436 8.12584L11.5144 3.12584ZM4 10.6995L6.34087 12L4 13.3005V10.6995ZM5.05913 15L11 18.3005V14.5884L8.4 13.144L5.05913 15ZM10.4591 12L12 12.856L13.5409 12L12 11.144L10.4591 12ZM13 9.4116L15.6 10.856L18.9409 9L13 5.69951V9.4116ZM11 5.69951V9.4116L8.4 10.856L5.05913 9L11 5.69951ZM20 10.6995L17.6591 12L20 13.3005V10.6995ZM18.9409 15L15.6 13.144L13 14.5884V18.3005L18.9409 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 9L12 4M3 9L12 14M3 9V15M12 4L21 9M12 4V10M21 9L12 14M21 9V15M12 14V20M3 15L12 10M3 15L12 20M12 10L21 15M21 15L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CodepenLogo;