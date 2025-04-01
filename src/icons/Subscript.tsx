import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Subscript: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 18H5L13 4H15M3 4H5L13 18H15M17 15L19 14V20M19 20H17M19 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H5C5.35886 3 5.6902 3.19229 5.86824 3.50386L9 8.98444L12.1318 3.50386C12.3098 3.19229 12.6411 3 13 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H13.5803L10.1518 11L13.5803 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H13C12.6411 19 12.3098 18.8077 12.1318 18.4961L9 13.0156L5.86824 18.4961C5.6902 18.8077 5.35886 19 5 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H4.41968L7.84825 11L4.41968 5H3C2.44772 5 2 4.55228 2 4ZM19.5257 13.1493C19.8205 13.3316 20 13.6534 20 14V19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H17C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19H18V15.618L17.4472 15.8944C16.9532 16.1414 16.3526 15.9412 16.1056 15.4472C15.8586 14.9532 16.0588 14.3526 16.5528 14.1056L18.5528 13.1056C18.8628 12.9506 19.2309 12.9671 19.5257 13.1493Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 18H5L13 4H15M3 4H5L13 18H15M17 15L19 14V20M19 20H17M19 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H5C5.35886 3 5.6902 3.19229 5.86824 3.50386L9 8.98444L12.1318 3.50386C12.3098 3.19229 12.6411 3 13 3H15C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5H13.5803L10.1518 11L13.5803 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H13C12.6411 19 12.3098 18.8077 12.1318 18.4961L9 13.0156L5.86824 18.4961C5.6902 18.8077 5.35886 19 5 19H3C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17H4.41968L7.84825 11L4.41968 5H3C2.44772 5 2 4.55228 2 4Z" fill="currentColor"/>
<path d="M19.526 13.1494C19.8208 13.3316 20.0002 13.6534 20.0002 14V19H21.0002C21.5525 19 22.0002 19.4477 22.0002 20C22.0002 20.5523 21.5525 21 21.0002 21H17.0002C16.4479 21 16.0002 20.5523 16.0002 20C16.0002 19.4477 16.4479 19 17.0002 19H18.0002V15.618L17.4474 15.8944C16.9535 16.1414 16.3528 15.9412 16.1058 15.4472C15.8588 14.9532 16.059 14.3526 16.553 14.1056L18.553 13.1056C18.863 12.9506 19.2311 12.9671 19.526 13.1494Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 18H5L13 4H15M3 4H5L13 18H15M17 15L19 14V20M19 20H17M19 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Subscript;