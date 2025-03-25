import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ArrowNarrowCircleBrokenDownRight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.34315 14H14M14 14V8.34315M14 14L5.63604 5.63604M3.17216 10.2432C2.60828 13.0904 3.42957 16.1575 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C16.1575 3.42957 13.0904 2.60828 10.2432 3.17216" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C9.59875 2 7.39517 2.84635 5.67131 4.25702L13.0007 11.5859V8.34309C13.0007 7.79081 13.4484 7.34309 14.0007 7.34309C14.553 7.34309 15.0007 7.79081 15.0007 8.34309V13.9999C15.0007 14.5522 14.553 14.9999 14.0007 14.9999H8.34383C7.79154 14.9999 7.34383 14.5522 7.34383 13.9999C7.34383 13.4477 7.79154 12.9999 8.34383 12.9999H11.5863L4.25709 5.67123C2.84638 7.39511 2 9.59871 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M8.34315 14H14M14 14V8.34315M14 14L5.63604 5.63604M3.17216 10.2432C2.60828 13.0904 3.42957 16.1575 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C16.1575 3.42957 13.0904 2.60828 10.2432 3.17216" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path d="M4.25684 5.6713C4.68 5.15419 5.15394 4.68024 5.67105 4.25708L12.9995 11.5857V8.3431C12.9995 7.79081 13.4472 7.3431 13.9995 7.3431C14.5518 7.3431 14.9995 7.79081 14.9995 8.3431V14C14.9995 14.5522 14.5518 15 13.9995 15H8.34265C7.79036 15 7.34265 14.5522 7.34265 14C7.34265 13.4477 7.79036 13 8.34265 13H11.5853L4.25684 5.6713Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.34315 14H14M14 14V8.34315M14 14L5.63604 5.63604M3.17216 10.2432C2.60828 13.0904 3.42957 16.1575 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C16.1575 3.42957 13.0904 2.60828 10.2432 3.17216" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ArrowNarrowCircleBrokenDownRight;