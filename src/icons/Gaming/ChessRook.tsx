import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ChessRook: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 14V11L8 9V5H16V9L15 11V14M12 7V5M8 19L9.14286 17H14.8571L16 19H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 4H8C7.44772 4 7 4.44772 7 5V9C7 9.15525 7.03615 9.30836 7.10557 9.44721L8 11.2361V14C8 14.5523 8.44772 15 9 15H15C15.5523 15 16 14.5523 16 14V11.2361L16.8944 9.44721C16.9639 9.30836 17 9.15525 17 9V5C17 4.44772 16.5523 4 16 4H13V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V4Z" fill="currentColor"/>
<path d="M8.27461 16.5039C8.45266 16.1923 8.784 16 9.14286 16H14.8571C15.216 16 15.5473 16.1923 15.7254 16.5039L16.8682 18.5039C17.0451 18.8134 17.0438 19.1936 16.8649 19.5019C16.686 19.8102 16.3565 20 16 20H8C7.64353 20 7.31401 19.8102 7.13509 19.5019C6.95617 19.1936 6.9549 18.8134 7.13176 18.5039L8.27461 16.5039Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M9.14286 17L8 19H16L14.8571 17H9.14286Z" fill="currentColor"/>
<path d="M9 14V11L8 9V5H16V9L15 11V14H9Z" fill="currentColor"/>
</g>
<path d="M9 14V11L8 9V5H16V9L15 11V14M12 7V5M8 19L9.14286 17H14.8571L16 19H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8 4C7.44772 4 7 4.44772 7 5V9C7 9.15525 7.03615 9.30836 7.10557 9.44721L8 11.2361V14C8 14.5523 8.44772 15 9 15H15C15.5523 15 16 14.5523 16 14V11.2361L16.8944 9.44721C16.9639 9.30836 17 9.15525 17 9V5C17 4.44772 16.5523 4 16 4H8Z" fill="currentColor"/>
<path d="M13 4V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V4H13Z" fill="currentColor"/>
<path d="M9.14286 16C8.784 16 8.45266 16.1923 8.27461 16.5039L7.13176 18.5039C6.9549 18.8134 6.95617 19.1936 7.13509 19.5019C7.31401 19.8102 7.64353 20 8 20H16C16.3565 20 16.686 19.8102 16.8649 19.5019C17.0438 19.1936 17.0451 18.8134 16.8682 18.5039L15.7254 16.5039C15.5473 16.1923 15.216 16 14.8571 16H9.14286Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 14V11L8 9V5H16V9L15 11V14M12 7V5M8 19L9.14286 17H14.8571L16 19H8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default ChessRook;