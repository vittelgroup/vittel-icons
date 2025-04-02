import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SatelliteDish: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3C16.9706 3 21 7.02944 21 12M12 7C14.7614 7 17 9.23858 17 12M10 14L12 12M10 21C6.13401 21 3 17.866 3 14C3 12.067 3.7835 10.317 5.05025 9.05029L14.9512 18.9512C13.6844 20.2179 11.933 21 10 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4C16.4183 4 20 7.58172 20 12C20 12.5523 20.4477 13 21 13C21.5523 13 22 12.5523 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/>
<path d="M12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8C14.2091 8 16 9.79086 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 8.68629 15.3137 6 12 6Z" fill="currentColor"/>
<path d="M11.4142 14L12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929L9.99999 12.5858L5.75736 8.34318C5.36683 7.95266 4.73367 7.95266 4.34315 8.34319C2.89653 9.78981 2 11.7912 2 14C2 18.4183 5.58172 22 10 22C12.2081 22 14.2111 21.1054 15.6583 19.6583C15.8458 19.4707 15.9512 19.2164 15.9512 18.9512C15.9512 18.686 15.8458 18.4316 15.6583 18.2441L11.4142 14Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 14C3 17.866 6.13401 21 10 21C11.933 21 13.6844 20.2179 14.9512 18.9512L5.05025 9.05029C3.7835 10.317 3 12.067 3 14Z" fill="currentColor"/>
<path d="M12 3C16.9706 3 21 7.02944 21 12M12 7C14.7614 7 17 9.23858 17 12M10 14L12 12M10 21C6.13401 21 3 17.866 3 14C3 12.067 3.7835 10.317 5.05025 9.05029L14.9512 18.9512C13.6844 20.2179 11.933 21 10 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M5.75736 8.34318C5.36683 7.95266 4.73367 7.95266 4.34315 8.34319C2.89653 9.78981 2 11.7912 2 14C2 18.4183 5.58172 22 10 22C12.2081 22 14.2111 21.1054 15.6583 19.6583C15.8458 19.4707 15.9512 19.2164 15.9512 18.9512C15.9512 18.686 15.8458 18.4316 15.6583 18.2441C10.1617 12.7475 11.2532 13.839 5.75736 8.34318Z" fill="currentColor"/>
<path d="M12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4C16.4183 4 20 7.58172 20 12C20 12.5523 20.4477 13 21 13C21.5523 13 22 12.5523 22 12C22 6.47715 17.5229 2 12 2Z" fill="currentColor"/>
<path d="M12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8C14.2092 8 16 9.79086 16 12C16 12.5523 16.4477 13 17 13C17.5523 13 18 12.5523 18 12C18 8.68629 15.3137 6 12 6Z" fill="currentColor"/>
<path d="M11.4142 14L12.7071 12.7071C13.0977 12.3166 13.0977 11.6834 12.7071 11.2929C12.3166 10.9024 11.6834 10.9024 11.2929 11.2929L10 12.5858C-6.81684 -4.23099 28.291 30.8768 11.4142 14Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 3C16.9706 3 21 7.02944 21 12M12 7C14.7614 7 17 9.23858 17 12M10 14L12 12M10 21C6.13401 21 3 17.866 3 14C3 12.067 3.7835 10.317 5.05025 9.05029L14.9512 18.9512C13.6844 20.2179 11.933 21 10 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default SatelliteDish;