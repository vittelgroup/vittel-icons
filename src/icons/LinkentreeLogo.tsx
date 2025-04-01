import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LinkentreeLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 20V15M12 10L8 14M12 10H6M12 10L8 6M12 10V4M12 10H18M12 10L16 6M12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V7.58579L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L14.4142 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H14.4142L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L9.58579 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H9.58579L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L11 7.58579V4C11 3.44772 11.4477 3 12 3ZM13 15V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="10" r="6" fill="#0000CC"/>
<path d="M12 20V15M12 10L8 14M12 10H6M12 10L8 6M12 10V4M12 10H18M12 10L16 6M12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V7.58579L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L14.4142 9H18C18.5523 9 19 9.44772 19 10C19 10.5523 18.5523 11 18 11H14.4142L16.7071 13.2929C17.0976 13.6834 17.0976 14.3166 16.7071 14.7071C16.3166 15.0976 15.6834 15.0976 15.2929 14.7071L12 11.4142L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L9.58579 11H6C5.44772 11 5 10.5523 5 10C5 9.44772 5.44772 9 6 9H9.58579L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L11 7.58579V4C11 3.44772 11.4477 3 12 3Z" fill="currentColor"/>
<path d="M13 15V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 20V15M12 10L8 14M12 10H6M12 10L8 6M12 10V4M12 10H18M12 10L16 6M12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default LinkentreeLogo;