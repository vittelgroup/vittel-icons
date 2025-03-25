import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowNarrowCircleBrokenDownLeft: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8.34315V14M10 14H15.5M10 14L18.364 5.63604M13.7568 3.17216C10.9096 2.60828 7.84251 3.42957 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C20.5704 16.1575 21.3917 13.0904 20.8278 10.2432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.59873 21.1536 7.39514 19.7429 5.67126L12.4142 12.9999H15.5C16.0523 12.9999 16.5 13.4477 16.5 13.9999C16.5 14.5522 16.0523 14.9999 15.5 14.9999H10C9.44771 14.9999 9 14.5522 9 13.9999V8.49995C9 7.94766 9.44771 7.49995 10 7.49995C10.5523 7.49995 11 7.94766 11 8.49995V11.5857L18.3287 4.25705C16.6049 2.84636 14.4013 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M10 8.34315V14M10 14H15.5M10 14L18.364 5.63604M13.7568 3.17216C10.9096 2.60828 7.84251 3.42957 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C20.5704 16.1575 21.3917 13.0904 20.8278 10.2432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path d="M19.7429 5.67129L12.4142 13H15.5C16.0523 13 16.5 13.4477 16.5 14C16.5 14.5523 16.0523 15 15.5 15H10C9.44772 15 9 14.5523 9 14V8.34312C9 7.79084 9.44772 7.34312 10 7.34312C10.5523 7.34312 11 7.79084 11 8.34312V11.5858L18.3287 4.25708C18.8458 4.68024 19.3198 5.15418 19.7429 5.67129Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 8.34315V14M10 14H15.5M10 14L18.364 5.63604M13.7568 3.17216C10.9096 2.60828 7.84251 3.42957 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C20.5704 16.1575 21.3917 13.0904 20.8278 10.2432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowNarrowCircleBrokenDownLeft;