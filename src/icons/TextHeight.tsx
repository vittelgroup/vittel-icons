import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TextHeight: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M5 20H9M11 7V4H3V7M18 4V20M18 4L15 7M18 4L21 7M18 20L15 17M18 20L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H11C11.5523 3 12 3.44772 12 4V7C12 7.55228 11.5523 8 11 8C10.4477 8 10 7.55228 10 7V5H8V19H9C9.55228 19 10 19.4477 10 20C10 20.5523 9.55228 21 9 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H6V5H4V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V4ZM17.2929 3.29289C17.6834 2.90237 18.3166 2.90237 18.7071 3.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711C21.3166 8.09763 20.6834 8.09763 20.2929 7.70711L19 6.41421V17.5858L20.2929 16.2929C20.6834 15.9024 21.3166 15.9024 21.7071 16.2929C22.0976 16.6834 22.0976 17.3166 21.7071 17.7071L18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L14.2929 17.7071C13.9024 17.3166 13.9024 16.6834 14.2929 16.2929C14.6834 15.9024 15.3166 15.9024 15.7071 16.2929L17 17.5858V6.41421L15.7071 7.70711C15.3166 8.09763 14.6834 8.09763 14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289L17.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M5 20H9M11 7V4H3V7M18 4V20M18 4L15 7M18 4L21 7M18 20L15 17M18 20L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H11C11.5523 3 12 3.44772 12 4V7C12 7.55228 11.5523 8 11 8C10.4477 8 10 7.55228 10 7V5H8V19H9C9.55228 19 10 19.4477 10 20C10 20.5523 9.55228 21 9 21H5C4.44772 21 4 20.5523 4 20C4 19.4477 4.44772 19 5 19H6V5H4V7C4 7.55228 3.55228 8 3 8C2.44772 8 2 7.55228 2 7V4Z" fill="currentColor"/>
<path d="M17.2929 3.29289C17.6834 2.90237 18.3166 2.90237 18.7071 3.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711C21.3166 8.09763 20.6834 8.09763 20.2929 7.70711L19 6.41421V17.5858L20.2929 16.2929C20.6834 15.9024 21.3166 15.9024 21.7071 16.2929C22.0976 16.6834 22.0976 17.3166 21.7071 17.7071L18.7071 20.7071C18.3166 21.0976 17.6834 21.0976 17.2929 20.7071L14.2929 17.7071C13.9024 17.3166 13.9024 16.6834 14.2929 16.2929C14.6834 15.9024 15.3166 15.9024 15.7071 16.2929L17 17.5858V6.41421L15.7071 7.70711C15.3166 8.09763 14.6834 8.09763 14.2929 7.70711C13.9024 7.31658 13.9024 6.68342 14.2929 6.29289L17.2929 3.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 4V20M5 20H9M11 7V4H3V7M18 4V20M18 4L15 7M18 4L21 7M18 20L15 17M18 20L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TextHeight;