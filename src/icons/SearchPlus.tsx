import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SearchPlus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.8053 15.8013L21 21M10.5 7.5V13.5M7.5 10.5H13.5M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19C12.4869 19 14.3145 18.3183 15.7618 17.176L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.176 15.7618C18.3183 14.3145 19 12.4869 19 10.5C19 5.80558 15.1944 2 10.5 2ZM11.5 7.5C11.5 6.94772 11.0523 6.5 10.5 6.5C9.94772 6.5 9.5 6.94772 9.5 7.5V9.5H7.5C6.94772 9.5 6.5 9.94772 6.5 10.5C6.5 11.0523 6.94772 11.5 7.5 11.5H9.5V13.5C9.5 14.0523 9.94772 14.5 10.5 14.5C11.0523 14.5 11.5 14.0523 11.5 13.5V11.5H13.5C14.0523 11.5 14.5 11.0523 14.5 10.5C14.5 9.94772 14.0523 9.5 13.5 9.5H11.5V7.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="10.5" cy="10.5" r="7.5" fill="#0000CC"/>
<path d="M15.8053 15.8013L21 21M10.5 7.5V13.5M7.5 10.5H13.5M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5Z" fill="currentColor"/>
<path d="M11.5 7.5C11.5 6.94772 11.0523 6.5 10.5 6.5C9.94772 6.5 9.5 6.94772 9.5 7.5V9.5H7.5C6.94772 9.5 6.5 9.94772 6.5 10.5C6.5 11.0523 6.94772 11.5 7.5 11.5H9.5V13.5C9.5 14.0523 9.94772 14.5 10.5 14.5C11.0523 14.5 11.5 14.0523 11.5 13.5V11.5H13.5C14.0523 11.5 14.5 11.0523 14.5 10.5C14.5 9.94772 14.0523 9.5 13.5 9.5H11.5V7.5Z" fill="currentColor"/>
<path d="M15.7617 17.176L20.2928 21.7071C20.6833 22.0976 21.3165 22.0976 21.707 21.7071C22.0975 21.3166 22.0975 20.6834 21.707 20.2929L17.1759 15.7618C16.7616 16.2868 16.2867 16.7617 15.7617 17.176Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.8053 15.8013L21 21M10.5 7.5V13.5M7.5 10.5H13.5M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SearchPlus;