import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DoNotEnter: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M7 11.6C7 11.0399 7 10.7599 7.10899 10.546C7.20487 10.3578 7.35785 10.2049 7.54601 10.109C7.75992 10 8.03995 10 8.6 10H15.4C15.9601 10 16.2401 10 16.454 10.109C16.6422 10.2049 16.7951 10.3578 16.891 10.546C17 10.7599 17 11.0399 17 11.6V12.4C17 12.9601 17 13.2401 16.891 13.454C16.7951 13.6422 16.6422 13.7951 16.454 13.891C16.2401 14 15.9601 14 15.4 14H8.6C8.03995 14 7.75992 14 7.54601 13.891C7.35785 13.7951 7.20487 13.6422 7.10899 13.454C7 13.2401 7 12.9601 7 12.4V11.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.5 10.5C6.22386 10.5 6 10.7239 6 11V13C6 13.2761 6.22386 13.5 6.5 13.5H17.5C17.7761 13.5 18 13.2761 18 13V11C18 10.7239 17.7761 10.5 17.5 10.5H6.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM7.10899 10.546C7 10.7599 7 11.0399 7 11.6V12.4C7 12.9601 7 13.2401 7.10899 13.454C7.20487 13.6422 7.35785 13.7951 7.54601 13.891C7.75992 14 8.03995 14 8.6 14H15.4C15.9601 14 16.2401 14 16.454 13.891C16.6422 13.7951 16.7951 13.6422 16.891 13.454C17 13.2401 17 12.9601 17 12.4V11.6C17 11.0399 17 10.7599 16.891 10.546C16.7951 10.3578 16.6422 10.2049 16.454 10.109C16.2401 10 15.9601 10 15.4 10H8.6C8.03995 10 7.75992 10 7.54601 10.109C7.35785 10.2049 7.20487 10.3578 7.10899 10.546Z" fill="currentColor"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M7 11.6C7 11.0399 7 10.7599 7.10899 10.546C7.20487 10.3578 7.35785 10.2049 7.54601 10.109C7.75992 10 8.03995 10 8.6 10H15.4C15.9601 10 16.2401 10 16.454 10.109C16.6422 10.2049 16.7951 10.3578 16.891 10.546C17 10.7599 17 11.0399 17 11.6V12.4C17 12.9601 17 13.2401 16.891 13.454C16.7951 13.6422 16.6422 13.7951 16.454 13.891C16.2401 14 15.9601 14 15.4 14H8.6C8.03995 14 7.75992 14 7.54601 13.891C7.35785 13.7951 7.20487 13.6422 7.10899 13.454C7 13.2401 7 12.9601 7 12.4V11.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 10.5C6.22386 10.5 6 10.7239 6 11V13C6 13.2761 6.22386 13.5 6.5 13.5H17.5C17.7761 13.5 18 13.2761 18 13V11C18 10.7239 17.7761 10.5 17.5 10.5H6.5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path d="M7 11.6C7 11.0399 7 10.7599 7.10899 10.546C7.20487 10.3578 7.35785 10.2049 7.54601 10.109C7.75992 10 8.03995 10 8.6 10H15.4C15.9601 10 16.2401 10 16.454 10.109C16.6422 10.2049 16.7951 10.3578 16.891 10.546C17 10.7599 17 11.0399 17 11.6V12.4C17 12.9601 17 13.2401 16.891 13.454C16.7951 13.6422 16.6422 13.7951 16.454 13.891C16.2401 14 15.9601 14 15.4 14H8.6C8.03995 14 7.75992 14 7.54601 13.891C7.35785 13.7951 7.20487 13.6422 7.10899 13.454C7 13.2401 7 12.9601 7 12.4V11.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default DoNotEnter;