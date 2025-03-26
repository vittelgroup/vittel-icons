import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ReceiptAlt2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 9H15M9 12H15M9 15H15M5 3V21L8 19L10 21L12 19L14 21L16 19L19 21V3L16 5L14 3L12 5L10 3L8 5L5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5547 2.16795C5.24784 1.96338 4.8533 1.94431 4.52814 2.11833C4.20298 2.29235 4 2.63121 4 3V21C4 21.3688 4.20298 21.7077 4.52814 21.8817C4.8533 22.0557 5.24784 22.0366 5.5547 21.8321L7.87258 20.2868L9.29289 21.7071C9.68342 22.0976 10.3166 22.0976 10.7071 21.7071L12 20.4142L13.2929 21.7071C13.6834 22.0976 14.3166 22.0976 14.7071 21.7071L16.1274 20.2868L18.4453 21.8321C18.7522 22.0366 19.1467 22.0557 19.4719 21.8817C19.797 21.7077 20 21.3688 20 21V3C20 2.63121 19.797 2.29235 19.4719 2.11833C19.1467 1.94431 18.7522 1.96338 18.4453 2.16795L16.1274 3.71321L14.7071 2.29289C14.3166 1.90237 13.6834 1.90237 13.2929 2.29289L12 3.58579L10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L7.87258 3.71321L5.5547 2.16795ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H8Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 3L8 5L10 3L12 5L14 3L16 5L19 3V21L16 19L14 21L12 19L10 21L8 19L5 21V3Z" fill="currentColor"/>
<path d="M9 9H15M9 12H15M9 15H15M5 3V21L8 19L10 21L12 19L14 21L16 19L19 21V3L16 5L14 3L12 5L10 3L8 5L5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5.5547 2.16795C5.24784 1.96338 4.8533 1.94431 4.52814 2.11833C4.20298 2.29235 4 2.63121 4 3V21C4 21.3688 4.20298 21.7077 4.52814 21.8817C4.8533 22.0557 5.24784 22.0366 5.5547 21.8321L7.87258 20.2868L9.29289 21.7071C9.68342 22.0976 10.3166 22.0976 10.7071 21.7071L12 20.4142L13.2929 21.7071C13.6834 22.0976 14.3166 22.0976 14.7071 21.7071L16.1274 20.2868L18.4453 21.8321C18.7522 22.0366 19.1467 22.0557 19.4719 21.8817C19.797 21.7077 20 21.3688 20 21V3C20 2.63121 19.797 2.29235 19.4719 2.11833C19.1467 1.94431 18.7522 1.96338 18.4453 2.16795L16.1274 3.71321L14.7071 2.29289C14.3166 1.90237 13.6834 1.90237 13.2929 2.29289L12 3.58579L10.7071 2.29289C10.3166 1.90237 9.68342 1.90237 9.29289 2.29289L7.87258 3.71321L5.5547 2.16795Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H8ZM7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H8Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 9H15M9 12H15M9 15H15M5 3V21L8 19L10 21L12 19L14 21L16 19L19 21V3L16 5L14 3L12 5L10 3L8 5L5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ReceiptAlt2;