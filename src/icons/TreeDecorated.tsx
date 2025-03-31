import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TreeDecorated: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9H12.01M14 14H14.01M11 18H11.01M20 21H4L8 16H5L9 11H6L12 3L18 11H15L19 16H16L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.3148 2 12.6112 2.14819 12.8 2.4L18.8 10.4C19.0273 10.703 19.0638 11.1084 18.8944 11.4472C18.725 11.786 18.3788 12 18 12H17.0806L19.7809 15.3753C20.021 15.6755 20.0678 16.0867 19.9013 16.4332C19.7348 16.7797 19.3844 17 19 17H18.0806L20.7809 20.3753C21.021 20.6755 21.0678 21.0867 20.9013 21.4332C20.7348 21.7797 20.3844 22 20 22H4.00001C3.6156 22 3.26523 21.7797 3.09871 21.4332C2.93219 21.0867 2.979 20.6755 3.21914 20.3753L5.91938 17H5.00001C4.6156 17 4.26523 16.7797 4.09871 16.4332C3.93219 16.0867 3.979 15.6755 4.21914 15.3753L6.91938 12H6.00001C5.62124 12 5.27497 11.786 5.10558 11.4472C4.93619 11.1084 4.97275 10.703 5.20001 10.4L11.2 2.4C11.3889 2.14819 11.6853 2 12 2ZM12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10H12.01C12.5623 10 13.01 9.55228 13.01 9C13.01 8.44772 12.5623 8 12.01 8H12ZM14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15H14.01C14.5623 15 15.01 14.5523 15.01 14C15.01 13.4477 14.5623 13 14.01 13H14ZM11 17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H11.01C11.5623 19 12.01 18.5523 12.01 18C12.01 17.4477 11.5623 17 11.01 17H11Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 21H20L16 16H19L15 11H18L12 3L6 11H9L5 16H8L4 21Z" fill="currentColor"/>
<path d="M12 9H12.01M14 14H14.01M11 18H11.01M20 21H4L8 16H5L9 11H6L12 3L18 11H15L19 16H16L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.8 2.4C12.6112 2.14819 12.3148 2 12 2C11.6853 2 11.3889 2.14819 11.2 2.4L5.20001 10.4C4.97275 10.703 4.93619 11.1084 5.10558 11.4472C5.27497 11.786 5.62124 12 6.00001 12H6.91938L4.21914 15.3753C3.979 15.6755 3.93219 16.0867 4.09871 16.4332C4.26523 16.7797 4.6156 17 5.00001 17H5.91938L3.21914 20.3753C2.979 20.6755 2.93219 21.0867 3.09871 21.4332C3.26523 21.7797 3.6156 22 4.00001 22H20C20.3844 22 20.7348 21.7797 20.9013 21.4332C21.0678 21.0867 21.021 20.6755 20.7809 20.3753L18.0806 17H19C19.3844 17 19.7348 16.7797 19.9013 16.4332C20.0678 16.0867 20.021 15.6755 19.7809 15.3753L17.0806 12H18C18.3788 12 18.725 11.786 18.8944 11.4472C19.0638 11.1084 19.0273 10.703 18.8 10.4L12.8 2.4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 9C11 8.44772 11.4477 8 12 8H12.01C12.5623 8 13.01 8.44772 13.01 9C13.01 9.55228 12.5623 10 12.01 10H12C11.4477 10 11 9.55228 11 9ZM13 14C13 13.4477 13.4477 13 14 13H14.01C14.5623 13 15.01 13.4477 15.01 14C15.01 14.5523 14.5623 15 14.01 15H14C13.4477 15 13 14.5523 13 14ZM10 18C10 17.4477 10.4477 17 11 17H11.01C11.5623 17 12.01 17.4477 12.01 18C12.01 18.5523 11.5623 19 11.01 19H11C10.4477 19 10 18.5523 10 18Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9H12.01M14 14H14.01M11 18H11.01M20 21H4L8 16H5L9 11H6L12 3L18 11H15L19 16H16L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TreeDecorated;