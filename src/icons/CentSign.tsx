import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CentSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 5V3M13 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 2C13.5523 2 14 2.44772 14 3V4.08407C15.8889 4.36448 17.5575 5.32905 18.7565 6.71577C19.1177 7.13355 19.0718 7.76505 18.654 8.12627C18.2363 8.48748 17.6048 8.44163 17.2435 8.02385C16.1663 6.77793 14.5988 6 12.8571 6C9.64167 6 7 8.66675 7 12C7 15.3332 9.64167 18 12.8571 18C14.5988 18 16.1663 17.2221 17.2435 15.9762C17.6048 15.5584 18.2363 15.5125 18.654 15.8737C19.0718 16.2349 19.1177 16.8665 18.7565 17.2842C17.5575 18.6709 15.8889 19.6355 14 19.9159V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V19.9531C8.04872 19.5176 5 16.1063 5 12C5 7.8937 8.04872 4.48236 12 4.04693V3C12 2.44772 12.4477 2 13 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 5V3M13 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M14 3C14 2.44772 13.5523 2 13 2C12.4477 2 12 2.44772 12 3V4.04693C12.2814 4.01592 12.5674 4 12.8571 4C13.2454 4 13.627 4.0287 14 4.08407V3Z" fill="currentColor"/>
<path d="M12 19.9531C12.2814 19.9841 12.5674 20 12.8571 20C13.2454 20 13.627 19.9713 14 19.9159V21C14 21.5523 13.5523 22 13 22C12.4477 22 12 21.5523 12 21V19.9531Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8571 6C9.64167 6 7 8.66675 7 12C7 15.3332 9.64167 18 12.8571 18C14.5988 18 16.1663 17.2221 17.2435 15.9762C17.6048 15.5584 18.2363 15.5125 18.654 15.8737C19.0718 16.2349 19.1177 16.8665 18.7565 17.2842C17.3207 18.9448 15.2116 20 12.8571 20C8.49842 20 5 16.3987 5 12C5 7.60126 8.49842 4 12.8571 4C15.2116 4 17.3207 5.05522 18.7565 6.71577C19.1177 7.13355 19.0718 7.76505 18.654 8.12627C18.2363 8.48748 17.6048 8.44163 17.2435 8.02385C16.1663 6.77793 14.5988 6 12.8571 6Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 7.36981C16.7435 5.91657 14.9052 5 12.8571 5C9.07005 5 6 8.13401 6 12C6 15.866 9.07005 19 12.8571 19C14.9052 19 16.7435 18.0834 18 16.6302M13 5V3M13 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CentSign;