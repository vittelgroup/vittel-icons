import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Farm: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 12V21M9 12L10.8462 7L15 5L19.1538 7L21 12V21H9M9 12V8M9 21H3V6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6V8M9 8H3M13 15H17V21H13V15ZM14.5 10V11H15.5V10H14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 2C3.79086 2 2 3.79086 2 6V7H7.64819L8.03186 5.96088C8.30133 5.23107 8.84376 4.63449 9.54471 4.297L9.60628 4.26735C8.96059 2.92586 7.58842 2 6 2Z" fill="currentColor"/>
<path d="M2 9H6.90973L6.18571 10.9609C6.06288 11.2936 6 11.6454 6 12V21C6 21.3506 6.06015 21.6872 6.17071 22H3.6C3.03995 22 2.75992 22 2.54601 21.891C2.35785 21.7951 2.20487 21.6422 2.10899 21.454C2 21.2401 2 20.9601 2 20.4V9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4338 4.099C15.1597 3.967 14.8403 3.967 14.5662 4.099L10.4123 6.099C10.1787 6.2115 9.99788 6.41036 9.90806 6.65363L8.0619 11.6536C8.02096 11.7645 8 11.8818 8 12V21C8 21.5523 8.44772 22 9 22H13V17C13 15.8954 13.8954 15 15 15C16.1046 15 17 15.8954 17 17V22H21C21.5523 22 22 21.5523 22 21V12C22 11.8818 21.979 11.7645 21.9381 11.6536L20.0919 6.65363C20.0021 6.41036 19.8213 6.2115 19.5877 6.099L15.4338 4.099ZM13.5 9C13.5 8.44772 13.9477 8 14.5 8H15.5C16.0523 8 16.5 8.44772 16.5 9V10C16.5 10.5523 16.0523 11 15.5 11H14.5C13.9477 11 13.5 10.5523 13.5 10V9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 12V21H17V15H13V21H9H3V8L9 8V12L10.8462 7L15 5L19.1538 7L21 12Z" fill="currentColor"/>
<path d="M9 12V21M9 12L10.8462 7L15 5L19.1538 7L21 12V21H9M9 12V8M9 21H3V6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6V8M9 8H3M13 15H17V21H13V15ZM14.5 10V11H15.5V10H14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M15.4338 4.099C15.1597 3.967 14.8403 3.967 14.5662 4.099L10.4123 6.099C10.1787 6.2115 9.99788 6.41036 9.90806 6.65363L8.0619 11.6536C8.02096 11.7645 8 11.8818 8 12V21C8 21.5523 8.44772 22 9 22H13V17C13 15.8954 13.8954 15 15 15C16.1046 15 17 15.8954 17 17V22H21C21.5523 22 22 21.5523 22 21V12C22 11.8818 21.979 11.7645 21.9381 11.6536L20.0919 6.65363C20.0021 6.41036 19.8213 6.2115 19.5877 6.099L15.4338 4.099Z" fill="currentColor"/>
<path d="M2 6C2 3.79086 3.79086 2 6 2C7.58842 2 8.96059 2.92586 9.60628 4.26735L9.54471 4.297C8.84376 4.63449 8.30133 5.23107 8.03186 5.96088L7.64819 7H2V6Z" fill="currentColor"/>
<path d="M6.90973 9H2V20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H6.17071C6.06015 21.6872 6 21.3506 6 21V12C6 11.6454 6.06288 11.2936 6.18571 10.9609L6.90973 9Z" fill="currentColor"/>
<path d="M14.5 8C13.9477 8 13.5 8.44772 13.5 9V10C13.5 10.5523 13.9477 11 14.5 11H15.5C16.0523 11 16.5 10.5523 16.5 10V9C16.5 8.44772 16.0523 8 15.5 8H14.5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 12V21M9 12L10.8462 7L15 5L19.1538 7L21 12V21H9M9 12V8M9 21H3V6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6V8M9 8H3M13 15H17V21H13V15ZM14.5 10V11H15.5V10H14.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Farm;