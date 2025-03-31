import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LocationMinus: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.2C4 5.69801 7.55535 2 12 2C16.4446 2 20 5.69801 20 10.2C20 12.4965 18.9859 14.5068 17.613 16.3405C16.4671 17.871 15.0003 19.3666 13.5411 20.8543C13.2654 21.1355 12.99 21.4163 12.717 21.6971C12.5287 21.8907 12.2701 22 12 22C11.7299 22 11.4713 21.8907 11.283 21.6971C11.01 21.4163 10.7346 21.1355 10.4589 20.8543C8.99974 19.3666 7.53292 17.871 6.38702 16.3405C5.01406 14.5068 4 12.4965 4 10.2ZM9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H9Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" fill="currentColor"/>
<path d="M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 10.2C4 5.69801 7.55535 2 12 2C16.4446 2 20 5.69801 20 10.2C20 12.4965 18.9859 14.5068 17.613 16.3405C16.4671 17.871 15.0003 19.3666 13.5411 20.8543C13.2654 21.1355 12.99 21.4163 12.717 21.6971C12.5287 21.8907 12.2701 22 12 22C11.7299 22 11.4713 21.8907 11.283 21.6971C11.01 21.4163 10.7346 21.1355 10.4589 20.8543C8.99974 19.3666 7.53292 17.871 6.38702 16.3405C5.01406 14.5068 4 12.4965 4 10.2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H9Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 10.0008L9 10M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default LocationMinus;