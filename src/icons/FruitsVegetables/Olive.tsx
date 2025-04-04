import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Olive: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.1302 17.1423C14.9352 20.95 9.60132 21.7344 6.21673 18.8944C2.83213 16.0544 2.67844 10.6654 5.87346 6.85771C9.06847 3.05004 14.4023 2.2656 17.7869 5.10561C21.1715 7.94563 21.3252 13.3346 18.1302 17.1423Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M16.8711 10.8642C16.1611 11.7103 14.5566 11.5329 13.2874 10.4679C12.0182 9.40292 11.5648 7.85362 12.2748 7.00747C12.9848 6.16132 14.5893 6.33874 15.8585 7.40375C17.1278 8.46875 17.5811 10.018 16.8711 10.8642Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'solid':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.10498 6.21485C8.58173 2.07142 14.5373 1.0754 18.4273 4.3395C22.3173 7.6036 22.3705 13.6416 18.8938 17.785C15.417 21.9285 9.4615 22.9245 5.5715 19.6604C1.6815 16.3963 1.62822 10.3583 5.10498 6.21485ZM13.9645 5.49485C14.8349 5.5911 15.7342 5.99586 16.4989 6.63756C17.2637 7.27927 17.8185 8.09457 18.0644 8.93507C18.308 9.76751 18.2715 10.748 17.6348 11.5068C16.998 12.2657 16.0387 12.4719 15.1767 12.3765C14.3062 12.2803 13.407 11.8755 12.6422 11.2338C11.8775 10.5921 11.3227 9.77683 11.0768 8.93632C10.8332 8.10388 10.8696 7.12344 11.5064 6.36455C12.1432 5.60565 13.1024 5.39952 13.9645 5.49485Z" fill="currentColor"/>
</svg>
)
    case 'duotone':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.14" fill-rule="evenodd" clip-rule="evenodd" d="M6.21477 18.8943C9.59937 21.7343 14.9332 20.9499 18.1282 17.1422C21.3232 13.3345 21.1695 7.94551 17.785 5.10549C14.4004 2.26548 9.06652 3.04992 5.87151 6.85759C2.67649 10.6653 2.83017 16.0543 6.21477 18.8943ZM13.286 10.4679C14.5552 11.5329 16.1597 11.7103 16.8697 10.8642C17.5797 10.018 17.1264 8.46875 15.8572 7.40374C14.5879 6.33874 12.9835 6.16132 12.2735 7.00747C11.5635 7.85362 12.0168 9.40292 13.286 10.4679Z" fill="currentColor"/>
<path d="M16.8696 10.8641C16.1596 11.7103 14.5551 11.5329 13.2859 10.4678C12.0167 9.40284 11.5634 7.85354 12.2734 7.00739C12.9834 6.16124 14.5878 6.33866 15.8571 7.40367C17.1263 8.46867 17.5796 10.018 16.8696 10.8641Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
    case 'monochrome':
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.3" d="M18.4273 4.3395C14.5373 1.0754 8.58173 2.07142 5.10498 6.21485C1.62822 10.3583 1.6815 16.3963 5.5715 19.6604C9.4615 22.9245 15.417 21.9285 18.8938 17.785C22.3705 13.6416 22.3173 7.6036 18.4273 4.3395Z" fill="currentColor"/>
<path d="M16.4989 6.63769C15.7342 5.99598 14.8349 5.59122 13.9645 5.49497C13.1024 5.39964 12.1432 5.60577 11.5064 6.36467C10.8696 7.12356 10.8332 8.104 11.0768 8.93644C11.3227 9.77695 11.8775 10.5922 12.6422 11.234C13.407 11.8757 14.3062 12.2804 15.1767 12.3767C16.0387 12.472 16.998 12.2659 17.6348 11.507C18.2715 10.7481 18.308 9.76764 18.0644 8.93519C17.8185 8.09469 17.2637 7.27939 16.4989 6.63769Z" fill="currentColor"/>
</svg>
)
    default:
      return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.1302 17.1423C14.9352 20.95 9.60132 21.7344 6.21673 18.8944C2.83213 16.0544 2.67844 10.6654 5.87346 6.85771C9.06847 3.05004 14.4023 2.2656 17.7869 5.10561C21.1715 7.94563 21.3252 13.3346 18.1302 17.1423Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
<path d="M16.8711 10.8642C16.1611 11.7103 14.5566 11.5329 13.2874 10.4679C12.0182 9.40292 11.5648 7.85362 12.2748 7.00747C12.9848 6.16132 14.5893 6.33874 15.8585 7.40375C17.1278 8.46875 17.5811 10.018 16.8711 10.8642Z" stroke="currentColor" strokeWidth="2" stroke-linejoin="round"/>
</svg>
)
  }
};

export default Olive;