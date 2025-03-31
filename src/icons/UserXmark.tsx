import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const UserXmark: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 16L20 21M20 16L15 21M11 14C7.13401 14 4 17.134 4 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H12.1708C11.7987 20.9447 12.0346 19.7228 12.8787 18.8787L13.2574 18.5L12.8787 18.1213C11.7071 16.9497 11.7071 15.0503 12.8787 13.8787C13.0696 13.6878 13.2797 13.528 13.503 13.3994C12.7156 13.1402 11.8742 13 11 13Z" fill="currentColor"/>
<path d="M15.7071 15.2929C15.3166 14.9024 14.6834 14.9024 14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071L16.0858 18.5L14.2929 20.2929C13.9024 20.6834 13.9024 21.3166 14.2929 21.7071C14.6834 22.0976 15.3166 22.0976 15.7071 21.7071L17.5 19.9142L19.2929 21.7071C19.6834 22.0976 20.3166 22.0976 20.7071 21.7071C21.0976 21.3166 21.0976 20.6834 20.7071 20.2929L18.9142 18.5L20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929C20.3166 14.9024 19.6834 14.9024 19.2929 15.2929L17.5 17.0858L15.7071 15.2929Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M11 11C13.2091 11 15 9.20914 15 7C15 4.79086 13.2091 3 11 3C8.79086 3 7 4.79086 7 7C7 9.20914 8.79086 11 11 11Z" fill="currentColor"/>
<path d="M11 14C14.866 14 18 17.134 18 21H4C4 17.134 7.13401 14 11 14Z" fill="currentColor"/>
</g>
<path d="M15 16L20 21M20 16L15 21M11 14C7.13401 14 4 17.134 4 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z" fill="currentColor"/>
<path d="M11 13C6.58172 13 3 16.5817 3 21C3 21.5523 3.44772 22 4 22H12.1708C11.7987 20.9447 12.0346 19.7228 12.8787 18.8787L13.2574 18.5L12.8787 18.1213C11.7071 16.9497 11.7071 15.0503 12.8787 13.8787C13.0696 13.6878 13.2797 13.528 13.503 13.3994C12.7156 13.1402 11.8742 13 11 13Z" fill="currentColor"/>
</g>
<path d="M15.7071 15.2929C15.3166 14.9024 14.6834 14.9024 14.2929 15.2929C13.9024 15.6834 13.9024 16.3166 14.2929 16.7071L16.0858 18.5L14.2929 20.2929C13.9024 20.6834 13.9024 21.3166 14.2929 21.7071C14.6834 22.0976 15.3166 22.0976 15.7071 21.7071L17.5 19.9142L19.2929 21.7071C19.6834 22.0976 20.3166 22.0976 20.7071 21.7071C21.0976 21.3166 21.0976 20.6834 20.7071 20.2929L18.9142 18.5L20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929C20.3166 14.9024 19.6834 14.9024 19.2929 15.2929L17.5 17.0858L15.7071 15.2929Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 16L20 21M20 16L15 21M11 14C7.13401 14 4 17.134 4 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default UserXmark;