import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChartPieAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L5.62446 18.3524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2.04932C5.94668 2.55104 2 6.81459 2 11.9999C2 14.4012 2.84637 16.6048 4.25705 18.3287L11 11.5857V2.04932Z" fill="currentColor"/>
<path d="M5.67127 19.7429C7.39514 21.1536 9.59873 21.9999 12 21.9999C17.1853 21.9999 21.4489 18.0533 21.9506 12.9999H12.4142L5.67127 19.7429Z" fill="currentColor"/>
<path d="M21.9506 10.9999C21.4816 6.27552 17.7244 2.51838 13 2.04932V10.9999H21.9506Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L5.62446 18.3524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M11 2.04932C5.94668 2.55104 2 6.81459 2 11.9999C2 14.4012 2.84637 16.6048 4.25705 18.3287L11 11.5857V2.04932Z" fill="currentColor"/>
<path d="M5.67127 19.7429C7.39514 21.1536 9.59873 21.9999 12 21.9999C17.1853 21.9999 21.4489 18.0533 21.9506 12.9999H12.4142L5.67127 19.7429Z" fill="currentColor"/>
</g>
<path d="M21.9506 10.9999C21.4816 6.27552 17.7244 2.51838 13 2.04932V10.9999H21.9506Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3M21 12C21 7.02944 16.9706 3 12 3M21 12H12M12 3V12M12 12L5.62446 18.3524" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ChartPieAlt;