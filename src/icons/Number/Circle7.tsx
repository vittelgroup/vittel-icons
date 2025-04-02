import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Circle7: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 7H15L11 17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8H13.523L10.0715 16.6286C9.86641 17.1414 10.1158 17.7234 10.6286 17.9285C11.1414 18.1336 11.7234 17.8842 11.9285 17.3714L15.9285 7.37139C16.0517 7.0633 16.0141 6.71414 15.8281 6.43937C15.642 6.1646 15.3318 6 15 6H9Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="12" r="9" fill="#0000CC"/>
<path d="M9 6C8.44772 6 8 6.44772 8 7C8 7.55228 8.44772 8 9 8V6ZM15 7L15.9285 7.37139C16.0517 7.0633 16.0141 6.71414 15.8281 6.43937C15.642 6.1646 15.3318 6 15 6V7ZM10.0715 16.6286C9.86641 17.1414 10.1158 17.7234 10.6286 17.9285C11.1414 18.1336 11.7234 17.8842 11.9285 17.3714L10.0715 16.6286ZM9 8H15V6H9V8ZM14.0715 6.62861L10.0715 16.6286L11.9285 17.3714L15.9285 7.37139L14.0715 6.62861ZM20 12C20 16.4183 16.4183 20 12 20V22C17.5228 22 22 17.5228 22 12H20ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4Z" fill="currentColor"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.3" cx="12" cy="12" r="10" fill="#0000CC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7C8 6.44772 8.44772 6 9 6H15C15.3318 6 15.642 6.1646 15.8281 6.43937C16.0141 6.71414 16.0517 7.0633 15.9285 7.37139L11.9285 17.3714C11.7234 17.8842 11.1414 18.1336 10.6286 17.9285C10.1158 17.7234 9.86641 17.1414 10.0715 16.6286L13.523 8H9C8.44772 8 8 7.55228 8 7Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9 7H15L11 17M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Circle7;