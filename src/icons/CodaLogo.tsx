import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CodaLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H4V20H20V15.3542C19.2039 16.0667 18.1525 16.5 17 16.5C14.5147 16.5 12.5 14.4853 12.5 12C12.5 9.51472 14.5147 7.5 17 7.5C18.1525 7.5 19.2039 7.93328 20 8.64584V4Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V15.3542C21 14.9597 20.7682 14.6022 20.4081 14.4412C20.048 14.2803 19.627 14.346 19.3331 14.609C18.7132 15.1638 17.8971 15.5 17 15.5C15.067 15.5 13.5 13.933 13.5 12C13.5 10.067 15.067 8.5 17 8.5C17.8971 8.5 18.7132 8.83617 19.3331 9.39097C19.627 9.65401 20.048 9.71974 20.4081 9.55878C20.7682 9.39782 21 9.04025 21 8.64584V4C21 3.44772 20.5523 3 20 3H4Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M20 4H4V20H20V15.3542C19.2039 16.0667 18.1525 16.5 17 16.5C14.5147 16.5 12.5 14.4853 12.5 12C12.5 9.51472 14.5147 7.5 17 7.5C18.1525 7.5 19.2039 7.93328 20 8.64584V4Z" fill="currentColor"/>
<path d="M20 4H4V20H20V15.3542C19.2039 16.0667 18.1525 16.5 17 16.5C14.5147 16.5 12.5 14.4853 12.5 12C12.5 9.51472 14.5147 7.5 17 7.5C18.1525 7.5 19.2039 7.93328 20 8.64584V4Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M5 19V5H19V6.87523C18.3799 6.63305 17.7052 6.5 17 6.5C13.9624 6.5 11.5 8.96243 11.5 12C11.5 15.0376 13.9624 17.5 17 17.5C17.7052 17.5 18.3799 17.3669 19 17.1248V19H5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8.64584C21 9.04025 20.7682 9.39782 20.4081 9.55878C20.048 9.71974 19.627 9.65401 19.3331 9.39097C18.7132 8.83617 17.8971 8.5 17 8.5C15.067 8.5 13.5 10.067 13.5 12C13.5 13.933 15.067 15.5 17 15.5C17.8971 15.5 18.7132 15.1638 19.3331 14.609C19.627 14.346 20.048 14.2803 20.4081 14.4412C20.7682 14.6022 21 14.9597 21 15.3542V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM5 5V19H19V17.1248C18.3799 17.3669 17.7052 17.5 17 17.5C13.9624 17.5 11.5 15.0376 11.5 12C11.5 8.96243 13.9624 6.5 17 6.5C17.7052 6.5 18.3799 6.63305 19 6.87523V5H5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20 4H4V20H20V15.3542C19.2039 16.0667 18.1525 16.5 17 16.5C14.5147 16.5 12.5 14.4853 12.5 12C12.5 9.51472 14.5147 7.5 17 7.5C18.1525 7.5 19.2039 7.93328 20 8.64584V4Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CodaLogo;