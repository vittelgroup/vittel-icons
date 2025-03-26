import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Trademark: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7H9M6 17V7M13 17V7L17 14L21 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7433 6.03359C13.1816 5.91721 13.6433 6.11026 13.8682 6.50395L17 11.9845L20.1318 6.50395C20.3567 6.11026 20.8184 5.91721 21.2567 6.03359C21.6949 6.14997 22 6.54666 22 7.00009V17.0001C22 17.5524 21.5523 18.0001 21 18.0001C20.4477 18.0001 20 17.5524 20 17.0001V10.7657L17.8682 14.4962C17.6902 14.8078 17.3589 15.0001 17 15.0001C16.6411 15.0001 16.3098 14.8078 16.1318 14.4962L14 10.7657V17.0001C14 17.5524 13.5523 18.0001 13 18.0001C12.4477 18.0001 12 17.5524 12 17.0001V7.00009C12 6.54666 12.3051 6.14997 12.7433 6.03359ZM2 7.00009C2 6.44781 2.44772 6.00009 3 6.00009H9C9.55228 6.00009 10 6.44781 10 7.00009C10 7.55238 9.55228 8.00009 9 8.00009H7V17.0001C7 17.5524 6.55228 18.0001 6 18.0001C5.44772 18.0001 5 17.5524 5 17.0001V8.00009H3C2.44772 8.00009 2 7.55238 2 7.00009Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7H9M6 17V7M13 17V7L17 14L21 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12.7433 6.03359C13.1816 5.91721 13.6433 6.11026 13.8682 6.50395L17 11.9845L20.1318 6.50395C20.3567 6.11026 20.8184 5.91721 21.2567 6.03359C21.6949 6.14997 22 6.54666 22 7.00009V17.0001C22 17.5524 21.5523 18.0001 21 18.0001C20.4477 18.0001 20 17.5524 20 17.0001V10.7657L17.8682 14.4962C17.6902 14.8078 17.3589 15.0001 17 15.0001C16.6411 15.0001 16.3098 14.8078 16.1318 14.4962L14 10.7657V17.0001C14 17.5524 13.5523 18.0001 13 18.0001C12.4477 18.0001 12 17.5524 12 17.0001V7.00009C12 6.54666 12.3051 6.14997 12.7433 6.03359Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 7C2 6.44772 2.44772 6 3 6H9C9.55228 6 10 6.44772 10 7C10 7.55228 9.55228 8 9 8H7V17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17V8H3C2.44772 8 2 7.55228 2 7Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 7H9M6 17V7M13 17V7L17 14L21 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Trademark;