import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MessengerLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 13.5L10.5 10.5L13.5 13.5L16.5 10.5M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4983 3.36614 14.9111 4.01383 16.1538L3 21L7.84615 19.9862C9.08886 20.6339 10.5017 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00002 12C2.00002 6.47715 6.47717 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22C10.4669 22 9.01208 21.6543 7.71137 21.036L3.20479 21.9788C2.87445 22.0479 2.53155 21.9457 2.29291 21.7071C2.05427 21.4685 1.9521 21.1256 2.02121 20.7952L2.964 16.2886C2.34568 14.9879 2.00002 13.5331 2.00002 12ZM11.2071 9.79289C10.8166 9.40237 10.1834 9.40237 9.79289 9.79289L6.79289 12.7929C6.40237 13.1834 6.40237 13.8166 6.79289 14.2071C7.18342 14.5976 7.81658 14.5976 8.20711 14.2071L10.5 11.9142L12.7929 14.2071C13.1834 14.5976 13.8166 14.5976 14.2071 14.2071L17.2071 11.2071C17.5976 10.8166 17.5976 10.1834 17.2071 9.79289C16.8166 9.40237 16.1834 9.40237 15.7929 9.79289L13.5 12.0858L11.2071 9.79289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 12C21 16.9706 16.9706 21 12 21C10.5017 21 9.08886 20.6339 7.84615 19.9862L3 21L4.01383 16.1538C3.36614 14.9111 3 13.4983 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor"/>
<path d="M7.5 13.5L10.5 10.5L13.5 13.5L16.5 10.5M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4983 3.36614 14.9111 4.01383 16.1538L3 21L7.84615 19.9862C9.08886 20.6339 10.5017 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C6.47717 2 2.00002 6.47715 2.00002 12C2.00002 13.5331 2.34568 14.9879 2.964 16.2886L2.02121 20.7952C1.9521 21.1256 2.05427 21.4685 2.29291 21.7071C2.53155 21.9457 2.87445 22.0479 3.20479 21.9788L7.71137 21.036C9.01208 21.6543 10.4669 22 12 22C17.5229 22 22 17.5228 22 12C22 6.47715 17.5229 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.79289 9.79289C10.1834 9.40237 10.8166 9.40237 11.2071 9.79289L13.5 12.0858L15.7929 9.79289C16.1834 9.40237 16.8166 9.40237 17.2071 9.79289C17.5976 10.1834 17.5976 10.8166 17.2071 11.2071L14.2071 14.2071C13.8166 14.5976 13.1834 14.5976 12.7929 14.2071L10.5 11.9142L8.20711 14.2071C7.81658 14.5976 7.18342 14.5976 6.79289 14.2071C6.40237 13.8166 6.40237 13.1834 6.79289 12.7929L9.79289 9.79289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 13.5L10.5 10.5L13.5 13.5L16.5 10.5M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4983 3.36614 14.9111 4.01383 16.1538L3 21L7.84615 19.9862C9.08886 20.6339 10.5017 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default MessengerLogo;