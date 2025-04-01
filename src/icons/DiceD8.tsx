import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const DiceD8: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V21M12 3L3 13M12 3L21 13M12 21L21 13M12 21L3 13M21 13L12 15L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.9984 3.91922C10.9984 3.46098 10.4333 3.24413 10.1267 3.58474L3.21859 11.2604C2.96251 11.545 3.10809 12 3.48177 12.083L10.3899 13.6181C10.7022 13.6875 10.9984 13.4499 10.9984 13.1301V3.91922Z" fill="currentColor"/>
<path d="M4.40825 14.3377C3.90483 14.2258 3.58216 14.8569 3.9676 15.1995L10.1662 20.7093C10.4886 20.9959 10.9984 20.767 10.9984 20.3356V16.2032C10.9984 15.9689 10.8356 15.766 10.6068 15.7151L4.40825 14.3377Z" fill="currentColor"/>
<path d="M12.9984 20.3356C12.9984 20.767 13.5081 20.9959 13.8305 20.7093L20.0291 15.1995C20.4146 14.8569 20.0919 14.2258 19.5885 14.3377L13.3899 15.7151C13.1611 15.766 12.9984 15.9689 12.9984 16.2032V20.3356Z" fill="currentColor"/>
<path d="M20.515 12.083C20.8886 12 21.0342 11.545 20.7781 11.2604L13.87 3.58474C13.5635 3.24413 12.9984 3.46098 12.9984 3.91922V13.1301C12.9984 13.4499 13.2946 13.6875 13.6068 13.6181L20.515 12.083Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M21 13L12 21L3 13L12 3L21 13Z" fill="currentColor"/>
<path d="M12 3V21M12 3L3 13M12 3L21 13M12 21L21 13M12 21L3 13M21 13L12 15L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M10.9984 3.91922C10.9984 3.46098 10.4333 3.24413 10.1267 3.58474L3.21859 11.2604C2.96251 11.545 3.10809 12 3.48177 12.083L10.3899 13.6181C10.7022 13.6875 10.9984 13.4499 10.9984 13.1301V3.91922Z" fill="currentColor"/>
<path d="M20.515 12.083C20.8886 12 21.0342 11.545 20.7781 11.2604L13.87 3.58474C13.5635 3.24413 12.9984 3.46098 12.9984 3.91922V13.1301C12.9984 13.4499 13.2946 13.6875 13.6068 13.6181L20.515 12.083Z" fill="currentColor"/>
</g>
<path d="M4.40756 14.3377C3.90413 14.2258 3.58147 14.8569 3.96691 15.1995L10.1655 20.7093C10.4879 20.996 10.9977 20.7671 10.9977 20.3356V16.2033C10.9977 15.9689 10.8349 15.766 10.6061 15.7152L4.40756 14.3377Z" fill="currentColor"/>
<path d="M12.9977 20.3356C12.9977 20.7671 13.5074 20.996 13.8299 20.7093L20.0284 15.1995C20.4139 14.8569 20.0912 14.2258 19.5878 14.3377L13.3892 15.7152C13.1604 15.766 12.9977 15.9689 12.9977 16.2033V20.3356Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3V21M12 3L3 13M12 3L21 13M12 21L21 13M12 21L3 13M21 13L12 15L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default DiceD8;