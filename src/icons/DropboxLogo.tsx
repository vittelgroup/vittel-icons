import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DropboxLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 9L4 12L8 15L12 12M8 9L12 12M8 9L12 6M8 9L4 6L8 3L12 6M12 12L16 9M12 12L16 15L20 12L16 9M8 18L12 21L16 18M12 6L16 9M12 6L16 3L20 6L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.60006 17.2001C8.15823 16.8687 7.53143 16.9582 7.20006 17.4001C6.86869 17.8419 6.95823 18.4687 7.40006 18.8001L11.4001 21.8001C11.7556 22.0667 12.2445 22.0667 12.6001 21.8001L16.6001 18.8001C17.0419 18.4687 17.1314 17.8419 16.8001 17.4001C16.4687 16.9582 15.8419 16.8687 15.4001 17.2001L12.0001 19.7501L8.60006 17.2001Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 2.2C8.24444 1.93333 7.75556 1.93333 7.4 2.2L3.4 5.2C3.14819 5.38885 3 5.68524 3 6C3 6.31476 3.14819 6.61115 3.4 6.8L6.33333 9L3.4 11.2C3.14819 11.3889 3 11.6852 3 12C3 12.3148 3.14819 12.6111 3.4 12.8L7.4 15.8C7.75556 16.0667 8.24444 16.0667 8.6 15.8L12 13.25L15.4 15.8C15.7556 16.0667 16.2444 16.0667 16.6 15.8L20.6 12.8C20.8518 12.6111 21 12.3148 21 12C21 11.6852 20.8518 11.3889 20.6 11.2L17.6667 9L20.6 6.8C20.8518 6.61115 21 6.31476 21 6C21 5.68524 20.8518 5.38885 20.6 5.2L16.6 2.2C16.2444 1.93333 15.7556 1.93333 15.4 2.2L12 4.75L8.6 2.2ZM8 9L12 12L16 9L12 6L8 9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M4 12L8 9L12 12L8 15L4 12Z" fill="currentColor"/>
<path d="M12 12L16 9L20 12L16 15L12 12Z" fill="currentColor"/>
<path d="M12 6L16 3L20 6L16 9L12 6Z" fill="currentColor"/>
<path d="M4 6L8 3L12 6L8 9L4 6Z" fill="currentColor"/>
<path d="M8 9L4 12L8 15L12 12M8 9L12 12M8 9L12 6M8 9L4 6L8 3L12 6M12 12L16 9M12 12L16 15L20 12L16 9M12 6L16 9M12 6L16 3L20 6L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</g>
<path d="M8 9L4 12L8 15L12 12M8 9L12 12M8 9L12 6M8 9L4 6L8 3L12 6M12 12L16 9M12 12L16 15L20 12L16 9M8 18L12 21L16 18M12 6L16 9M12 6L16 3L20 6L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.6 2.2C8.24444 1.93333 7.75556 1.93333 7.4 2.2L3.4 5.2C3.14819 5.38885 3 5.68524 3 6C3 6.31476 3.14819 6.61115 3.4 6.8L6.33333 9L3.4 11.2C3.14819 11.3889 3 11.6852 3 12C3 12.3148 3.14819 12.6111 3.4 12.8L7.4 15.8C7.75556 16.0667 8.24444 16.0667 8.6 15.8L12 13.25L15.4 15.8C15.7556 16.0667 16.2444 16.0667 16.6 15.8L20.6 12.8C20.8518 12.6111 21 12.3148 21 12C21 11.6852 20.8518 11.3889 20.6 11.2L17.6667 9L20.6 6.8C20.8518 6.61115 21 6.31476 21 6C21 5.68524 20.8518 5.38885 20.6 5.2L16.6 2.2C16.2444 1.93333 15.7556 1.93333 15.4 2.2L12 4.75L8.6 2.2ZM8 9L12 12L16 9L12 6L8 9Z" fill="currentColor"/>
<path d="M8.60006 17.2001C8.15823 16.8687 7.53143 16.9582 7.20006 17.4001C6.86869 17.8419 6.95823 18.4687 7.40006 18.8001L11.4001 21.8001C11.7556 22.0667 12.2445 22.0667 12.6001 21.8001L16.6001 18.8001C17.0419 18.4687 17.1314 17.8419 16.8001 17.4001C16.4687 16.9582 15.8419 16.8687 15.4001 17.2001L12.0001 19.7501L8.60006 17.2001Z" fill="currentColor"/>
<path d="M8 9L12 12L16 9L12 6L8 9Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 9L4 12L8 15L12 12M8 9L12 12M8 9L12 6M8 9L4 6L8 3L12 6M12 12L16 9M12 12L16 15L20 12L16 9M8 18L12 21L16 18M12 6L16 9M12 6L16 3L20 6L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default DropboxLogo;