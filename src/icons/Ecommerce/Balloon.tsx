import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Balloon: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.1296 17.8108L10 21H15L12.8704 17.8108M9.5 9.5C9.5 7.84315 10.3431 6.5 12 6.5M19 9C19 15 12.5 18 12.5 18C12.5 18 6 15 6 9C6 4.5 10 3 12.5 3C15 3 19 4.5 19 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7102 18.132C10.0966 17.7382 9.33559 17.1899 8.57172 16.4848C6.83965 14.886 5 12.3892 5 9C5 6.40306 6.17611 4.60959 7.73126 3.49877C9.24342 2.41865 11.0818 2 12.5 2C13.9182 2 15.7566 2.41865 17.2687 3.49877C18.8239 4.60959 20 6.40306 20 9C20 12.3892 18.1604 14.886 16.4283 16.4848C15.6644 17.1899 14.9034 17.7382 14.2898 18.132L15.8321 20.4453C16.0366 20.7522 16.0557 21.1467 15.8817 21.4719C15.7077 21.797 15.3688 22 15 22H10C9.6312 22 9.29234 21.797 9.11833 21.4719C8.94431 21.1467 8.96338 20.7522 9.16795 20.4453L10.7102 18.132ZM9.5 8.5C9.5 7.82695 9.67283 7.31118 9.9211 6.98865C10.1455 6.69707 10.4751 6.5 11 6.5C11.5523 6.5 12 6.05228 12 5.5C12 4.94772 11.5523 4.5 11 4.5C9.86808 4.5 8.9476 4.9745 8.33626 5.76871C7.74874 6.53196 7.5 7.5162 7.5 8.5C7.5 9.05228 7.94772 9.5 8.5 9.5C9.05228 9.5 9.5 9.05228 9.5 8.5Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M19 9C19 15 12.5 18 12.5 18C12.5 18 6 15 6 9C6 4.5 10 3 12.5 3C15 3 19 4.5 19 9Z" fill="currentColor"/>
<path d="M12.1296 17.8108L10 21H15L12.8704 17.8108M9.5 9.5C9.5 7.84315 10.3431 6.5 12 6.5M19 9C19 15 12.5 18 12.5 18C12.5 18 6 15 6 9C6 4.5 10 3 12.5 3C15 3 19 4.5 19 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M10.7102 18.132C10.0966 17.7382 9.33559 17.1899 8.57172 16.4848C6.83965 14.886 5 12.3892 5 9C5 6.40306 6.17611 4.60959 7.73126 3.49877C9.24342 2.41865 11.0818 2 12.5 2C13.9182 2 15.7566 2.41865 17.2687 3.49877C18.8239 4.60959 20 6.40306 20 9C20 12.3892 18.1604 14.886 16.4283 16.4848C15.6644 17.1899 14.9034 17.7382 14.2898 18.132L15.8321 20.4453C16.0366 20.7522 16.0557 21.1467 15.8817 21.4719C15.7077 21.797 15.3688 22 15 22H10C9.6312 22 9.29234 21.797 9.11833 21.4719C8.94431 21.1467 8.96338 20.7522 9.16795 20.4453L10.7102 18.132Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8.5C9.5 7.82695 9.67283 7.31118 9.9211 6.98865C10.1455 6.69707 10.4751 6.5 11 6.5C11.5523 6.5 12 6.05228 12 5.5C12 4.94772 11.5523 4.5 11 4.5C9.86808 4.5 8.9476 4.9745 8.33626 5.76871C7.74874 6.53196 7.5 7.5162 7.5 8.5C7.5 9.05228 7.94772 9.5 8.5 9.5C9.05228 9.5 9.5 9.05228 9.5 8.5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.1296 17.8108L10 21H15L12.8704 17.8108M9.5 9.5C9.5 7.84315 10.3431 6.5 12 6.5M19 9C19 15 12.5 18 12.5 18C12.5 18 6 15 6 9C6 4.5 10 3 12.5 3C15 3 19 4.5 19 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Balloon;