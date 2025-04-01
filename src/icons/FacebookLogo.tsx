import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const FacebookLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V10.5C12 9.90326 12.2371 9.33097 12.659 8.90901C13.081 8.48705 13.6533 8.25 14.25 8.25H15.75M9 13.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.1853 5.94668 21.4983 11 22V21V14.5H9C8.44772 14.5 8 14.0523 8 13.5C8 12.9477 8.44772 12.5 9 12.5H11V10.5C11 9.63805 11.3424 8.8114 11.9519 8.2019C12.5614 7.59241 13.388 7.25 14.25 7.25H15.75C16.3023 7.25 16.75 7.69772 16.75 8.25C16.75 8.80228 16.3023 9.25 15.75 9.25H14.25C13.9185 9.25 13.6005 9.3817 13.3661 9.61612C13.1317 9.85054 13 10.1685 13 10.5V12.5H15C15.5523 12.5 16 12.9477 16 13.5C16 14.0523 15.5523 14.5 15 14.5H13V21L13 22C18.0533 21.4983 22 17.1853 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V10.5C12 9.90326 12.2371 9.33097 12.659 8.90901C13.081 8.48705 13.6533 8.25 14.25 8.25H15.75M9 13.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.1853 5.94668 21.4983 11 22V21V14.5H9C8.44772 14.5 8 14.0523 8 13.5C8 12.9477 8.44772 12.5 9 12.5H11V10.5C11 9.63805 11.3424 8.8114 11.9519 8.2019C12.5614 7.59241 13.388 7.25 14.25 7.25H15.75C16.3023 7.25 16.75 7.69772 16.75 8.25C16.75 8.80228 16.3023 9.25 15.75 9.25H14.25C13.9185 9.25 13.6005 9.3817 13.3661 9.61612C13.1317 9.85054 13 10.1685 13 10.5V12.5H15C15.5523 12.5 16 12.9477 16 13.5C16 14.0523 15.5523 14.5 15 14.5H13V21L13 22C18.0533 21.4983 22 17.1853 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
<path d="M11.9519 8.2019C12.5614 7.59241 13.388 7.25 14.25 7.25H15.75C16.3023 7.25 16.75 7.69772 16.75 8.25C16.75 8.80228 16.3023 9.25 15.75 9.25H14.25C13.9185 9.25 13.6005 9.3817 13.3661 9.61612C13.1317 9.85054 13 10.1685 13 10.5V12.5H15C15.5523 12.5 16 12.9477 16 13.5C16 14.0523 15.5523 14.5 15 14.5H13V21L13 21.9506C12.6711 21.9833 12.3375 22 12 22C11.6625 22 11.3289 21.9833 11 21.9506V21V14.5H9C8.44772 14.5 8 14.0523 8 13.5C8 12.9477 8.44772 12.5 9 12.5H11V10.5C11 9.63805 11.3424 8.8114 11.9519 8.2019Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 21V10.5C12 9.90326 12.2371 9.33097 12.659 8.90901C13.081 8.48705 13.6533 8.25 14.25 8.25H15.75M9 13.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default FacebookLogo;