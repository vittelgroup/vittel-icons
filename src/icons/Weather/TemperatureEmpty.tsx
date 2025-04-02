import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TemperatureEmpty: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 16.9998L12.0071 17.0069M16 16.9998C16 19.209 14.2091 20.9998 12 20.9998C9.79086 20.9998 8 19.209 8 16.9998C8 15.9854 8.37764 15.0591 9 14.354L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V14.354C15.6224 15.0591 16 15.9854 16 16.9998ZM13 16.9998C13 17.5521 12.5523 17.9998 12 17.9998C11.4477 17.9998 11 17.5521 11 16.9998C11 16.4475 11.4477 15.9998 12 15.9998C12.5523 15.9998 13 16.4475 13 16.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V13.9995C7.37256 14.835 7 15.8748 7 16.9998C7 19.7613 9.23858 21.9998 12 21.9998C14.7614 21.9998 17 19.7613 17 16.9998C17 15.8748 16.6274 14.835 16 13.9995V6C16 3.79086 14.2091 2 12 2ZM12 14.9998C10.8954 14.9998 10 15.8952 10 16.9998C10 18.1044 10.8954 18.9998 12 18.9998C13.1046 18.9998 14 18.1044 14 16.9998C14 15.8952 13.1046 14.9998 12 14.9998Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M12 20.9998C14.2091 20.9998 16 19.209 16 16.9998C16 15.9854 15.6224 15.0591 15 14.354V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6L9 14.354C8.37764 15.0591 8 15.9854 8 16.9998C8 19.209 9.79086 20.9998 12 20.9998Z" fill="currentColor"/>
<path d="M12 16.9998L12.0071 17.0069M16 16.9998C16 19.209 14.2091 20.9998 12 20.9998C9.79086 20.9998 8 19.209 8 16.9998C8 15.9854 8.37764 15.0591 9 14.354L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V14.354C15.6224 15.0591 16 15.9854 16 16.9998ZM13 16.9998C13 17.5521 12.5523 17.9998 12 17.9998C11.4477 17.9998 11 17.5521 11 16.9998C11 16.4475 11.4477 15.9998 12 15.9998C12.5523 15.9998 13 16.4475 13 16.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.79086 2 8 3.79086 8 6V13.9995C7.37256 14.835 7 15.8748 7 16.9998C7 19.7613 9.23858 21.9998 12 21.9998C14.7614 21.9998 17 19.7613 17 16.9998C17 15.8748 16.6274 14.835 16 13.9995V6C16 3.79086 14.2091 2 12 2ZM12 14.9998C10.8954 14.9998 10 15.8952 10 16.9998C10 18.1044 10.8954 18.9998 12 18.9998C13.1046 18.9998 14 18.1044 14 16.9998C14 15.8952 13.1046 14.9998 12 14.9998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 16.9998L12.0071 17.0069M16 16.9998C16 19.209 14.2091 20.9998 12 20.9998C9.79086 20.9998 8 19.209 8 16.9998C8 15.9854 8.37764 15.0591 9 14.354L9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V14.354C15.6224 15.0591 16 15.9854 16 16.9998ZM13 16.9998C13 17.5521 12.5523 17.9998 12 17.9998C11.4477 17.9998 11 17.5521 11 16.9998C11 16.4475 11.4477 15.9998 12 15.9998C12.5523 15.9998 13 16.4475 13 16.9998Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default TemperatureEmpty;