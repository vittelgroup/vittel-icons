import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const LocationPinAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 2C7.55535 2 4 5.69801 4 10.2C4 12.4965 5.01406 14.5068 6.38702 16.3405C7.53292 17.871 8.99974 19.3666 10.4589 20.8543C10.7346 21.1355 11.01 21.4163 11.283 21.6971C11.4713 21.8907 11.7299 22 12 22C12.2701 22 12.5287 21.8907 12.717 21.6971C12.99 21.4163 13.2654 21.1355 13.5411 20.8543C15.0003 19.3666 16.4671 17.871 17.613 16.3405C18.9859 14.5068 20 12.4965 20 10.2C20 5.69801 16.4446 2 12 2Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" fill="currentColor"/>
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C7.55535 2 4 5.69801 4 10.2C4 12.4965 5.01406 14.5068 6.38702 16.3405C7.53292 17.871 8.99974 19.3666 10.4589 20.8543C10.7346 21.1355 11.01 21.4163 11.283 21.6971C11.4713 21.8907 11.7299 22 12 22C12.2701 22 12.5287 21.8907 12.717 21.6971C12.99 21.4163 13.2654 21.1355 13.5411 20.8543C15.0003 19.3666 16.4671 17.871 17.613 16.3405C18.9859 14.5068 20 12.4965 20 10.2C20 5.69801 16.4446 2 12 2Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default LocationPinAlt;