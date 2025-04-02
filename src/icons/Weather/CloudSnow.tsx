import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CloudSnow: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 18H9.01M15 18H15.01M9 20.5H9.01M12 18H12.01M12 21H12.01M15 20.5H15.01M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.32159 5.1171C8.32966 3.29155 10.3194 2 12.6127 2C15.5626 2 18.0685 4.06975 18.5317 6.85019C20.0163 7.71575 21 9.36366 21 11.1402C21 13.8575 18.7275 16 16 16L8.8 16C5.64015 16 3 13.5413 3 10.4137C3 7.95928 4.74492 5.75122 7.32159 5.1171Z" fill="currentColor"/>
<path d="M10 18C10 18.5523 9.55229 19 9 19C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17C9.55229 17 10 17.4477 10 18Z" fill="currentColor"/>
<path d="M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z" fill="currentColor"/>
<path d="M16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z" fill="currentColor"/>
<path d="M15 21.5C15.5523 21.5 16 21.0523 16 20.5C16 19.9477 15.5523 19.5 15 19.5C14.4477 19.5 14 19.9477 14 20.5C14 21.0523 14.4477 21.5 15 21.5Z" fill="currentColor"/>
<path d="M10 20.5C10 21.0523 9.55229 21.5 9 21.5C8.44771 21.5 8 21.0523 8 20.5C8 19.9477 8.44771 19.5 9 19.5C9.55229 19.5 10 19.9477 10 20.5Z" fill="currentColor"/>
<path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M4 10.4137C4 12.9466 6.14903 15 8.8 15L16 15C18.2091 15 20 13.2719 20 11.1402C20 9.55741 19.0127 8.09561 17.6 7.5C17.4504 4.99072 15.2747 3 12.6127 3C10.5346 3 8.75283 4.27403 8 6C5.6 6.375 4 8.31435 4 10.4137Z" fill="currentColor"/>
<path d="M9 18H9.01M15 18H15.01M9 20.5H9.01M12 18H12.01M12 21H12.01M15 20.5H15.01M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M7.32159 5.1171C8.32966 3.29155 10.3194 2 12.6127 2C15.5626 2 18.0685 4.06975 18.5317 6.85019C20.0163 7.71575 21 9.36366 21 11.1402C21 13.8575 18.7275 16 16 16L8.8 16C5.64015 16 3 13.5413 3 10.4137C3 7.95928 4.74492 5.75122 7.32159 5.1171Z" fill="currentColor"/>
<path d="M10 18C10 18.5523 9.55229 19 9 19C8.44771 19 8 18.5523 8 18C8 17.4477 8.44771 17 9 17C9.55229 17 10 17.4477 10 18Z" fill="currentColor"/>
<path d="M12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19Z" fill="currentColor"/>
<path d="M16 18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18Z" fill="currentColor"/>
<path d="M15 21.5C15.5523 21.5 16 21.0523 16 20.5C16 19.9477 15.5523 19.5 15 19.5C14.4477 19.5 14 19.9477 14 20.5C14 21.0523 14.4477 21.5 15 21.5Z" fill="currentColor"/>
<path d="M10 20.5C10 21.0523 9.55229 21.5 9 21.5C8.44771 21.5 8 21.0523 8 20.5C8 19.9477 8.44771 19.5 9 19.5C9.55229 19.5 10 19.9477 10 20.5Z" fill="currentColor"/>
<path d="M12 22C12.5523 22 13 21.5523 13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21C11 21.5523 11.4477 22 12 22Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 18H9.01M15 18H15.01M9 20.5H9.01M12 18H12.01M12 21H12.01M15 20.5H15.01M8.8 15C6.14903 15 4 12.9466 4 10.4137C4 8.31435 5.6 6.375 8 6C8.75283 4.27403 10.5346 3 12.6127 3C15.2747 3 17.4504 4.99072 17.6 7.5C19.0127 8.09561 20 9.55741 20 11.1402C20 13.2719 18.2091 15 16 15L8.8 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CloudSnow;