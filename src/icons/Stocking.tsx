import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Stocking: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.9994 7V13.9082C17.9994 15.8165 16.9648 17.5748 15.2967 18.5015L11.2011 20.7768C9.87422 21.514 8.23058 21.3593 7.06447 20.3876C5.09587 18.7471 5.36884 15.646 7.59375 14.3747L9.99939 13L9.99939 7M8.99939 3H18.9994V7H8.99939V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99945 2C8.44716 2 7.99945 2.44772 7.99945 3V7C7.99945 7.55228 8.44716 8 8.99945 8H18.9994C19.5517 8 19.9994 7.55228 19.9994 7V3C19.9994 2.44772 19.5517 2 18.9994 2H8.99945Z" fill="currentColor"/>
<path d="M18.9994 9C12.3328 9 15.6661 9 8.99945 9L8.99945 12.4197L7.09766 13.5064C4.26723 15.1238 3.91997 19.0688 6.42434 21.1558C7.90782 22.392 9.99879 22.5888 11.6868 21.651L15.7824 19.3757C17.768 18.2726 18.9994 16.1797 18.9994 13.9082V9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M11.2011 20.7768L15.2967 18.5015C16.9648 17.5748 17.9994 15.8165 17.9994 13.9082V7H9.99939L9.99939 13L7.59375 14.3747C5.36884 15.646 5.09587 18.7471 7.06447 20.3876C8.23058 21.3593 9.87422 21.514 11.2011 20.7768Z" fill="currentColor"/>
<path d="M17.9994 7V13.9082C17.9994 15.8165 16.9648 17.5748 15.2967 18.5015L11.2011 20.7768C9.87422 21.514 8.23058 21.3593 7.06447 20.3876C5.09587 18.7471 5.36884 15.646 7.59375 14.3747L9.99939 13L9.99939 7M8.99939 3H18.9994V7H8.99939V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M8.99945 8L8.99945 12.4197L7.09766 13.5064C4.26723 15.1238 3.91997 19.0688 6.42434 21.1558C7.90782 22.392 9.99879 22.5888 11.6868 21.651L15.7824 19.3757C17.768 18.2726 18.9994 16.1797 18.9994 13.9082V8L8.99945 8C8.99963 8 8.99927 8 8.99945 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H19C19.5523 2 20 2.44772 20 3V7C20 7.55228 19.5523 8 19 8H9C8.44772 8 8 7.55228 8 7V3Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.9994 7V13.9082C17.9994 15.8165 16.9648 17.5748 15.2967 18.5015L11.2011 20.7768C9.87422 21.514 8.23058 21.3593 7.06447 20.3876C5.09587 18.7471 5.36884 15.646 7.59375 14.3747L9.99939 13L9.99939 7M8.99939 3H18.9994V7H8.99939V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Stocking;