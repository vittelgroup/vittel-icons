import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Campground: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 3L3 19V21H21V19L9 3M12 15L16 21H8L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.80188 2.40258C9.4719 1.95971 8.84539 1.8682 8.40252 2.19818C7.95965 2.52816 7.86814 3.15468 8.19812 3.59754L10.7529 7.02638L2.19812 18.5078C2.06948 18.6805 2 18.89 2 19.1053V21.0001C2 21.5523 2.44772 22.0001 3 22.0001H21C21.5523 22.0001 22 21.5523 22 21.0001V19.1053C22 18.89 21.9305 18.6805 21.8019 18.5078L13.2471 7.02638L15.8019 3.59754C16.1319 3.15468 16.0403 2.52816 15.5975 2.19818C15.1546 1.8682 14.5281 1.95971 14.1981 2.40258L12 5.35268L9.80188 2.40258ZM15.5 20L12 15L8.5 20H15.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 19L12 7L21 19V21H16L12 15L8 21H3V19Z" fill="currentColor"/>
<path d="M15 3L3 19V21H21V19L9 3M12 15L16 21H8L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.80188 2.40258C9.4719 1.95971 8.84539 1.8682 8.40252 2.19818C7.95965 2.52816 7.86814 3.15468 8.19812 3.59754L10.7529 7.02638L2.19812 18.5078C2.06948 18.6805 2 18.89 2 19.1053V21.0001C2 21.5523 2.44772 22.0001 3 22.0001H21C21.5523 22.0001 22 21.5523 22 21.0001V19.1053C22 18.89 21.9305 18.6805 21.8019 18.5078L13.2471 7.02638L15.8019 3.59754C16.1319 3.15468 16.0403 2.52816 15.5975 2.19818C15.1546 1.8682 14.5281 1.95971 14.1981 2.40258L12 5.35268L9.80188 2.40258Z" fill="currentColor"/>
<path d="M15.5 20L12 15L8.5 20H15.5Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 3L3 19V21H21V19L9 3M12 15L16 21H8L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Campground;