import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Terminal: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19H21M3 5L11 12L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.24744 4.34151C2.61112 3.92587 3.24288 3.88375 3.65852 4.24744L11.6585 11.2474C11.8755 11.4373 12 11.7117 12 12C12 12.2884 11.8755 12.5627 11.6585 12.7526L3.65852 19.7526C3.24288 20.1163 2.61112 20.0742 2.24744 19.6585C1.88375 19.2429 1.92587 18.6111 2.34151 18.2474L9.48142 12L2.34151 5.75259C1.92587 5.38891 1.88375 4.75715 2.24744 4.34151ZM11 19C11 18.4477 11.4477 18 12 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H12C11.4477 20 11 19.5523 11 19Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19H21M3 5L11 12L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M11 19C11 18.4477 11.4477 18 12 18H21C21.5523 18 22 18.4477 22 19C22 19.5523 21.5523 20 21 20H12C11.4477 20 11 19.5523 11 19Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.24744 4.34151C2.61112 3.92587 3.24288 3.88375 3.65852 4.24744L11.6585 11.2474C11.8755 11.4373 12 11.7117 12 12C12 12.2884 11.8755 12.5627 11.6585 12.7526L3.65852 19.7526C3.24288 20.1163 2.61112 20.0742 2.24744 19.6585C1.88375 19.2429 1.92587 18.6111 2.34151 18.2474L9.48142 12L2.34151 5.75259C1.92587 5.38891 1.88375 4.75715 2.24744 4.34151Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 19H21M3 5L11 12L3 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Terminal;