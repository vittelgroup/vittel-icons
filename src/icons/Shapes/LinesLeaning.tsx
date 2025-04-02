import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LinesLeaning: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.0002 5V19M10 5L6 19M14 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.275 4.03873C10.806 4.19046 11.1135 4.74394 10.9618 5.27498L6.96178 19.275C6.81006 19.806 6.25657 20.1135 5.72554 19.9618C5.1945 19.8101 4.88701 19.2566 5.03873 18.7255L9.03873 4.72554C9.19046 4.1945 9.74394 3.88701 10.275 4.03873ZM14.1417 4.01031C14.6884 4.08841 15.0683 4.59494 14.9902 5.14168L12.9902 19.1417C12.9121 19.6884 12.4056 20.0683 11.8588 19.9902C11.3121 19.9121 10.9322 19.4056 11.0103 18.8588L13.0103 4.85884C13.0884 4.3121 13.5949 3.9322 14.1417 4.01031ZM18.0005 4.00026C18.5527 4.00026 19.0005 4.44797 19.0005 5.00026V19.0003C19.0005 19.5525 18.5527 20.0003 18.0005 20.0003C17.4482 20.0003 17.0005 19.5525 17.0005 19.0003V5.00026C17.0005 4.44797 17.4482 4.00026 18.0005 4.00026Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.0002 5V19M10 5L6 19M14 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M18 4.00024C18.5523 4.00024 19 4.44796 19 5.00024V19.0002C19 19.5525 18.5523 20.0002 18 20.0002C17.4477 20.0002 17 19.5525 17 19.0002V5.00024C17 4.44796 17.4477 4.00024 18 4.00024Z" fill="currentColor"/>
<path d="M10.275 4.03873C10.806 4.19046 11.1135 4.74394 10.9618 5.27498L6.96178 19.275C6.81006 19.806 6.25657 20.1135 5.72554 19.9618C5.1945 19.8101 4.88701 19.2566 5.03873 18.7255L9.03873 4.72554C9.19046 4.1945 9.74394 3.88701 10.275 4.03873Z" fill="currentColor"/>
<path d="M14.1417 4.01031C14.6884 4.08841 15.0683 4.59494 14.9902 5.14168L12.9902 19.1417C12.9121 19.6884 12.4056 20.0683 11.8588 19.9902C11.3121 19.9121 10.9322 19.4056 11.0103 18.8588L13.0103 4.85884C13.0884 4.3121 13.5949 3.9322 14.1417 4.01031Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.0002 5V19M10 5L6 19M14 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default LinesLeaning;