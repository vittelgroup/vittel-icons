import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChartPieAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L16.9948 19.4879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2.04932C5.94668 2.55104 2 6.81459 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999C13.6942 21.9999 15.2899 21.5786 16.6883 20.8351L11.1679 12.5546C11.0584 12.3904 11 12.1974 11 11.9999V2.04932Z" fill="currentColor"/>
<path d="M18.3514 19.7243C20.3377 18.0892 21.6823 15.7029 21.9506 12.9999H13.8685L18.3514 19.7243Z" fill="currentColor"/>
<path d="M21.9506 10.9999C21.4816 6.27552 17.7244 2.51838 13 2.04932V10.9999H21.9506Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L16.9948 19.4879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11 2.04932C5.94668 2.55104 2 6.81459 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999C13.6942 21.9999 15.2899 21.5786 16.6883 20.8351L11.1679 12.5546C11.0584 12.3904 11 12.1974 11 11.9999V2.04932Z" fill="currentColor"/>
<path d="M18.3514 19.7243C20.3377 18.0892 21.6823 15.7029 21.9506 12.9999H13.8685L18.3514 19.7243Z" fill="currentColor"/>
<path d="M21.9506 10.9999C21.4816 6.27552 17.7244 2.51838 13 2.04932V10.9999H21.9506Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L16.9948 19.4879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ChartPieAlt1;