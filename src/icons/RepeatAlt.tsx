import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RepeatAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.0001 17H8.00098C4.68727 17 2.00098 14.3137 2.00098 11C2.00098 7.68629 4.68727 5 8.00098 5H16.0001C19.3138 5 22.0001 7.68629 22.0001 11C22.0001 14.3137 19.3138 17 16.0001 17H14.0001M17.0001 20L14.0001 17M14.0001 17L17.0001 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00098 6C5.23955 6 3.00098 8.23858 3.00098 11C3.00098 13.7614 5.23955 16 8.00098 16H10.0001C10.5524 16 11.0001 16.4477 11.0001 17C11.0001 17.5523 10.5524 18 10.0001 18H8.00098C4.13498 18 1.00098 14.866 1.00098 11C1.00098 7.13401 4.13498 4 8.00098 4H16.0001C19.8661 4 23.0001 7.13401 23.0001 11C23.0001 14.7308 20.0815 17.7799 16.403 17.9886L17.7072 19.2929C18.0978 19.6834 18.0978 20.3166 17.7072 20.7071C17.3167 21.0976 16.6836 21.0976 16.293 20.7071L13.293 17.7071C12.9025 17.3166 12.9025 16.6834 13.293 16.2929L16.293 13.2929C16.6836 12.9024 17.3167 12.9024 17.7072 13.2929C18.0978 13.6834 18.0978 14.3166 17.7072 14.7071L16.4328 15.9815C18.9917 15.7622 21.0001 13.6157 21.0001 11C21.0001 8.23858 18.7616 6 16.0001 6H8.00098Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.0001 17H8.00098C4.68727 17 2.00098 14.3137 2.00098 11C2.00098 7.68629 4.68727 5 8.00098 5H16.0001C19.3138 5 22.0001 7.68629 22.0001 11C22.0001 14.3137 19.3138 17 16.0001 17H14.0001M17.0001 20L14.0001 17M14.0001 17L17.0001 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.00098 6C5.23955 6 3.00098 8.23858 3.00098 11C3.00098 13.7614 5.23955 16 8.00098 16H10.0001C10.5524 16 11.0001 16.4477 11.0001 17C11.0001 17.5523 10.5524 18 10.0001 18H8.00098C4.13498 18 1.00098 14.866 1.00098 11C1.00098 7.13401 4.13498 4 8.00098 4H16.0001C19.8661 4 23.0001 7.13401 23.0001 11C23.0001 14.866 19.8661 18 16.0001 18H14.0001C13.4479 18 13.0001 17.5523 13.0001 17C13.0001 16.4477 13.4479 16 14.0001 16H16.0001C18.7616 16 21.0001 13.7614 21.0001 11C21.0001 8.23858 18.7616 6 16.0001 6H8.00098Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 13.2929C18.0976 13.6834 18.0976 14.3166 17.7071 14.7071L15.4142 17L17.7071 19.2929C18.0976 19.6834 18.0976 20.3166 17.7071 20.7071C17.3166 21.0976 16.6834 21.0976 16.2929 20.7071L13.2929 17.7071C12.9024 17.3166 12.9024 16.6834 13.2929 16.2929L16.2929 13.2929C16.6834 12.9024 17.3166 12.9024 17.7071 13.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.0001 17H8.00098C4.68727 17 2.00098 14.3137 2.00098 11C2.00098 7.68629 4.68727 5 8.00098 5H16.0001C19.3138 5 22.0001 7.68629 22.0001 11C22.0001 14.3137 19.3138 17 16.0001 17H14.0001M17.0001 20L14.0001 17M14.0001 17L17.0001 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RepeatAlt;