import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TreePlus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 10L5 15H8L4 21H20L16 15H19L15 10M12 3V9M9 6H15M11 14H11.01M14 18H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V5H9C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H11V9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V7H15C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5H13V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.54661 8.96594L4.21913 14.3753C3.979 14.6755 3.93218 15.0867 4.0987 15.4332C4.26522 15.7796 4.6156 16 5 16H6.13148L3.16795 20.4453C2.96338 20.7521 2.94431 21.1467 3.11833 21.4718C3.29235 21.797 3.63121 22 4 22H20C20.3688 22 20.7077 21.797 20.8817 21.4718C21.0557 21.1467 21.0366 20.7521 20.8321 20.4453L17.8685 16H19C19.3844 16 19.7348 15.7796 19.9013 15.4332C20.0678 15.0867 20.021 14.6755 19.7809 14.3753L15.4534 8.96594C15.3055 8.98836 15.1541 8.99998 15 8.99998C15 10.6568 13.6569 12 12 12C10.3431 12 9 10.6568 9 8.99998C8.84588 8.99998 8.69447 8.98836 8.54661 8.96594ZM10 14C10 13.4477 10.4477 13 11 13H11.01C11.5623 13 12.01 13.4477 12.01 14C12.01 14.5523 11.5623 15 11.01 15H11C10.4477 15 10 14.5523 10 14ZM13 18C13 17.4477 13.4477 17 14 17H14.01C14.5623 17 15.01 17.4477 15.01 18C15.01 18.5523 14.5623 19 14.01 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 21H20L16 15H19L12 6.25L5 15H8L4 21Z" fill="currentColor"/>
<path d="M9 10L5 15H8L4 21H20L16 15H19L15 10M12 3V9M9 6H15M11 14H11.01M14 18H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.54661 8.96594L4.21913 14.3753C3.979 14.6755 3.93218 15.0867 4.0987 15.4332C4.26522 15.7796 4.6156 16 5 16H6.13148L3.16795 20.4453C2.96338 20.7521 2.94431 21.1467 3.11833 21.4718C3.29235 21.797 3.63121 22 4 22H20C20.3688 22 20.7077 21.797 20.8817 21.4718C21.0557 21.1467 21.0366 20.7521 20.8321 20.4453L17.8685 16H19C19.3844 16 19.7348 15.7796 19.9013 15.4332C20.0678 15.0867 20.021 14.6755 19.7809 14.3753L15.4534 8.96594C15.3055 8.98836 15.1541 8.99998 15 8.99998C15 10.6568 13.6569 12 12 12C10.3431 12 9 10.6568 9 8.99998C8.84588 8.99998 8.69447 8.98836 8.54661 8.96594ZM10 14C10 13.4477 10.4477 13 11 13H11.01C11.5623 13 12.01 13.4477 12.01 14C12.01 14.5523 11.5623 15 11.01 15H11C10.4477 15 10 14.5523 10 14ZM13 18C13 17.4477 13.4477 17 14 17H14.01C14.5623 17 15.01 17.4477 15.01 18C15.01 18.5523 14.5623 19 14.01 19H14C13.4477 19 13 18.5523 13 18Z" fill="currentColor"/>
<path d="M12 2C12.5523 2 13 2.44772 13 3V5H15C15.5523 5 16 5.44772 16 6C16 6.55228 15.5523 7 15 7H13V9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9V7H9C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5H11V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15H11.01C11.5623 15 12.01 14.5523 12.01 14C12.01 13.4477 11.5623 13 11.01 13H11Z" fill="currentColor"/>
<path d="M14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19H14.01C14.5623 19 15.01 18.5523 15.01 18C15.01 17.4477 14.5623 17 14.01 17H14Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 10L5 15H8L4 21H20L16 15H19L15 10M12 3V9M9 6H15M11 14H11.01M14 18H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TreePlus;