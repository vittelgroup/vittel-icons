import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Icicles: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 4L18.5 20L21 4H16ZM16 4L12 4M16 4L14 11L12 4M12 4L8 4M12 4L10 14L8 4M8 4L3 4L5.5 11L8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7134 8.64325L17.512 20.1544C17.5881 20.6412 18.0073 21 18.5 21C18.9927 21 19.412 20.6412 19.488 20.1544L21.988 4.15438C22.0331 3.8657 21.9497 3.57174 21.7597 3.34976C21.5697 3.12778 21.2922 3 21 3L3.00001 3C2.67481 3 2.36992 3.15813 2.18259 3.42395C1.99526 3.68977 1.94889 4.03008 2.05826 4.33634L4.55826 11.3363C4.7004 11.7343 5.07739 12 5.50001 12C5.92262 12 6.29961 11.7343 6.44175 11.3363L7.72747 7.73632L9.01943 14.1961C9.11291 14.6635 9.52333 15 10 15C10.4767 15 10.8871 14.6635 10.9806 14.1961L12.1716 8.24081L13.0385 11.2747C13.1611 11.704 13.5535 12 14 12C14.4465 12 14.8389 11.704 14.9615 11.2747L15.7134 8.64325Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M14 11L12 4L16 4L14 11Z" fill="currentColor"/>
<path d="M10 14L8 4L12 4L10 14Z" fill="currentColor"/>
<path d="M5.5 11L3 4L8 4L5.5 11Z" fill="currentColor"/>
</g>
<path d="M16 4L18.5 20L21 4H16ZM16 4L12 4M16 4L14 11L12 4M12 4L8 4M12 4L10 14L8 4M8 4L3 4L5.5 11L8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 3C12.2996 3 12.5834 3.13432 12.7733 3.36601C12.9633 3.5977 13.0393 3.90234 12.9806 4.19612L12.1716 8.2408L13.0385 11.2747C13.1611 11.704 13.5535 12 14 12C14.4465 12 14.8389 11.704 14.9615 11.2747L15.7134 8.64325L17.512 20.1544C17.588 20.6412 18.0073 21 18.5 21C18.9927 21 19.412 20.6412 19.488 20.1544L21.988 4.15438C22.0331 3.8657 21.9497 3.57174 21.7597 3.34976C21.5697 3.12778 21.2922 3 21 3H12Z" fill="currentColor"/>
<path d="M6.44175 11.3363L7.72747 7.73632L9.01943 14.1961C9.11291 14.6635 9.52333 15 10 15C10.4767 15 10.8871 14.6635 10.9806 14.1961L12.9806 4.19612C13.0393 3.90234 12.9633 3.5977 12.7733 3.36601C12.5834 3.13432 12.2996 3 12 3H3.00001C2.67481 3 2.36992 3.15813 2.18259 3.42395C1.99526 3.68977 1.94889 4.03008 2.05826 4.33634L4.55826 11.3363C4.7004 11.7343 5.07739 12 5.50001 12C5.92262 12 6.29961 11.7343 6.44175 11.3363Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 4L18.5 20L21 4H16ZM16 4L12 4M16 4L14 11L12 4M12 4L8 4M12 4L10 14L8 4M8 4L3 4L5.5 11L8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Icicles;