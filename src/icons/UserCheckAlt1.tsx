import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const UserCheckAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5218 2C8.76042 2 6.52185 4.23858 6.52185 7C6.52185 9.76142 8.76042 12 11.5218 12C14.2833 12 16.5218 9.76142 16.5218 7C16.5218 4.23858 14.2833 2 11.5218 2Z" fill="currentColor"/>
<path d="M11.5218 13C13.8075 13 15.8941 13.852 17.4815 15.2558L15.7834 16.873C14.5844 15.9844 12.8832 16.1083 11.8276 17.2168C10.6849 18.4165 10.7312 20.3155 11.931 21.4581L12.5 22H6.52185C5.32763 22 4.73052 22 4.08897 21.5566C3.65466 21.2564 3.12614 20.4187 3.0422 19.8975C2.91822 19.1275 3.07688 18.7949 3.39421 18.1297C4.84134 15.0961 7.9368 13 11.5218 13Z" fill="currentColor"/>
<path d="M20.6897 17.7241C21.0896 17.3433 21.105 16.7103 20.7241 16.3103C20.3433 15.9104 19.7103 15.895 19.3103 16.2759L15.8 19.619L14.6897 18.5616C14.2897 18.1807 13.6567 18.1961 13.2759 18.5961C12.895 18.996 12.9104 19.629 13.3103 20.0099L15.1103 21.7241C15.4966 22.092 16.1035 22.092 16.4897 21.7241L20.6897 17.7241Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M11 11C13.2091 11 15 9.20914 15 7C15 4.79086 13.2091 3 11 3C8.79086 3 7 4.79086 7 7C7 9.20914 8.79086 11 11 11Z" fill="currentColor"/>
<path d="M11 14C14.866 14 18 17.134 18 21H4C4 17.134 7.13401 14 11 14Z" fill="currentColor"/>
</g>
<path d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.3">
<path d="M11.5218 2C8.76042 2 6.52185 4.23858 6.52185 7C6.52185 9.76142 8.76042 12 11.5218 12C14.2833 12 16.5218 9.76142 16.5218 7C16.5218 4.23858 14.2833 2 11.5218 2Z" fill="currentColor"/>
<path d="M11.5218 13C13.8075 13 15.8941 13.852 17.4815 15.2558L15.7834 16.873C14.5844 15.9844 12.8832 16.1083 11.8276 17.2168C10.6849 18.4165 10.7312 20.3155 11.931 21.4581L12.5 22H6.52185C5.32763 22 4.73052 22 4.08897 21.5566C3.65466 21.2564 3.12614 20.4187 3.0422 19.8975C2.91822 19.1275 3.07688 18.7949 3.39421 18.1297C4.84134 15.0961 7.9368 13 11.5218 13Z" fill="currentColor"/>
</g>
<path d="M20.6897 17.7241C21.0896 17.3433 21.105 16.7103 20.7241 16.3103C20.3433 15.9104 19.7103 15.895 19.3103 16.2759L15.8 19.619L14.6897 18.5616C14.2897 18.1807 13.6567 18.1961 13.2759 18.5961C12.895 18.996 12.9104 19.629 13.3103 20.0099L15.1103 21.7241C15.4966 22.092 16.1035 22.092 16.4897 21.7241L20.6897 17.7241Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14 19.2857L15.8 21L20 17M4 21C4 17.134 7.13401 14 11 14C12.4872 14 13.8662 14.4638 15 15.2547M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default UserCheckAlt1;