import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle4: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 8V17M15.5 14H8.5L11.5 7M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.4191 7.39392C12.6367 6.88629 12.4015 6.29841 11.8939 6.08085C11.3863 5.8633 10.7984 6.09845 10.5809 6.60608L7.58085 13.6061C7.44844 13.915 7.48011 14.2699 7.66516 14.5505C7.8502 14.8311 8.16386 15 8.5 15H12.5V17C12.5 17.5523 12.9477 18 13.5 18C14.0523 18 14.5 17.5523 14.5 17V15H15.5C16.0523 15 16.5 14.5523 16.5 14C16.5 13.4477 16.0523 13 15.5 13H14.5V8C14.5 7.44772 14.0523 7 13.5 7C12.9477 7 12.5 7.44772 12.5 8V13H10.0165L12.4191 7.39392Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M14.5 8C14.5 7.44772 14.0523 7 13.5 7C12.9477 7 12.5 7.44772 12.5 8H14.5ZM12.5 17C12.5 17.5523 12.9477 18 13.5 18C14.0523 18 14.5 17.5523 14.5 17H12.5ZM15.5 15C16.0523 15 16.5 14.5523 16.5 14C16.5 13.4477 16.0523 13 15.5 13V15ZM8.5 14L7.58085 13.6061C7.44844 13.915 7.48012 14.2699 7.66516 14.5505C7.8502 14.8311 8.16386 15 8.5 15V14ZM12.4191 7.39392C12.6367 6.88629 12.4015 6.29841 11.8939 6.08085C11.3863 5.8633 10.7984 6.09845 10.5809 6.60608L12.4191 7.39392ZM12.5 8V14H14.5V8H12.5ZM12.5 14V17H14.5V14H12.5ZM15.5 13H13.5V15H15.5V13ZM13.5 13H8.5V15H13.5V13ZM9.41915 14.3939L12.4191 7.39392L10.5809 6.60608L7.58085 13.6061L9.41915 14.3939ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z" fill="currentColor"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8939 6.08087C12.4016 6.29842 12.6367 6.8863 12.4191 7.39393L10.0165 13H12.5V8.00001C12.5 7.44773 12.9477 7.00001 13.5 7.00001C14.0523 7.00001 14.5 7.44773 14.5 8.00001V13H15.5C16.0523 13 16.5 13.4477 16.5 14C16.5 14.5523 16.0523 15 15.5 15H14.5V17C14.5 17.5523 14.0523 18 13.5 18C12.9477 18 12.5 17.5523 12.5 17V15H8.5C8.16386 15 7.85021 14.8311 7.66516 14.5505C7.48012 14.2699 7.44845 13.9151 7.58086 13.6061L10.5809 6.60609C10.7984 6.09846 11.3863 5.86331 11.8939 6.08087Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 8V17M15.5 14H8.5L11.5 7M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Circle4;