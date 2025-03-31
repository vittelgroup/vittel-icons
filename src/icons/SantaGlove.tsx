import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SantaGlove: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 17H17M5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17M5 17V10M17 17L17 14L20.0783 11.5373C21.1492 10.6806 21.3347 9.11287 20.5118 8.01574C19.6834 6.91117 18.1046 6.67157 17 7.5M17 9.42857V9C17 5.68629 14.3137 3 11 3C7.68629 3 5 5.68629 5 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 9C4 5.13401 7.13401 2 11 2C13.8611 2 16.3213 3.71648 17.4069 6.17582C18.8015 5.72147 20.3911 6.18808 21.3118 7.41574C22.4528 8.93713 22.2033 11.118 20.703 12.3182L18 14.4806V15.126C17.6804 15.0438 17.3453 15 17 15H5C4.6547 15 4.31962 15.0438 4 15.126V9Z" fill="currentColor"/>
<path d="M5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22H17C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16H5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 21H17C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17H5C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" fill="currentColor"/>
<path d="M5 17H17M5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17M5 17V10M17 17L17 14L20.0783 11.5373C21.1492 10.6806 21.3347 9.11287 20.5118 8.01574C19.6834 6.91117 18.1046 6.67157 17 7.5M17 9.42857V9C17 5.68629 14.3137 3 11 3C7.68629 3 5 5.68629 5 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11 2C7.13401 2 4 5.13401 4 9V15.126C4.31962 15.0438 4.6547 15 5 15H6H16H17C17.3453 15 17.6804 15.0438 18 15.126V14.4806L20.703 12.3182C22.2033 11.118 22.4528 8.93713 21.3118 7.41574C20.3911 6.18808 18.8015 5.72147 17.4069 6.17582C16.3213 3.71648 13.8611 2 11 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 19C2 17.3431 3.34315 16 5 16H17C18.6569 16 20 17.3431 20 19C20 20.6569 18.6569 22 17 22H5C3.34315 22 2 20.6569 2 19Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 17H17M5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17M5 17V10M17 17L17 14L20.0783 11.5373C21.1492 10.6806 21.3347 9.11287 20.5118 8.01574C19.6834 6.91117 18.1046 6.67157 17 7.5M17 9.42857V9C17 5.68629 14.3137 3 11 3C7.68629 3 5 5.68629 5 9V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SantaGlove;