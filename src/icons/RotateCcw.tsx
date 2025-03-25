import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const RotateCcw: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 20.5C17.1944 20.5 21 16.6944 21 12C21 7.30558 17.1944 3.5 12.5 3.5C7.80558 3.5 4 7.30558 4 12C4 13.5433 4.41128 14.9905 5.13022 16.238M1.5 15L5.13022 16.238M6.82531 12.3832L5.47107 16.3542L5.13022 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5003 4.5C8.35814 4.5 5.00027 7.85786 5.00027 12C5.00027 12.6624 5.08593 13.304 5.24668 13.9149L5.87911 12.0604C6.05737 11.5377 6.62564 11.2584 7.14836 11.4367C7.67108 11.615 7.95032 12.1832 7.77206 12.706L6.41782 16.677C6.33221 16.928 6.15039 17.1348 5.91236 17.2517C5.67433 17.3687 5.39959 17.3863 5.14856 17.3007L1.1775 15.9465C0.654773 15.7682 0.375533 15.1999 0.553796 14.6772C0.73206 14.1545 1.30032 13.8753 1.82305 14.0535L3.35381 14.5756C3.12345 13.756 3.00027 12.892 3.00027 12C3.00027 6.75329 7.25357 2.5 12.5003 2.5C17.747 2.5 22.0003 6.75329 22.0003 12C22.0003 17.2467 17.747 21.5 12.5003 21.5C11.948 21.5 11.5003 21.0523 11.5003 20.5C11.5003 19.9477 11.948 19.5 12.5003 19.5C16.6424 19.5 20.0003 16.1421 20.0003 12C20.0003 7.85786 16.6424 4.5 12.5003 4.5Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 20.5C17.1944 20.5 21 16.6944 21 12C21 7.30558 17.1944 3.5 12.5 3.5C7.80558 3.5 4 7.30558 4 12C4 13.5433 4.41128 14.9905 5.13022 16.238M1.5 15L5.13022 16.238M6.82531 12.3832L5.47107 16.3542L5.13022 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 4.5C8.35786 4.5 5 7.85786 5 12C5 13.3634 5.36288 14.639 5.99665 15.7387C6.27241 16.2172 6.10805 16.8287 5.62954 17.1044C5.15103 17.3802 4.53957 17.2158 4.2638 16.7373C3.45969 15.342 3 13.7232 3 12C3 6.75329 7.25329 2.5 12.5 2.5C17.7467 2.5 22 6.75329 22 12C22 17.2467 17.7467 21.5 12.5 21.5C11.9477 21.5 11.5 21.0523 11.5 20.5C11.5 19.9477 11.9477 19.5 12.5 19.5C16.6421 19.5 20 16.1421 20 12C20 7.85786 16.6421 4.5 12.5 4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.14836 11.4366C7.67108 11.6149 7.95032 12.1831 7.77206 12.7059L6.41782 16.6769C6.33221 16.9279 6.15039 17.1347 5.91236 17.2516C5.67433 17.3686 5.39959 17.3862 5.14856 17.3006L1.1775 15.9464C0.654773 15.7681 0.375533 15.1999 0.553796 14.6771C0.73206 14.1544 1.30032 13.8752 1.82305 14.0534L4.84764 15.0849L5.87911 12.0603C6.05737 11.5376 6.62564 11.2583 7.14836 11.4366Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 20.5C17.1944 20.5 21 16.6944 21 12C21 7.30558 17.1944 3.5 12.5 3.5C7.80558 3.5 4 7.30558 4 12C4 13.5433 4.41128 14.9905 5.13022 16.238M1.5 15L5.13022 16.238M6.82531 12.3832L5.47107 16.3542L5.13022 16.238" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default RotateCcw;