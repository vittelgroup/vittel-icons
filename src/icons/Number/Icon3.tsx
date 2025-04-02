import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icon3: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H9.5C7.567 21 6 19.433 6 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.3938 2 18.7509 2.23111 18.9122 2.59034C19.0736 2.94958 19.009 3.37004 18.7474 3.66436L12.2268 11H13.5C16.5376 11 19 13.4624 19 16.5C19 19.5376 16.5376 22 13.5 22H9.5C7.01472 22 5 19.9853 5 17.5C5 16.9477 5.44772 16.5 6 16.5C6.55228 16.5 7 16.9477 7 17.5C7 18.8807 8.11929 20 9.5 20H13.5C15.433 20 17 18.433 17 16.5C17 14.567 15.433 13 13.5 13H10C9.60621 13 9.24908 12.7689 9.08776 12.4097C8.92644 12.0504 8.99097 11.63 9.25259 11.3356L15.7732 4H6C5.44772 4 5 3.55228 5 3Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H9.5C7.567 21 6 19.433 6 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M5 3C5 2.44772 5.44772 2 6 2H18C18.3938 2 18.7509 2.23111 18.9122 2.59034C19.0736 2.94958 19.009 3.37004 18.7474 3.66436L12.2268 11H13.5C16.5376 11 19 13.4624 19 16.5C19 19.5376 16.5376 22 13.5 22H9.5C7.01472 22 5 19.9853 5 17.5C5 16.9477 5.44772 16.5 6 16.5C6.55228 16.5 7 16.9477 7 17.5C7 18.8807 8.11929 20 9.5 20H13.5C15.433 20 17 18.433 17 16.5C17 14.567 15.433 13 13.5 13H10C9.60621 13 9.24908 12.7689 9.08776 12.4097C8.92644 12.0504 8.99097 11.63 9.25259 11.3356L15.7732 4H6C5.44772 4 5 3.55228 5 3Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 3H18L10 12H13.5C15.9853 12 18 14.0147 18 16.5C18 18.9853 15.9853 21 13.5 21H9.5C7.567 21 6 19.433 6 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Icon3;