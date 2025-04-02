import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CornerRightUp: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20H6.4C9.7603 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4V4M16 4L12 8M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289L20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711C20.3166 9.09763 19.6834 9.09763 19.2929 8.70711L17 6.41421V10.4444C17 12.0869 17 13.3809 16.9149 14.4222C16.8281 15.4846 16.6478 16.3717 16.237 17.1779C15.5659 18.4951 14.4951 19.5659 13.1779 20.237C12.3717 20.6478 11.4846 20.8281 10.4222 20.9149C9.38089 21 8.08691 21 6.44433 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H6.4C8.09665 19 9.309 18.9992 10.2594 18.9216C11.198 18.8449 11.7927 18.6982 12.27 18.455C13.2108 17.9757 13.9757 17.2108 14.455 16.27C14.6982 15.7927 14.8449 15.198 14.9216 14.2594C14.9992 13.309 15 12.0967 15 10.4V6.41421L12.7071 8.70711C12.3166 9.09763 11.6834 9.09763 11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289L15.2929 3.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20H6.4C9.7603 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4V4M16 4L12 8M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16.5523 3 17 3.44772 17 4V10.4444C17 12.087 17 13.3809 16.9149 14.4222C16.8281 15.4846 16.6478 16.3718 16.237 17.178C15.5659 18.4951 14.4951 19.566 13.1779 20.2371C12.3717 20.6479 11.4846 20.8282 10.4222 20.915C9.38091 21 8.08696 21 6.44444 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H6.4C8.09665 19 9.30901 18.9992 10.2594 18.9216C11.198 18.8449 11.7927 18.6982 12.27 18.4551C13.2108 17.9757 13.9757 17.2108 14.455 16.27C14.6982 15.7927 14.8449 15.1981 14.9216 14.2594C14.9992 13.309 15 12.0967 15 10.4V4C15 3.44772 15.4477 3 16 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289L20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711C20.3166 9.09763 19.6834 9.09763 19.2929 8.70711L16 5.41421L12.7071 8.70711C12.3166 9.09763 11.6834 9.09763 11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289L15.2929 3.29289Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 20H6.4C9.7603 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4V4M16 4L12 8M16 4L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CornerRightUp;