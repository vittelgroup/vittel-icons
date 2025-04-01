import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Dazzle: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 18V15.7994H5L12 6V8.26934H19L12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3052 5.04766C12.7192 5.18033 13 5.56524 13 5.99995V7.26929H19C19.3752 7.26929 19.7188 7.47931 19.8899 7.8132C20.0611 8.1471 20.0309 8.54869 19.8118 8.85326L12.8118 18.5839C12.5583 18.9363 12.1064 19.0849 11.6932 18.9517C11.2801 18.8186 11 18.434 11 17.9999V16.7994H5C4.62541 16.7994 4.28223 16.59 4.11083 16.2569C3.93943 15.9239 3.96855 15.5229 4.18629 15.2181L11.1863 5.41869C11.439 5.06496 11.8912 4.91499 12.3052 5.04766Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 18V15.7994H5L12 6V8.26934H19L12 18Z" fill="currentColor"/>
<path d="M12 18V15.7994H5L12 6V8.26934H19L12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.3052 5.04766C12.7192 5.18033 13 5.56524 13 5.99995V7.26929H19C19.3752 7.26929 19.7188 7.47931 19.8899 7.8132C20.0611 8.1471 20.0309 8.54869 19.8118 8.85326L12.8118 18.5839C12.5583 18.9363 12.1064 19.0849 11.6932 18.9517C11.2801 18.8186 11 18.434 11 17.9999V16.7994H5C4.62541 16.7994 4.28223 16.59 4.11083 16.2569C3.93943 15.9239 3.96855 15.5229 4.18629 15.2181L11.1863 5.41869C11.439 5.06496 11.8912 4.91499 12.3052 5.04766Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 18V15.7994H5L12 6V8.26934H19L12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Dazzle;