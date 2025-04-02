import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Lasso: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 13C16.9706 13 21 10.7614 21 8C21 5.23858 16.9706 3 12 3C7.02944 3 3 5.23858 3 8C3 10.7614 7.02944 13 12 13ZM12 13C15.2 16.2 14 21 9 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12168 5.33862C4.63388 6.16518 4 7.14736 4 8C4 8.85264 4.63388 9.83482 6.12168 10.6614C7.57561 11.4691 9.65195 12 12 12C14.3481 12 16.4244 11.4691 17.8783 10.6614C19.3661 9.83482 20 8.85264 20 8C20 7.14736 19.3661 6.16518 17.8783 5.33862C16.4244 4.53089 14.3481 4 12 4C9.65195 4 7.57561 4.53089 6.12168 5.33862ZM5.1504 3.59031C6.95383 2.5884 9.37749 2 12 2C14.6225 2 17.0462 2.5884 18.8496 3.59031C20.6192 4.5734 22 6.09122 22 8C22 9.90878 20.6192 11.4266 18.8496 12.4097C17.5 13.1595 15.803 13.6777 13.9353 13.891C14.7869 15.3833 15.0076 17.0414 14.5252 18.5118C13.8414 20.5955 11.8499 22 9 22H3C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20H9C11.1501 20 12.2586 19.0045 12.6248 17.8882C12.9841 16.7933 12.7215 15.3131 11.5626 13.9945C9.10873 13.933 6.85312 13.3556 5.1504 12.4097C3.38084 11.4266 2 9.90878 2 8C2 6.09122 3.38084 4.5734 5.1504 3.59031Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 8C21 10.7614 16.9706 13 12 13C7.02944 13 3 10.7614 3 8C3 5.23858 7.02944 3 12 3C16.9706 3 21 5.23858 21 8Z" fill="currentColor"/>
<path d="M12 13C16.9706 13 21 10.7614 21 8C21 5.23858 16.9706 3 12 3C7.02944 3 3 5.23858 3 8C3 10.7614 7.02944 13 12 13ZM12 13C15.2 16.2 14 21 9 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11.5626 13.9945C12.7214 15.313 12.9841 16.7932 12.6248 17.8882C12.2586 19.0045 11.1501 20 9 20H3C2.44772 20 2 20.4477 2 21C2 21.5523 2.44772 22 3 22H9C11.8499 22 13.8414 20.5955 14.5252 18.5118C15.0076 17.0414 14.7869 15.3832 13.9353 13.891C13.3073 13.9627 12.6599 14 12 14C11.8535 14 11.7077 13.9982 11.5626 13.9945Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12168 5.33862C4.63388 6.16518 4 7.14736 4 8C4 8.85264 4.63388 9.83482 6.12168 10.6614C7.57561 11.4691 9.65195 12 12 12C14.3481 12 16.4244 11.4691 17.8783 10.6614C19.3661 9.83482 20 8.85264 20 8C20 7.14736 19.3661 6.16518 17.8783 5.33862C16.4244 4.53089 14.3481 4 12 4C9.65195 4 7.57561 4.53089 6.12168 5.33862ZM5.1504 3.59031C6.95383 2.5884 9.37749 2 12 2C14.6225 2 17.0462 2.5884 18.8496 3.59031C20.6192 4.5734 22 6.09122 22 8C22 9.90878 20.6192 11.4266 18.8496 12.4097C17.0462 13.4116 14.6225 14 12 14C9.37749 14 6.95383 13.4116 5.1504 12.4097C3.38084 11.4266 2 9.90878 2 8C2 6.09122 3.38084 4.5734 5.1504 3.59031Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 13C16.9706 13 21 10.7614 21 8C21 5.23858 16.9706 3 12 3C7.02944 3 3 5.23858 3 8C3 10.7614 7.02944 13 12 13ZM12 13C15.2 16.2 14 21 9 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Lasso;