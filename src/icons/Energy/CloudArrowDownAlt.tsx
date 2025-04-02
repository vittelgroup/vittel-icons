import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const CloudArrowDownAlt: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9.5V15.5M12 15.5L10 13.5M12 15.5L14 13.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6893 4C10.1141 4 7.90376 5.51707 6.80892 7.62107C3.91761 8.33361 2 10.877 2 13.6493C2 17.1653 4.87404 20 8.4 20L16.5 20C19.5382 20 22 17.5355 22 14.4969C22 12.4783 20.9071 10.5857 19.2384 9.60789C18.7677 6.42894 16.0089 4 12.6893 4ZM13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13.5858L10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929C14.3166 12.9024 13.6834 12.9024 13.2929 13.2929L13 13.5858V10Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z" fill="currentColor"/>
<path d="M12 9.5V15.5M12 15.5L10 13.5M12 15.5L14 13.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M12.6893 4C10.1141 4 7.90376 5.51707 6.80892 7.62107C3.91761 8.33361 2 10.877 2 13.6493C2 17.1653 4.87404 20 8.4 20L16.5 20C19.5382 20 22 17.5355 22 14.4969C22 12.4783 20.9071 10.5857 19.2384 9.60789C18.7677 6.42894 16.0089 4 12.6893 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10V13.5858L10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929C8.90237 13.6834 8.90237 14.3166 9.29289 14.7071L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929C14.3166 12.9024 13.6834 12.9024 13.2929 13.2929L13 13.5858V10Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 9.5V15.5M12 15.5L10 13.5M12 15.5L14 13.5M8.4 19C5.41766 19 3 16.6044 3 13.6493C3 11.2001 4.8 8.9375 7.5 8.5C8.34694 6.48637 10.3514 5 12.6893 5C15.684 5 18.1317 7.32251 18.3 10.25C19.8893 10.9449 21 12.6503 21 14.4969C21 16.9839 18.9853 19 16.5 19L8.4 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default CloudArrowDownAlt;