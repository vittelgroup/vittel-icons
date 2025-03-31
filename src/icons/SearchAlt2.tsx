import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const SearchAlt2: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.1259 20 15.0796 19.2629 16.6195 18.0304L20.2926 21.7068C20.6829 22.0975 21.3161 22.0978 21.7068 21.7074C22.0975 21.3171 22.0978 20.6839 21.7074 20.2932L18.0334 16.6159C19.2641 15.0765 20 13.1242 20 11C20 6.02944 15.9706 2 11 2ZM11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C13.2091 7 15 8.79086 15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11C17 7.68629 14.3137 5 11 5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="11" cy="11" r="8" fill="#0000CC"/>
<path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="currentColor"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C13.2091 7 15 8.79086 15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11C17 7.68629 14.3137 5 11 5Z" fill="currentColor"/>
<path d="M20.2926 21.7068L16.6196 18.0305C17.1416 17.6127 17.616 17.1381 18.0335 16.6159L21.7075 20.2932C22.0978 20.6839 22.0975 21.3171 21.7069 21.7074C21.3162 22.0978 20.683 22.0975 20.2926 21.7068Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default SearchAlt2;