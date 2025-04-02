import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Leaf: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 12H12C7.58172 12 4 15.5817 4 20V21M12 17C9.23858 17 7 14.7614 7 12C7 9.23857 9.23858 7 12 7C15.1476 7.00001 18.1115 5.51806 20 3V8.99998C20 13.4183 16.4183 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20.3162 2.05138C20.7246 2.1875 21 2.56963 21 3.00006V9.00004C21 13.9706 16.9706 18.0001 12 18.0001C9.85771 18.0001 7.97765 16.8773 6.91614 15.1881C5.72843 16.4425 5 18.1362 5 20.0001V21.0001C5 21.5523 4.55228 22.0001 4 22.0001C3.44772 22.0001 3 21.5523 3 21.0001V20.0001C3 17.9901 3.6589 16.134 4.7725 14.636C4.78062 14.6261 4.78859 14.6161 4.7964 14.6058C5.32553 13.9109 6.48034 12.9927 7.87714 12.2396C9.27607 11.4853 10.7275 11 11.8 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H11.8C10.2441 9 8.44638 9.66049 6.92799 10.4792C6.64401 10.6323 6.36316 10.7945 6.08917 10.9637C6.58012 8.14392 9.0397 6.00006 12 6.00006C14.8328 6.00007 17.5003 4.66632 19.2 2.40006C19.4583 2.05572 19.9079 1.91527 20.3162 2.05138Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M7 12C7 14.7614 9.23858 17 12 17C16.4183 17 20 13.4183 20 8.99998V3C18.1115 5.51806 15.1476 7.00001 12 7C9.23858 7 7 9.23858 7 12Z" fill="currentColor"/>
<path d="M14 12H12C7.58172 12 4 15.5817 4 20V21M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C15.1476 7.00001 18.1115 5.51806 20 3V8.99998C20 13.4183 16.4183 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M21 2.99994C21 2.56951 20.7246 2.18737 20.3162 2.05126C19.9079 1.91514 19.4583 2.0556 19.2 2.39994C17.5003 4.6662 14.8328 5.99995 12 5.99994C8.68629 5.99994 6 8.68623 6 11.9999C6 15.3137 8.68629 17.9999 12 17.9999C16.9706 17.9999 21 13.9705 21 8.99992V2.99994Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 20C3 15.0294 7.02944 11 12 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H12C8.13401 13 5 16.134 5 20V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V20Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 12H12C7.58172 12 4 15.5817 4 20V21M12 17C9.23858 17 7 14.7614 7 12C7 9.23857 9.23858 7 12 7C15.1476 7.00001 18.1115 5.51806 20 3V8.99998C20 13.4183 16.4183 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Leaf;