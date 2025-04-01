import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const HammerWar: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V14M12 5V3M12 5L4 4V12L12 11L20 12V4L12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.86722L4.12403 3.00772C3.83942 2.97215 3.55323 3.0605 3.3382 3.25032C3.12317 3.44015 3 3.71317 3 4V12C3 12.2868 3.12317 12.5599 3.3382 12.7497C3.55323 12.9395 3.83942 13.0279 4.12403 12.9923L12 12.0078L19.876 12.9923C20.1606 13.0279 20.4468 12.9395 20.6618 12.7497C20.8768 12.5599 21 12.2868 21 12V4C21 3.71317 20.8768 3.44015 20.6618 3.25032C20.4468 3.0605 20.1606 2.97215 19.876 3.00772L13 3.86722V3Z" fill="currentColor"/>
<path d="M13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 4L12 5L20 4V12L12 11L4 12V4Z" fill="currentColor"/>
<path d="M12 21V14M12 5V3M12 5L4 4V12L12 11L20 12V4L12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M13 3C13 2.44771 12.5523 2 12 2C11.4477 2 11 2.44771 11 3V20.9999C11 21.5522 11.4477 21.9999 12 21.9999C12.5523 21.9999 13 21.5522 13 20.9999V3Z" fill="currentColor"/>
<path d="M11 3.86722L4.12403 3.00773C3.83942 2.97215 3.55323 3.0605 3.3382 3.25033C3.12317 3.44015 3 3.71317 3 4.00001V12C3 12.2868 3.12317 12.5599 3.3382 12.7497C3.55323 12.9395 3.83942 13.0279 4.12403 12.9923L12 12.0078L19.876 12.9923C20.1606 13.0279 20.4468 12.9395 20.6618 12.7497C20.8768 12.5599 21 12.2868 21 12V4.00001C21 3.71317 20.8768 3.44015 20.6618 3.25033C20.4468 3.0605 20.1606 2.97215 19.876 3.00773L13 3.86722L12 4.00001L11 3.86722Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21V14M12 5V3M12 5L4 4V12L12 11L20 12V4L12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default HammerWar;