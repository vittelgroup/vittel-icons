import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CardHeart: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 3H19V21H5V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9979 9.59328C11.3981 8.944 10.3979 8.76935 9.64641 9.36389C8.89489 9.95844 8.78909 10.9525 9.37926 11.6557C9.96943 12.3588 11.9979 14 11.9979 14C11.9979 14 14.0265 12.3588 14.6166 11.6557C15.2068 10.9525 15.1139 9.95219 14.3495 9.36389C13.585 8.7756 12.5978 8.944 11.9979 9.59328Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM14.9598 8.57137C14.0239 7.85111 12.887 7.85855 11.9978 8.343C11.1068 7.85766 9.95974 7.8412 9.02638 8.57961C7.85005 9.51024 7.64726 11.147 8.61371 12.2985C8.97162 12.7249 9.69388 13.3656 10.2593 13.8506C10.5556 14.1047 10.8325 14.3358 11.035 14.5033C11.1364 14.5871 11.2195 14.6552 11.2774 14.7025L11.3447 14.7574L11.3693 14.7773C11.7361 15.0741 12.2611 15.0737 12.6279 14.7769L12.652 14.7574L12.7193 14.7025C12.7772 14.6552 12.8603 14.5871 12.9617 14.5033C13.1643 14.3358 13.4411 14.1047 13.7374 13.8506C14.3029 13.3656 15.0251 12.7249 15.383 12.2985C16.3397 11.1587 16.1741 9.5059 14.9598 8.57137Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M5 3H19V21H5V3Z" fill="currentColor"/>
<path d="M5 3H19V21H5V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9979 9.59328C11.3981 8.944 10.3979 8.76935 9.64641 9.36389C8.89489 9.95844 8.78909 10.9525 9.37926 11.6557C9.96943 12.3588 11.9979 14 11.9979 14C11.9979 14 14.0265 12.3588 14.6166 11.6557C15.2068 10.9525 15.1139 9.95219 14.3495 9.36389C13.585 8.7756 12.5978 8.944 11.9979 9.59328Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M4 3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3ZM14.9598 8.57137C14.0239 7.85111 12.887 7.85855 11.9978 8.343C11.1068 7.85766 9.95974 7.8412 9.02638 8.57961C7.85005 9.51024 7.64726 11.147 8.61371 12.2985C8.97162 12.7249 9.69388 13.3656 10.2593 13.8506C10.5556 14.1047 10.8325 14.3358 11.035 14.5033C11.1364 14.5871 11.2195 14.6552 11.2774 14.7025L11.3447 14.7574L11.3693 14.7773C11.7361 15.0741 12.2611 15.0737 12.6279 14.7769L12.652 14.7574L12.7193 14.7025C12.7772 14.6552 12.8603 14.5871 12.9617 14.5033C13.1643 14.3358 13.4411 14.1047 13.7374 13.8506C14.3029 13.3656 15.0251 12.7249 15.383 12.2985C16.3397 11.1587 16.1741 9.5059 14.9598 8.57137Z" fill="currentColor"/>
<path d="M14.9598 8.57137C14.0239 7.85111 12.887 7.85855 11.9978 8.343C11.1068 7.85766 9.95974 7.8412 9.02638 8.57961C7.85005 9.51024 7.64726 11.147 8.61371 12.2985C8.97162 12.7249 9.69388 13.3656 10.2593 13.8506C10.5556 14.1047 10.8325 14.3358 11.035 14.5033C11.1364 14.5871 11.2195 14.6552 11.2774 14.7025L11.3447 14.7574L11.3693 14.7773C11.7361 15.0741 12.2611 15.0737 12.6279 14.7769L12.652 14.7574L12.7193 14.7025C12.7772 14.6552 12.8603 14.5871 12.9617 14.5033C13.1643 14.3358 13.4411 14.1047 13.7374 13.8506C14.3029 13.3656 15.0251 12.7249 15.383 12.2985C16.3397 11.1587 16.1741 9.5059 14.9598 8.57137Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 3H19V21H5V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9979 9.59328C11.3981 8.944 10.3979 8.76935 9.64641 9.36389C8.89489 9.95844 8.78909 10.9525 9.37926 11.6557C9.96943 12.3588 11.9979 14 11.9979 14C11.9979 14 14.0265 12.3588 14.6166 11.6557C15.2068 10.9525 15.1139 9.95219 14.3495 9.36389C13.585 8.7756 12.5978 8.944 11.9979 9.59328Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default CardHeart;