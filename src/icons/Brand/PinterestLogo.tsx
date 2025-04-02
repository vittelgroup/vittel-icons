import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const PinterestLogo: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.74637 15.5991C11 17 12.5 17 13.5 17C16.5 17 19.5 14.2442 19.5 10.5C19.5 6.35786 16.1421 3 12 3C7.85786 3 4.5 6.35786 4.5 10.5C4.5 11.8637 4.86394 13.1423 5.5 14.2442M11.5 8L8.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C8.41015 4 5.5 6.91015 5.5 10.5C5.5 11.6835 5.8154 12.7903 6.36606 13.7442C6.64217 14.2225 6.47826 14.8341 5.99995 15.1102C5.52164 15.3863 4.91006 15.2224 4.63394 14.7441C3.91249 13.4944 3.5 12.0438 3.5 10.5C3.5 5.80558 7.30558 2 12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 14.7699 17.0785 18 13.5 18C13.4883 18 13.4765 18 13.4645 18C12.7324 18.0002 11.5501 18.0005 10.3668 17.3577L9.47439 21.2249C9.3502 21.763 8.81328 22.0986 8.27514 21.9744C7.737 21.8502 7.40142 21.3133 7.52561 20.7751L8.76927 15.3859C8.7711 15.3775 8.77303 15.3692 8.77507 15.3608L10.5256 7.77514C10.6498 7.237 11.1867 6.90142 11.7249 7.02561C12.263 7.1498 12.5986 7.68672 12.4744 8.22486L10.847 15.2768C11.6958 15.9839 12.6334 16 13.5 16C15.9215 16 18.5 13.7185 18.5 10.5C18.5 6.91015 15.5899 4 12 4Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<ellipse opacity="0.14" cx="12" cy="10" rx="8" ry="7" fill="#0000CC"/>
<path d="M9.74637 15.5991C11 17 12.5 17 13.5 17C16.5 17 19.5 14.2442 19.5 10.5C19.5 6.35786 16.1421 3 12 3C7.85786 3 4.5 6.35786 4.5 10.5C4.5 11.8637 4.86394 13.1423 5.5 14.2442M11.5 8L8.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M11.7251 7.02559C12.2632 7.14977 12.5988 7.6867 12.4746 8.22484L9.47461 21.2248C9.35043 21.763 8.8135 22.0986 8.27536 21.9744C7.73722 21.8502 7.40164 21.3133 7.52583 20.7751L10.5258 7.77512C10.65 7.23698 11.1869 6.9014 11.7251 7.02559Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C8.41015 4 5.5 6.91015 5.5 10.5C5.5 11.6835 5.8154 12.7903 6.36606 13.7442C6.64217 14.2225 6.47826 14.8341 5.99995 15.1102C5.52164 15.3863 4.91006 15.2224 4.63394 14.7441C3.91249 13.4944 3.5 12.0438 3.5 10.5C3.5 5.80558 7.30558 2 12 2C16.6944 2 20.5 5.80558 20.5 10.5C20.5 14.7699 17.0785 18 13.5 18C13.4883 18 13.4765 18 13.4645 18C12.4452 18.0002 10.5536 18.0007 9.00117 16.2659C8.63288 15.8544 8.66796 15.2222 9.07952 14.8539C9.49109 14.4856 10.1233 14.5207 10.4916 14.9322C11.4283 15.979 12.5104 16 13.5 16C15.9215 16 18.5 13.7185 18.5 10.5C18.5 6.91015 15.5899 4 12 4Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.74637 15.5991C11 17 12.5 17 13.5 17C16.5 17 19.5 14.2442 19.5 10.5C19.5 6.35786 16.1421 3 12 3C7.85786 3 4.5 6.35786 4.5 10.5C4.5 11.8637 4.86394 13.1423 5.5 14.2442M11.5 8L8.5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
)
  }
};

export default PinterestLogo;