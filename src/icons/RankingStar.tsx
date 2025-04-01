import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RankingStar: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 16H6V21H3V16Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M10 13H14V21H10V13Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M18 18H21V21H18V18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 12C9.44772 12 9 12.4477 9 13V21C9 21.5523 9.44772 22 10 22H14C14.5523 22 15 21.5523 15 21V13C15 12.4477 14.5523 12 14 12H10Z" fill="currentColor"/>
<path d="M3 15C2.44772 15 2 15.4477 2 16V21C2 21.5523 2.44772 22 3 22H6C6.55228 22 7 21.5523 7 21V16C7 15.4477 6.55228 15 6 15H3Z" fill="currentColor"/>
<path d="M18 17C17.4477 17 17 17.4477 17 18V21C17 21.5523 17.4477 22 18 22H21C21.5523 22 22 21.5523 22 21V18C22 17.4477 21.5523 17 21 17H18Z" fill="currentColor"/>
<path d="M12.9555 2.70476C12.826 2.28575 12.4386 2 12.0001 2C11.5615 2 11.1741 2.28575 11.0446 2.70476L10.5542 4.2918H9.00006C8.57126 4.2918 8.19019 4.56518 8.05279 4.97137C7.91539 5.37756 8.05225 5.82614 8.393 6.08645L9.6928 7.07941L9.19054 8.70476C9.06211 9.12036 9.21708 9.57132 9.57385 9.82018C9.93062 10.069 10.4074 10.0587 10.753 9.79465L12.0001 8.842L13.2471 9.79465C13.5928 10.0587 14.0695 10.069 14.4263 9.82018C14.783 9.57132 14.938 9.12036 14.8096 8.70476L14.3073 7.07941L15.6071 6.08645C15.9479 5.82614 16.0847 5.37756 15.9473 4.97137C15.8099 4.56518 15.4289 4.2918 15.0001 4.2918H13.4459L12.9555 2.70476Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 16H6V21H3V16Z" fill="currentColor"/>
<path d="M10 13H14V21H10V13Z" fill="currentColor"/>
<path d="M18 18H21V21H18V18Z" fill="currentColor"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" fill="currentColor"/>
</g>
<path d="M3 16H6V21H3V16Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M10 13H14V21H10V13Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M18 18H21V21H18V18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M3 16H6V21H3V16Z" fill="currentColor"/>
<path d="M10 13H14V21H10V13Z" fill="currentColor"/>
<path d="M18 18H21V21H18V18Z" fill="currentColor"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" fill="currentColor"/>
</g>
<path d="M3 16H6V21H3V16Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M10 13H14V21H10V13Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M18 18H21V21H18V18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 16H6V21H3V16Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M10 13H14V21H10V13Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M18 18H21V21H18V18Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M12 3L12.7082 5.2918H15L13.1459 6.7082L13.8541 9L12 7.58359L10.1459 9L10.8541 6.7082L9 5.2918H11.2918L12 3Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RankingStar;