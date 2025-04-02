import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TidelLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12L9 15L12 18L15 15L12 12ZM12 12L15 9M12 12L9 9M15 9L18 6L21 9L18 12L15 9ZM15 9L12 6L9 9M9 9L6 6L3 9L6 12L9 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289L2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L9 10.4142L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071L11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15 10.4142L17.2929 12.7071C17.6834 13.0976 18.3166 13.0976 18.7071 12.7071L21.7071 9.70711C22.0976 9.31658 22.0976 8.68342 21.7071 8.29289L18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L15 7.58579L12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L9 7.58579L6.70711 5.29289Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M12 12L9 15L12 18L15 15L12 12Z" fill="currentColor"/>
<path d="M18 6L15 9L18 12L21 9L18 6Z" fill="currentColor"/>
<path d="M6 6L3 9L6 12L9 9L6 6Z" fill="currentColor"/>
<path d="M12 6L9 9L12 12L15 9L12 6Z" fill="currentColor"/>
</g>
<path d="M12 12L9 15L12 18L15 15L12 12ZM12 12L15 9M12 12L9 9M15 9L18 6L21 9L18 12L15 9ZM15 9L12 6L9 9M9 9L6 6L3 9L6 12L9 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289L2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L9 10.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L15 10.4142L17.2929 12.7071C17.6834 13.0976 18.3166 13.0976 18.7071 12.7071L21.7071 9.70711C22.0976 9.31658 22.0976 8.68342 21.7071 8.29289L18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L15 7.58579L12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L9 7.58579L6.70711 5.29289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071L12.7071 18.7071C12.3166 19.0976 11.6834 19.0976 11.2929 18.7071L8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L11.2929 11.2929Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 12L9 15L12 18L15 15L12 12ZM12 12L15 9M12 12L9 9M15 9L18 6L21 9L18 12L15 9ZM15 9L12 6L9 9M9 9L6 6L3 9L6 12L9 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TidelLogo;