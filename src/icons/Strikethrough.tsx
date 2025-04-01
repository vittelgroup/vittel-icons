import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Strikethrough: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M19 7.5V7.3125C19 4.93077 17.0692 3 14.6875 3H9.5C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12H14.5C16.9853 12 19 14.0147 19 16.5C19 18.9853 16.9853 21 14.5 21H9.40625C6.97274 21 5 19.0273 5 16.5938V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 7.5C4 4.46243 6.46243 2 9.5 2H14.6875C17.6215 2 20 4.37849 20 7.3125V7.5C20 8.05228 19.5523 8.5 19 8.5C18.4477 8.5 18 8.05228 18 7.5V7.3125C18 5.48306 16.5169 4 14.6875 4H9.5C7.567 4 6 5.567 6 7.5C6 9.433 7.567 11 9.5 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H18.7428C19.5282 13.9509 20 15.1704 20 16.5C20 19.5376 17.5376 22 14.5 22H9.40625C6.42046 22 4 19.5795 4 16.5938V16.5C4 15.9477 4.44772 15.5 5 15.5C5.55228 15.5 6 15.9477 6 16.5V16.5938C6 18.475 7.52503 20 9.40625 20H14.5C16.433 20 18 18.433 18 16.5C18 14.567 16.433 13 14.5 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H5.25716C4.47182 10.0491 4 8.82963 4 7.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M19 7.5V7.3125C19 4.93077 17.0692 3 14.6875 3H9.5C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12H14.5C16.9853 12 19 14.0147 19 16.5C19 18.9853 16.9853 21 14.5 21H9.40625C6.97274 21 5 19.0273 5 16.5938V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 7.5C4 4.46243 6.46243 2 9.5 2H14.6875C17.6215 2 20 4.37849 20 7.3125V7.5C20 8.05228 19.5523 8.5 19 8.5C18.4477 8.5 18 8.05228 18 7.5V7.3125C18 5.48306 16.5169 4 14.6875 4H9.5C7.567 4 6 5.567 6 7.5C6 9.433 7.567 11 9.5 11H14.5C17.5376 11 20 13.4624 20 16.5C20 19.5376 17.5376 22 14.5 22H9.40625C6.42046 22 4 19.5795 4 16.5938V16.5C4 15.9477 4.44772 15.5 5 15.5C5.55228 15.5 6 15.9477 6 16.5V16.5938C6 18.475 7.52503 20 9.40625 20H14.5C16.433 20 18 18.433 18 16.5C18 14.567 16.433 13 14.5 13H9.5C6.46243 13 4 10.5376 4 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H21M19 7.5V7.3125C19 4.93077 17.0692 3 14.6875 3H9.5C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12H14.5C16.9853 12 19 14.0147 19 16.5C19 18.9853 16.9853 21 14.5 21H9.40625C6.97274 21 5 19.0273 5 16.5938V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Strikethrough;