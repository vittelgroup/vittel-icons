import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Snooze: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H10L3 21H10M10 3H14L10 8H14M17 12H21L17 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00001 3C9.00001 2.44772 9.44772 2 10 2H14C14.3844 2 14.7348 2.22035 14.9013 2.56681C15.0678 2.91328 15.021 3.32453 14.7809 3.6247L12.0806 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H10C9.6156 9 9.26522 8.77965 9.0987 8.43319C8.93218 8.08672 8.979 7.67548 9.21914 7.37531L11.9194 4H10C9.44772 4 9.00001 3.55228 9.00001 3ZM2.00001 12C2.00001 11.4477 2.44772 11 3.00001 11H10C10.3819 11 10.7305 11.2176 10.8983 11.5606C11.0661 11.9037 11.0238 12.3125 10.7894 12.6139L5.04465 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H3.00001C2.61807 22 2.2695 21.7824 2.10169 21.4394C1.93389 21.0963 1.97617 20.6875 2.21066 20.3861L7.95537 13H3.00001C2.44772 13 2.00001 12.5523 2.00001 12ZM16 12C16 11.4477 16.4477 11 17 11H21C21.3844 11 21.7348 11.2203 21.9013 11.5668C22.0678 11.9133 22.021 12.3245 21.7809 12.6247L19.0806 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H17C16.6156 18 16.2652 17.7797 16.0987 17.4332C15.9322 17.0867 15.979 16.6755 16.2191 16.3753L18.9194 13H17C16.4477 13 16 12.5523 16 12Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H10L3 21H10M10 3H14L10 8H14M17 12H21L17 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M10 2C9.44772 2 9.00001 2.44772 9.00001 3C9.00001 3.55228 9.44772 4 10 4H11.9194L9.21914 7.37531C8.979 7.67548 8.93219 8.08672 9.09871 8.43319C9.26523 8.77965 9.6156 9 10 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H12.0806L14.7809 3.6247C15.021 3.32453 15.0678 2.91328 14.9013 2.56681C14.7348 2.22035 14.3844 2 14 2H10Z" fill="currentColor"/>
<path d="M17 11C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13H18.9194L16.2191 16.3753C15.979 16.6755 15.9322 17.0867 16.0987 17.4332C16.2652 17.7797 16.6156 18 17 18H21C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16H19.0806L21.7809 12.6247C22.021 12.3245 22.0678 11.9133 21.9013 11.5668C21.7348 11.2203 21.3844 11 21 11H17Z" fill="currentColor"/>
</g>
<path d="M2.00001 12C2.00001 11.4477 2.44772 11 3.00001 11H10C10.3819 11 10.7305 11.2176 10.8983 11.5606C11.0661 11.9037 11.0238 12.3125 10.7894 12.6139L5.04465 20H10C10.5523 20 11 20.4477 11 21C11 21.5523 10.5523 22 10 22H3.00001C2.61807 22 2.2695 21.7824 2.10169 21.4394C1.93389 21.0963 1.97617 20.6875 2.21066 20.3861L7.95537 13H3.00001C2.44772 13 2.00001 12.5523 2.00001 12Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 12H10L3 21H10M10 3H14L10 8H14M17 12H21L17 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Snooze;