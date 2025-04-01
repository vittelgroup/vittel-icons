import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TurnOff: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V3C11 2.44772 11.4477 2 12 2ZM8.86561 5.56953C9.14215 6.04759 8.97879 6.65932 8.50073 6.93586C6.40581 8.14771 5 10.4103 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 10.4103 17.5942 8.14771 15.4993 6.93586C15.0212 6.65932 14.8579 6.04759 15.1344 5.56953C15.4109 5.09147 16.0227 4.92811 16.5007 5.20465C19.1882 6.75928 21 9.66747 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 9.66747 4.81178 6.75928 7.49927 5.20465C7.97733 4.92811 8.58906 5.09147 8.86561 5.56953Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle opacity="0.14" cx="12" cy="13" r="8" fill="#0000CC"/>
<path d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M12 2C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.86561 5.56951C9.14215 6.04757 8.97879 6.6593 8.50073 6.93584C6.40581 8.14768 5 10.4102 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 10.4102 17.5942 8.14768 15.4993 6.93584C15.0212 6.6593 14.8579 6.04757 15.1344 5.56951C15.4109 5.09145 16.0227 4.92809 16.5007 5.20463C19.1882 6.75926 21 9.66745 21 13C21 17.9705 16.9706 22 12 22C7.02944 22 3 17.9705 3 13C3 9.66745 4.81178 6.75926 7.49927 5.20463C7.97733 4.92809 8.58906 5.09145 8.86561 5.56951Z" fill="currentColor"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 6.07026C18.3912 7.45349 20 10.0389 20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 10.0389 5.60879 7.45349 8 6.07026M12 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
</svg>
        )
  }
};

export default TurnOff;