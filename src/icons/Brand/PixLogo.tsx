import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PixLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15H9.42857L14.5714 9H18M18 15H14.5714L9.42857 9H6M3 12L12 3L21 12L12 21L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M20.4142 10H15.0315L13.3172 12L15.0315 14H20.4142L21.7071 12.7071C22.0976 12.3166 22.0976 11.6834 21.7071 11.2929L20.4142 10Z" fill="currentColor"/>
<path d="M12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L5.58594 16H9.42872C9.72065 16 9.998 15.8724 10.188 15.6508L12.0002 13.5366L13.8123 15.6508C14.0023 15.8724 14.2797 16 14.5716 16H18.4142L12.7071 21.7071Z" fill="currentColor"/>
<path d="M2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L3.58594 10H8.96879L10.6831 12L8.96879 14H3.58594L2.29289 12.7071Z" fill="currentColor"/>
<path d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L18.4142 8H14.5716C14.2797 8 14.0023 8.12756 13.8123 8.34921L12.0002 10.4634L10.188 8.34921C9.998 8.12756 9.72065 8 9.42872 8H5.58594L11.2929 2.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 3L3 12L12 21L21 12L12 3Z" fill="currentColor"/>
<path d="M6 15H9.42857L14.5714 9H18M18 15H14.5714L9.42857 9H6M3 12L12 3L21 12L12 21L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L11.2929 2.29289Z" fill="currentColor"/>
<path d="M14.5716 8C14.2797 8 14.0023 8.12756 13.8123 8.34921L12.0002 10.4634L10.188 8.34921C9.998 8.12756 9.72065 8 9.42872 8H6.00015H5.58594L3.58594 10H6.00015H8.96879L10.6831 12L8.96879 14H6.00015H3.58594L5.58594 16H6.00015H9.42872C9.72065 16 9.998 15.8724 10.188 15.6508L12.0002 13.5366L13.8123 15.6508C14.0023 15.8724 14.2797 16 14.5716 16H18.0002H18.4144L20.4144 14H18.0002H15.0315L13.3172 12L15.0315 10H18.0002H20.4144L18.4144 8H18.0002H14.5716Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 15H9.42857L14.5714 9H18M18 15H14.5714L9.42857 9H6M3 12L12 3L21 12L12 21L3 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default PixLogo;