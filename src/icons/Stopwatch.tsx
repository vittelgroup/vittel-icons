import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Stopwatch: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11V6C11 6.02071 11.0006 6.04127 11.0019 6.06166C7.05465 6.55293 4 9.91974 4 14C4 18.4183 7.58172 22 12 22C16.4183 22 20 18.4183 20 14C20 12.1513 19.3729 10.449 18.3199 9.09436L19.7071 7.70711C20.0976 7.31658 20.0976 6.68342 19.7071 6.29289C19.3166 5.90237 18.6834 5.90237 18.2929 6.29289L16.9056 7.68014C15.7986 6.81962 14.4596 6.24355 12.9981 6.06166C12.9994 6.04127 13 6.02071 13 6V4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H9ZM13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19.5 13.5C19.5 17.6421 16.1421 21 12 21C7.85786 21 4.5 17.6421 4.5 13.5C4.5 9.35786 7.85786 6 12 6C16.1421 6 19.5 9.35786 19.5 13.5Z" fill="currentColor"/>
<path d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="14" r="8" fill="#0000CC"/>
<path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H11V6.06189C11.3276 6.02104 11.6613 6 12 6C12.3387 6 12.6724 6.02104 13 6.06189V4H15C15.5523 4 16 3.55228 16 3C16 2.44772 15.5523 2 15 2H9Z" fill="currentColor"/>
<path d="M19.7071 7.70711L18.3199 9.09436C17.9092 8.56613 17.4339 8.09076 16.9056 7.68014L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711Z" fill="currentColor"/>
<path d="M12 10C11.4477 10 11 10.4477 11 11V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V11C13 10.4477 12.5523 10 12 10Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 14V11M12 6C7.85786 6 4.5 9.35786 4.5 13.5C4.5 17.6421 7.85786 21 12 21C16.1421 21 19.5 17.6421 19.5 13.5C19.5 11.5561 18.7605 9.78494 17.5474 8.4525M12 6C14.1982 6 16.1756 6.94572 17.5474 8.4525M12 6V3M19.5 6.5L17.5474 8.4525M12 3H9M12 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Stopwatch;