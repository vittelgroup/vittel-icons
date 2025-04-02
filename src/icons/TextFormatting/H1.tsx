import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const H1: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L16.6343 7.36569C17.0627 6.93731 17.2769 6.72312 17.4608 6.70865C17.6203 6.69609 17.7763 6.76068 17.8802 6.88238C18 7.02265 18 7.32555 18 7.93137V18M15 18H21M3 6V18M10 12H3M10 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3.55228 5 4 5.44772 4 6V11H9V6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V13H4V18C4 18.5523 3.55228 19 3 19C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5ZM17 8.41421L15.7071 9.70711C15.3166 10.0976 14.6834 10.0976 14.2929 9.70711C13.9024 9.31658 13.9024 8.68342 14.2929 8.29289L15.9535 6.63224C16.1447 6.44103 16.3326 6.25308 16.4973 6.11519C16.6442 5.99217 16.9537 5.74547 17.3823 5.71173C17.861 5.67406 18.3288 5.86782 18.6406 6.23293C18.9198 6.55988 18.9642 6.95314 18.9811 7.14403C19.0001 7.358 19 7.62378 19 7.89417L19 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H17V8.41421Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L16.6343 7.36569C17.0627 6.93731 17.2769 6.72312 17.4608 6.70865C17.6203 6.69609 17.7763 6.76068 17.8802 6.88238C18 7.02265 18 7.32555 18 7.93137V18M15 18H21M3 6V18M10 12H4M10 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M17 8.41415L15.7071 9.70704C15.3166 10.0976 14.6834 10.0976 14.2929 9.70704C13.9024 9.31651 13.9024 8.68335 14.2929 8.29283L15.9535 6.63217L15.9536 6.63215C16.1447 6.44095 16.3326 6.25301 16.4973 6.11512C16.6442 5.9921 16.9537 5.7454 17.3823 5.71166C17.861 5.67399 18.3288 5.86775 18.6406 6.23287C18.9198 6.55981 18.9642 6.95307 18.9811 7.14396C19.0001 7.35794 19 7.62371 19 7.8941L19 16.9999H21C21.5523 16.9999 22 17.4476 22 17.9999C22 18.5522 21.5523 18.9999 21 18.9999H15C14.4477 18.9999 14 18.5522 14 17.9999C14 17.4476 14.4477 16.9999 15 16.9999H17V8.41415Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3.55228 5 4 5.44772 4 6V11H9V6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V18C11 18.5523 10.5523 19 10 19C9.44772 19 9 18.5523 9 18V13H4V18C4 18.5523 3.55228 19 3 19C2.44772 19 2 18.5523 2 18V6C2 5.44772 2.44772 5 3 5Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15 9L16.6343 7.36569C17.0627 6.93731 17.2769 6.72312 17.4608 6.70865C17.6203 6.69609 17.7763 6.76068 17.8802 6.88238C18 7.02265 18 7.32555 18 7.93137V18M15 18H21M3 6V18M10 12H3M10 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default H1;