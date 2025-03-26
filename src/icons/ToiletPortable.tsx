import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const ToiletPortable: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 7H17M7 21V4.6C7 4.03995 7 3.75992 7.10899 3.54601C7.20487 3.35785 7.35785 3.20487 7.54601 3.10899C7.75992 3 8.03995 3 8.6 3H15.4C15.9601 3 16.2401 3 16.454 3.10899C16.6422 3.20487 16.7951 3.35785 16.891 3.54601C17 3.75992 17 4.03995 17 4.6V21M7 19H17M14 13H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.00005 5C6.00082 4.01165 6.01338 3.49359 6.21799 3.09202C6.40973 2.71569 6.71569 2.40973 7.09202 2.21799C7.51984 2 8.0799 2 9.2 2H14.8C15.9201 2 16.4802 2 16.908 2.21799C17.2843 2.40973 17.5903 2.71569 17.782 3.09202C17.9866 3.49359 17.9992 4.01165 17.9999 5H6.00005Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7V21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21V20H16V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V7H6ZM15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect opacity="0.14" x="7" y="7" width="10" height="12" fill="#0000CC"/>
<path d="M7 7H17M7 21V4.6C7 4.03995 7 3.75992 7.10899 3.54601C7.20487 3.35785 7.35785 3.20487 7.54601 3.10899C7.75992 3 8.03995 3 8.6 3H15.4C15.9601 3 16.2401 3 16.454 3.10899C16.6422 3.20487 16.7951 3.35785 16.891 3.54601C17 3.75992 17 4.03995 17 4.6V21M7 19H17M14 13H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M6.00005 5L6 21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21V20H16V21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21V5H6.00005Z" fill="currentColor"/>
<path d="M16.9079 2.21799C16.4801 2 15.9201 2 14.7999 2H9.19995C8.07984 2 7.51979 2 7.09197 2.21799C6.71564 2.40973 6.40968 2.71569 6.21794 3.09202C6.01333 3.49359 6.00077 4.01165 6 5H17.9999C17.9992 4.01165 17.9866 3.49359 17.782 3.09202C17.5902 2.71569 17.2843 2.40973 16.9079 2.21799Z" fill="currentColor"/>
<path d="M16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 7H17M7 21V4.6C7 4.03995 7 3.75992 7.10899 3.54601C7.20487 3.35785 7.35785 3.20487 7.54601 3.10899C7.75992 3 8.03995 3 8.6 3H15.4C15.9601 3 16.2401 3 16.454 3.10899C16.6422 3.20487 16.7951 3.35785 16.891 3.54601C17 3.75992 17 4.03995 17 4.6V21M7 19H17M14 13H14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default ToiletPortable;