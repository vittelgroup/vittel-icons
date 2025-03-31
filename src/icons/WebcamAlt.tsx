import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const WebcamAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17ZM12 17V21M7 21H12M12 21H17M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 17.9381C16.9463 17.446 20 14.0796 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.0796 7.05369 17.446 11 17.9381V20H7C6.44772 20 6 20.4477 6 21C6 21.5523 6.44771 22 7 22H17C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20H13V17.9381ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17ZM12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="currentColor"/>
<path d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17ZM12 17V21M7 21H12M12 21H17M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" fill="currentColor"/>
<path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" fill="currentColor"/>
<path d="M12 18C12.3387 18 12.6724 17.979 13 17.9381V20H17C17.5523 20 18 20.4477 18 21C18 21.5523 17.5523 22 17 22H7C6.44771 22 6 21.5523 6 21C6 20.4477 6.44772 20 7 20H11V17.9381C11.3276 17.979 11.6613 18 12 18Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17ZM12 17V21M7 21H12M12 21H17M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default WebcamAlt;