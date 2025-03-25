import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Forward: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 17V15.8C4 14.1198 4 13.2798 4.32698 12.638C4.6146 12.0735 5.07354 11.6146 5.63803 11.327C6.27976 11 7.11984 11 8.8 11H20M20 11L16 7M20 11L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L20.7071 10.2929C21.0976 10.6834 21.0976 11.3166 20.7071 11.7071L16.7071 15.7071C16.3166 16.0976 15.6834 16.0976 15.2929 15.7071C14.9024 15.3166 14.9024 14.6834 15.2929 14.2929L17.5858 12H8.8C7.94342 12 7.36113 12.0008 6.91104 12.0376C6.47262 12.0734 6.24842 12.1383 6.09202 12.218C5.7157 12.4097 5.40973 12.7157 5.21799 13.092C5.1383 13.2484 5.07337 13.4726 5.03755 13.911C5.00078 14.3611 5 14.9434 5 15.8V17C5 17.5523 4.55229 18 4 18C3.44772 18 3 17.5523 3 17L3 15.7587C2.99999 14.9537 2.99998 14.2894 3.04419 13.7482C3.09012 13.1861 3.18868 12.6694 3.43597 12.184C3.81947 11.4314 4.43139 10.8195 5.18404 10.436C5.66937 10.1887 6.18608 10.0901 6.74817 10.0442C7.28937 9.99998 7.95373 9.99999 8.7587 10L17.5858 10L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 17V15.8C4 14.1198 4 13.2798 4.32698 12.638C4.6146 12.0735 5.07354 11.6146 5.63803 11.327C6.27976 11 7.11984 11 8.8 11H20M20 11L16 7M20 11L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M8.7587 10L20 10C20.5523 10 21 10.4477 21 11C21 11.5523 20.5523 12 20 12H8.8C7.94342 12 7.36113 12.0008 6.91104 12.0376C6.47262 12.0734 6.24842 12.1383 6.09202 12.218C5.7157 12.4097 5.40973 12.7157 5.21799 13.092C5.1383 13.2484 5.07337 13.4726 5.03755 13.911C5.00078 14.3611 5 14.9434 5 15.8V17C5 17.5523 4.55229 18 4 18C3.44772 18 3 17.5523 3 17L3 15.7587C2.99999 14.9537 2.99998 14.2894 3.04419 13.7482C3.09012 13.1861 3.18868 12.6694 3.43597 12.184C3.81947 11.4314 4.43139 10.8195 5.18404 10.436C5.66937 10.1887 6.18608 10.0901 6.74817 10.0442C7.28937 9.99998 7.95373 9.99999 8.7587 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L20.7071 10.2929C21.0976 10.6834 21.0976 11.3166 20.7071 11.7071L16.7071 15.7071C16.3166 16.0976 15.6834 16.0976 15.2929 15.7071C14.9024 15.3166 14.9024 14.6834 15.2929 14.2929L18.5858 11L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 17V15.8C4 14.1198 4 13.2798 4.32698 12.638C4.6146 12.0735 5.07354 11.6146 5.63803 11.327C6.27976 11 7.11984 11 8.8 11H20M20 11L16 7M20 11L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Forward;