import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon7: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.3385 2 18.654 2.17125 18.8385 2.45509C19.0229 2.73892 19.0513 3.09681 18.9138 3.40614L10.9138 21.4061C10.6895 21.9108 10.0985 22.1381 9.59386 21.9138C9.08918 21.6895 8.86188 21.0985 9.08619 20.5939L16.4612 4H6C5.44772 4 5 3.55228 5 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.3385 2 18.654 2.17125 18.8385 2.45509C19.0229 2.73892 19.0513 3.09681 18.9138 3.40614L10.9138 21.4061C10.6895 21.9108 10.0985 22.1381 9.59386 21.9138C9.08918 21.6895 8.86188 21.0985 9.08619 20.5939L16.4612 4H6C5.44772 4 5 3.55228 5 3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Icon7;