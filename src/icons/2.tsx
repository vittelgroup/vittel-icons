import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 8.71429C6 5.55837 8.68629 3 12 3C15.3137 3 18 5.55837 18 8.71429C18 10.2683 16.8942 11.5274 15.7215 12.5471L6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.19208 4 7.00005 6.15607 7.00005 8.71429C7.00005 9.26657 6.55233 9.71429 6.00005 9.71429C5.44776 9.71429 5.00005 9.26657 5.00005 8.71429C5.00005 4.96067 8.18059 2 12 2C15.8195 2 19 4.96067 19 8.71429C19 10.7492 17.563 12.271 16.3777 13.3017L8.67415 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H6.00005C5.58287 22 5.20952 21.741 5.0634 21.3503C4.91727 20.9595 5.02908 20.5191 5.34389 20.2454L15.0654 11.7925C16.2254 10.7838 17 9.78735 17 8.71429C17 6.15607 14.808 4 12 4Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 8.71429C6 5.55837 8.68629 3 12 3C15.3137 3 18 5.55837 18 8.71429C18 10.2683 16.8942 11.5274 15.7215 12.5471L6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.19208 4 7.00005 6.15607 7.00005 8.71429C7.00005 9.26657 6.55233 9.71429 6.00005 9.71429C5.44776 9.71429 5.00005 9.26657 5.00005 8.71429C5.00005 4.96067 8.18059 2 12 2C15.8195 2 19 4.96067 19 8.71429C19 10.7492 17.563 12.271 16.3777 13.3017L8.67415 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H6.00005C5.58287 22 5.20952 21.741 5.0634 21.3503C4.91727 20.9595 5.02908 20.5191 5.34389 20.2454L15.0654 11.7925C16.2254 10.7838 17 9.78735 17 8.71429C17 6.15607 14.808 4 12 4Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 8.71429C6 5.55837 8.68629 3 12 3C15.3137 3 18 5.55837 18 8.71429C18 10.2683 16.8942 11.5274 15.7215 12.5471L6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default 2;