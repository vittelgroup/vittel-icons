import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CloudRain: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 13V20M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.4232 20.7205 14.2842 20.2413 15M12 14V21M8 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.6893 2C10.1141 2 7.90376 3.51707 6.80892 5.62107C3.91761 6.33361 2 8.87702 2 11.6493C2 13.921 3.19979 15.9083 5 17.0304V13C5 11.3431 6.34315 10 8 10C9.06226 10 9.99556 10.5521 10.5286 11.385C10.9634 11.1399 11.4653 11 12 11C12.5347 11 13.0366 11.1399 13.4714 11.385C14.0044 10.5521 14.9377 10 16 10C17.6569 10 19 11.3431 19 13V17.4C20.781 16.489 22 14.6351 22 12.4969C22 10.4783 20.9071 8.58575 19.2384 7.60789C18.7677 4.42894 16.0089 2 12.6893 2Z" fill="currentColor"/>
<path d="M9 13C9 12.4477 8.55229 12 8 12C7.44771 12 7 12.4477 7 13V20C7 20.5523 7.44771 21 8 21C8.55229 21 9 20.5523 9 20V13Z" fill="currentColor"/>
<path d="M16 12C16.5523 12 17 12.4477 17 13V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V13C15 12.4477 15.4477 12 16 12Z" fill="currentColor"/>
<path d="M12 13C12.5523 13 13 13.4477 13 14V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V14C11 13.4477 11.4477 13 12 13Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 11.6493C3 14.6044 5.41766 17 8.4 17L16.5 17C18.9853 17 21 14.9839 21 12.4969C21 10.6503 19.8893 8.94488 18.3 8.25C18.1317 5.32251 15.684 3 12.6893 3C10.3514 3 8.34694 4.48637 7.5 6.5C4.8 6.9375 3 9.20008 3 11.6493Z" fill="currentColor"/>
<path d="M16 13V20M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.4232 20.7205 14.2842 20.2413 15M12 14V21M8 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.6893 2C10.1141 2 7.90376 3.51707 6.80892 5.62107C3.91761 6.33361 2 8.87702 2 11.6493C2 13.921 3.19979 15.9083 5 17.0304V13C5 11.3431 6.34315 10 8 10C9.06226 10 9.99556 10.5521 10.5286 11.385C10.9634 11.1399 11.4653 11 12 11C12.5347 11 13.0366 11.1399 13.4714 11.385C14.0044 10.5521 14.9377 10 16 10C17.6569 10 19 11.3431 19 13V17.4C20.781 16.489 22 14.6351 22 12.4969C22 10.4783 20.9071 8.58575 19.2384 7.60789C18.7677 4.42894 16.0089 2 12.6893 2Z" fill="currentColor"/>
<path d="M9 13C9 12.4477 8.55229 12 8 12C7.44771 12 7 12.4477 7 13V20C7 20.5523 7.44771 21 8 21C8.55229 21 9 20.5523 9 20V13Z" fill="currentColor"/>
<path d="M16 12C16.5523 12 17 12.4477 17 13V20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20V13C15 12.4477 15.4477 12 16 12Z" fill="currentColor"/>
<path d="M12 13C12.5523 13 13 13.4477 13 14V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V14C11 13.4477 11.4477 13 12 13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 13V20M4 14.7519C3.37037 13.8768 3 12.8059 3 11.6493C3 9.20008 4.8 6.9375 7.5 6.5C8.34694 4.48637 10.3514 3 12.6893 3C15.684 3 18.1317 5.32251 18.3 8.25C19.8893 8.94488 21 10.6503 21 12.4969C21 13.4232 20.7205 14.2842 20.2413 15M12 14V21M8 13V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CloudRain;