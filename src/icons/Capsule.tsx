import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Capsule: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5005 8.50001L8.50053 15.5M11.5005 4.50001L19.5005 12.5C21.4335 14.433 21.4335 17.567 19.5005 19.5C17.5675 21.433 14.4335 21.433 12.5005 19.5L4.50053 11.5C2.56753 9.56701 2.56753 6.43301 4.50053 4.50001C6.43353 2.56701 9.56753 2.56701 11.5005 4.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7934 5.20712C9.25095 3.66464 6.75011 3.66464 5.20764 5.20712C3.66516 6.74959 3.66516 9.25043 5.20764 10.7929L8.50053 14.0858L14.0863 8.50001L10.7934 5.20712ZM12.2076 3.7929C9.88411 1.46938 6.11694 1.46938 3.79342 3.7929C1.4699 6.11642 1.4699 9.8836 3.79342 12.2071L11.7934 20.2071C14.1169 22.5306 17.8841 22.5306 20.2076 20.2071C22.5312 17.8836 22.5312 14.1164 20.2076 11.7929L12.2076 3.7929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12.5 19.5C14.433 21.433 17.567 21.433 19.5 19.5C21.433 17.567 21.433 14.433 19.5 12.5L15.5 8.50003L8.5 15.5L12.5 19.5Z" fill="currentColor"/>
<path d="M15.5005 8.50001L8.50053 15.5M11.5005 4.50001L19.5005 12.5C21.4335 14.433 21.4335 17.567 19.5005 19.5C17.5675 21.433 14.4335 21.433 12.5005 19.5L4.50053 11.5C2.56753 9.56701 2.56753 6.43301 4.50053 4.50001C6.43353 2.56701 9.56753 2.56701 11.5005 4.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M16.2076 7.79286L12.2076 3.79287C9.88411 1.46935 6.11694 1.46935 3.79342 3.79287C1.4699 6.11639 1.4699 9.88356 3.79342 12.2071L7.7934 16.2071L16.2076 7.79286Z" fill="currentColor"/>
<path d="M7.79297 16.2071L11.793 20.2071C14.1165 22.5306 17.8837 22.5306 20.2072 20.2071C22.5307 17.8836 22.5307 14.1164 20.2072 11.7929L16.2072 7.79288L7.79297 16.2071Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5005 8.50001L8.50053 15.5M11.5005 4.50001L19.5005 12.5C21.4335 14.433 21.4335 17.567 19.5005 19.5C17.5675 21.433 14.4335 21.433 12.5005 19.5L4.50053 11.5C2.56753 9.56701 2.56753 6.43301 4.50053 4.50001C6.43353 2.56701 9.56753 2.56701 11.5005 4.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Capsule;