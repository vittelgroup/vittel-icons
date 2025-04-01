import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TiktokLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 21C12.3137 21 15 18.3138 15 15V10C17 11.5 19 12 21 12V8C18 8 15 5.5 15 3H11V15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 14.2597 7.4022 13.6134 8 13.2676V9.08301C5.16229 9.55909 3 12.0271 3 15C3 18.3138 5.68629 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2C10.4477 2 10 2.44772 10 3V15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15C8 14.6311 8.19922 14.3076 8.50073 14.1332C8.80972 13.9544 9 13.6245 9 13.2676V9.08301C9 8.78887 8.8705 8.50965 8.64597 8.31964C8.42143 8.12964 8.12463 8.04812 7.83454 8.09679C4.52312 8.65234 2 11.5306 2 15C2 18.866 5.13401 22 9 22C12.866 22 16 18.866 16 15V11.8125C17.6678 12.6818 19.342 13 21 13C21.5523 13 22 12.5523 22 12V8C22 7.44772 21.5523 7 21 7C19.7662 7 18.4869 6.47906 17.5152 5.66928C16.53 4.84825 16 3.85488 16 3C16 2.44772 15.5523 2 15 2H11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9 21C12.3137 21 15 18.3138 15 15V10C17 11.5 19 12 21 12V8C18 8 15 5.5 15 3H11V15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 14.2597 7.4022 13.6134 8 13.2676V9.08301C5.16229 9.55909 3 12.0271 3 15C3 18.3138 5.68629 21 9 21Z" fill="currentColor"/>
<path d="M9 21C12.3137 21 15 18.3138 15 15V10C17 11.5 19 12 21 12V8C18 8 15 5.5 15 3H11V15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 14.2597 7.4022 13.6134 8 13.2676V9.08301C5.16229 9.55909 3 12.0271 3 15C3 18.3138 5.68629 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M9 9.08302C9 8.78888 8.8705 8.50965 8.64597 8.31965C8.42143 8.12965 8.12463 8.04813 7.83454 8.0968C4.52312 8.65235 2 11.5306 2 15.0001C2 18.8661 5.13401 22.0001 9 22.0001C12.866 22.0001 16 18.8661 16 15.0001C16 14.4478 15.5523 14.0001 15 14.0001L11 14C10.7348 14 10.4804 14.1054 10.2929 14.2929C10.1054 14.4804 10 14.7348 10 15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15C8 14.6311 8.19922 14.3076 8.50073 14.1332C8.80972 13.9544 9 13.6246 9 13.2676V9.08302Z" fill="currentColor"/>
<path d="M11 2C10.4477 2 10 2.44772 10 3V15C10 15.5523 10.4477 16 11 16L15 16C15.2652 16.0001 15.5196 15.8947 15.7071 15.7072C15.8946 15.5196 16 15.2653 16 15V11.8125C17.6678 12.6818 19.342 13 21 13C21.5523 13 22 12.5523 22 12V8C22 7.44772 21.5523 7 21 7C19.7662 7 18.4869 6.47906 17.5152 5.66928C16.53 4.84825 16 3.85488 16 3C16 2.44772 15.5523 2 15 2H11Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 21C12.3137 21 15 18.3138 15 15V10C17 11.5 19 12 21 12V8C18 8 15 5.5 15 3H11V15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 14.2597 7.4022 13.6134 8 13.2676V9.08301C5.16229 9.55909 3 12.0271 3 15C3 18.3138 5.68629 21 9 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TiktokLogo;