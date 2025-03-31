import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CircleVideo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 11L17 9.5V14.5L14 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM8 15H13C13.5523 15 14 14.5523 14 14V10C14 9.44772 13.5523 9 13 9H8C7.44772 9 7 9.44772 7 10V14C7 14.5523 7.44772 15 8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.6489 14.9363L15 14.318V9.682L16.6489 9.06368C16.956 8.94851 17.3 8.99126 17.5696 9.17808C17.8392 9.3649 18 9.67203 18 10V14C18 14.328 17.8392 14.6351 17.5696 14.8219C17.3 15.0087 16.956 15.0515 16.6489 14.9363ZM6.21799 9.09202C6 9.51984 6 10.0799 6 11.2V12.8C6 13.9201 6 14.4802 6.21799 14.908C6.40973 15.2843 6.71569 15.5903 7.09202 15.782C7.51984 16 8.0799 16 9.2 16H10.8C11.9201 16 12.4802 16 12.908 15.782C13.2843 15.5903 13.5903 15.2843 13.782 14.908C14 14.4802 14 13.9201 14 12.8V11.2C14 10.0799 14 9.51984 13.782 9.09202C13.5903 8.71569 13.2843 8.40973 12.908 8.21799C12.4802 8 11.9201 8 10.8 8H9.2C8.0799 8 7.51984 8 7.09202 8.21799C6.71569 8.40973 6.40973 8.71569 6.21799 9.09202Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8 9H13C13.5523 9 14 9.44772 14 10V11L17 9.5V14.5L14 13V14C14 14.5523 13.5523 15 13 15H8C7.44772 15 7 14.5523 7 14V10C7 9.44772 7.44772 9 8 9Z" fill="currentColor"/>
<path d="M14 11L17 9.5V14.5L14 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM8 15H13C13.5523 15 14 14.5523 14 14V10C14 9.44772 13.5523 9 13 9H8C7.44772 9 7 9.44772 7 10V14C7 14.5523 7.44772 15 8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6489 14.9363L15 14.318V9.682L16.6489 9.06368C16.956 8.94851 17.3 8.99126 17.5696 9.17808C17.8392 9.3649 18 9.67203 18 10V14C18 14.328 17.8392 14.6351 17.5696 14.8219C17.3 15.0087 16.956 15.0515 16.6489 14.9363ZM6.21799 9.09202C6 9.51984 6 10.0799 6 11.2V12.8C6 13.9201 6 14.4802 6.21799 14.908C6.40973 15.2843 6.71569 15.5903 7.09202 15.782C7.51984 16 8.0799 16 9.2 16H10.8C11.9201 16 12.4802 16 12.908 15.782C13.2843 15.5903 13.5903 15.2843 13.782 14.908C14 14.4802 14 13.9201 14 12.8V11.2C14 10.0799 14 9.51984 13.782 9.09202C13.5903 8.71569 13.2843 8.40973 12.908 8.21799C12.4802 8 11.9201 8 10.8 8H9.2C8.0799 8 7.51984 8 7.09202 8.21799C6.71569 8.40973 6.40973 8.71569 6.21799 9.09202Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 11L17 9.5V14.5L14 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM8 15H13C13.5523 15 14 14.5523 14 14V10C14 9.44772 13.5523 9 13 9H8C7.44772 9 7 9.44772 7 10V14C7 14.5523 7.44772 15 8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CircleVideo;