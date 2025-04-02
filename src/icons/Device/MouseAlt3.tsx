import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const MouseAlt3: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15V9C19 5.13401 15.866 2 12 2ZM12 6C11.4477 6 11 6.44772 11 7V9C11 9.55229 11.4477 10 12 10C12.5523 10 13 9.55229 13 9V7C13 6.44772 12.5523 6 12 6Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V9Z" fill="currentColor"/>
<path d="M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13401 2 5 5.13401 5 9V15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15V9C19 5.13401 15.866 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C11.4477 6 11 6.44772 11 7V9C11 9.55229 11.4477 10 12 10C12.5523 10 13 9.55229 13 9V7C13 6.44772 12.5523 6 12 6Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default MouseAlt3;