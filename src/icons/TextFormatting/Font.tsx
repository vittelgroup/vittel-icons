import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Font: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 21H19.5M6 21L12 3L18 21M4.5 21H8M15 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4304 2 12.8126 2.27543 12.9487 2.68377L18.7208 20H19.5C20.0523 20 20.5 20.4477 20.5 21C20.5 21.5523 20.0523 22 19.5 22H18.023C18.0076 22.0004 17.9921 22.0004 17.9767 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H16.6126L14.9459 15H9.05409L7.38743 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H6.02333C6.00791 22.0004 5.99245 22.0004 5.97695 22H4.5C3.94772 22 3.5 21.5523 3.5 21C3.5 20.4477 3.94772 20 4.5 20H5.27924L11.0513 2.68377C11.1874 2.27543 11.5696 2 12 2ZM9.72076 13H14.2792L12 6.16228L9.72076 13Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M9.00065 14H15.0007H15.6673L12.0007 3L8.33398 14H9.00065Z" fill="currentColor"/>
<path d="M16 21H19.5M6 21L8.33333 14M18 21L15.6667 14M4.5 21H8M8.33333 14L12 3L15.6667 14M8.33333 14H9H15H15.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.4304 2 12.8126 2.27543 12.9487 2.68377L18.7208 20H19.5C20.0523 20 20.5 20.4477 20.5 21C20.5 21.5523 20.0523 22 19.5 22H18.023C18.0076 22.0004 17.9921 22.0004 17.9767 22H16C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20H16.6126L14.9459 15H9.05409L7.38743 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H6.02333C6.00791 22.0004 5.99245 22.0004 5.97695 22H4.5C3.94772 22 3.5 21.5523 3.5 21C3.5 20.4477 3.94772 20 4.5 20H5.27924L11.0513 2.68377C11.1874 2.27543 11.5696 2 12 2ZM9.72076 13H14.2792L12 6.16228L9.72076 13Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 21H19.5M6 21L12 3L18 21M4.5 21H8M15 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Font;