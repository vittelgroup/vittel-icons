import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TughrikSign: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12.5L16 9M8 16.5L16 13M12 20V4M12 4H5M12 4H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C4 3.44772 4.44772 3 5 3H19C19.5523 3 20 3.44772 20 4C20 4.55228 19.5523 5 19 5H13V9.22098L15.5992 8.08384C16.1052 7.86248 16.6948 8.0932 16.9162 8.59918C17.1375 9.10516 16.9068 9.69479 16.4008 9.91616L13 11.404V13.221L15.5992 12.0838C16.1052 11.8625 16.6948 12.0932 16.9162 12.5992C17.1375 13.1052 16.9068 13.6948 16.4008 13.9162L13 15.404V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V16.279L8.40082 17.4162C7.89484 17.6375 7.30521 17.4068 7.08384 16.9008C6.86248 16.3948 7.0932 15.8052 7.59918 15.5838L11 14.096V12.279L8.40082 13.4162C7.89484 13.6375 7.30521 13.4068 7.08384 12.9008C6.86248 12.3948 7.0932 11.8052 7.59918 11.5838L11 10.096V5H5C4.44772 5 4 4.55228 4 4Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12.5L16 9M8 16.5L16 13M12 20V4M12 4H5M12 4H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5H11V10.0963L13 9.22135V5H19C19.5523 5 20 4.55228 20 4C20 3.44772 19.5523 3 19 3H5Z" fill="currentColor"/>
<path d="M13 11.4044L11 12.2794V14.0963L13 13.2213V11.4044Z" fill="currentColor"/>
<path d="M13 15.4044L11 16.2794V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V15.4044Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9164 8.59919C17.1378 9.10517 16.9071 9.6948 16.4011 9.91617L8.40107 13.4162C7.89509 13.6375 7.30546 13.4068 7.0841 12.9008C6.86273 12.3948 7.09345 11.8052 7.59943 11.5839L15.5994 8.08385C16.1054 7.86249 16.695 8.09321 16.9164 8.59919ZM16.9164 12.5992C17.1378 13.1052 16.9071 13.6948 16.4011 13.9162L8.40107 17.4162C7.89509 17.6375 7.30546 17.4068 7.0841 16.9008C6.86273 16.3948 7.09345 15.8052 7.59943 15.5839L15.5994 12.0839C16.1054 11.8625 16.695 12.0932 16.9164 12.5992Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12.5L16 9M8 16.5L16 13M12 20V4M12 4H5M12 4H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TughrikSign;