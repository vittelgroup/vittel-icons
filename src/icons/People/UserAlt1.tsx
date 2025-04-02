import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const UserAlt1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.0004 2C9.23894 2 7.00036 4.23858 7.00036 7C7.00036 9.76142 9.23894 12 12.0004 12C14.7618 12 17.0004 9.76142 17.0004 7C17.0004 4.23858 14.7618 2 12.0004 2Z" fill="currentColor"/>
<path d="M12.0004 13C15.5854 13 18.6809 15.0961 20.128 18.1297C20.4453 18.7949 20.604 19.1275 20.48 19.8975C20.3961 20.4187 19.8675 21.2564 19.4332 21.5566C18.7917 22 18.1946 22 17.0004 22H7.00036C5.80615 22 5.20904 22 4.56748 21.5566C4.13318 21.2564 3.60465 20.4187 3.52072 19.8975C3.39673 19.1275 3.5554 18.7949 3.87272 18.1297C5.31986 15.0961 8.41532 13 12.0004 13Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill="currentColor"/>
<path d="M12 14C15.866 14 19 17.134 19 21H5C5 17.134 8.13401 14 12 14Z" fill="currentColor"/>
</g>
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z" fill="currentColor"/>
<path d="M12.0004 13C15.5854 13 18.6809 15.0961 20.128 18.1297C20.4453 18.7949 20.604 19.1275 20.48 19.8975C20.3961 20.4187 19.8675 21.2564 19.4332 21.5566C18.7917 22 18.1946 22 17.0004 22H7.00036C5.80615 22 5.20904 22 4.56748 21.5566C4.13318 21.2564 3.60465 20.4187 3.52072 19.8975C3.39673 19.1275 3.5554 18.7949 3.87272 18.1297C5.31986 15.0961 8.41532 13 12.0004 13Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default UserAlt1;