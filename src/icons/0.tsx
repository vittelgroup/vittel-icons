import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const 0: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 12C18 14 17.6904 15.2275 17.1429 16.4444C16.1123 18.7347 14.1818 20 12 20C9.81818 20 7.90978 18.5884 6.85714 16.4444C6.23302 15.1732 6 14 6 12C6 10 6.23302 8.82675 6.85714 7.55556C7.90978 5.41158 9.81818 4 12 4C14.1818 4 16.0902 5.41158 17.1429 7.55556C17.767 8.82675 18 10 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C10.2843 5 8.68021 6.11141 7.75479 7.99628C7.2183 9.08898 7 10.0989 7 12C7 13.9011 7.2183 14.911 7.75479 16.0037C8.68021 17.8886 10.2843 19 12 19C13.7505 19 15.3458 18.0013 16.2309 16.0341C16.7157 14.9566 17 13.8704 17 12C17 10.0989 16.7817 9.08898 16.2452 7.99628C15.3198 6.11141 13.7157 5 12 5ZM5.9595 7.11483C7.13935 4.71175 9.35211 3 12 3C14.6479 3 16.8606 4.71175 18.0405 7.11483C18.7523 8.56453 19 9.90112 19 12C19 14.1296 18.6651 15.4984 18.0548 16.8548C16.8789 19.4682 14.6131 21 12 21C9.35211 21 7.13935 19.2882 5.9595 16.8852C5.24773 15.4355 5 14.0989 5 12C5 9.90112 5.24773 8.56453 5.9595 7.11483Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 12C18 14 17.6904 15.2275 17.1429 16.4444C16.1123 18.7347 14.1818 20 12 20C9.81818 20 7.90978 18.5884 6.85714 16.4444C6.23302 15.1732 6 14 6 12C6 10 6.23302 8.82675 6.85714 7.55556C7.90978 5.41158 9.81818 4 12 4C14.1818 4 16.0902 5.41158 17.1429 7.55556C17.767 8.82675 18 10 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 5C10.2843 5 8.68021 6.11141 7.75479 7.99628C7.2183 9.08898 7 10.0989 7 12C7 13.9011 7.2183 14.911 7.75479 16.0037C8.68021 17.8886 10.2843 19 12 19C13.7505 19 15.3458 18.0013 16.2309 16.0341C16.7157 14.9566 17 13.8704 17 12C17 10.0989 16.7817 9.08898 16.2452 7.99628C15.3198 6.11141 13.7157 5 12 5ZM5.9595 7.11483C7.13935 4.71175 9.35211 3 12 3C14.6479 3 16.8606 4.71175 18.0405 7.11483C18.7523 8.56453 19 9.90112 19 12C19 14.1296 18.6651 15.4984 18.0548 16.8548C16.8789 19.4682 14.6131 21 12 21C9.35211 21 7.13935 19.2882 5.9595 16.8852C5.24773 15.4355 5 14.0989 5 12C5 9.90112 5.24773 8.56453 5.9595 7.11483Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18 12C18 14 17.6904 15.2275 17.1429 16.4444C16.1123 18.7347 14.1818 20 12 20C9.81818 20 7.90978 18.5884 6.85714 16.4444C6.23302 15.1732 6 14 6 12C6 10 6.23302 8.82675 6.85714 7.55556C7.90978 5.41158 9.81818 4 12 4C14.1818 4 16.0902 5.41158 17.1429 7.55556C17.767 8.82675 18 10 18 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default 0;