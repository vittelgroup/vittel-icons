import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const Shuttlecock: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 20L4 16M8 20L10 18M8 20C6.8002 21.2 5.01128 21.3792 3.82942 20.198C2.61929 19 2.77138 17.2 4 16M4 16L6 14M10 18L8 16M10 18L16 15.8182M6 14L8 16M6 14L8.18182 8M17 10H21V14L16 15.8182M17 10L18 6L14 7M17 10L12 12M17 10L16 15.8182M14 7V3H10L8.18182 8M14 7L12 12M12 12L8 16M14.0018 7L8.18182 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.06095 2.65826C9.20466 2.26307 9.58024 2 10.0007 2H14.0007C14.553 2 15.0007 2.44772 15.0007 3V5.71922L17.7582 5.02986C18.099 4.94466 18.4595 5.04451 18.7079 5.29289C18.9562 5.54127 19.0561 5.90176 18.9709 6.24254L18.2815 9H21.0007C21.553 9 22.0007 9.44772 22.0007 10V14C22.0007 14.4205 21.7377 14.7961 21.3425 14.9398L10.551 18.864L9.41459 20.0004L4.00037 14.5862L5.13677 13.4498L9.06095 2.65826ZM10.2575 16.8426L15.1135 15.0768L15.7124 11.5924L12.5627 12.8522L9.41496 16L10.2575 16.8426ZM8.00074 14.5858L11.1485 11.438L12.4083 8.28858L8.92399 8.88726L7.15818 13.7432L8.00074 14.5858Z" fill="currentColor"/>
<path d="M2.65839 16.0726C1.70135 17.5626 1.71871 19.5133 3.12493 20.9069C4.51403 22.2938 6.44808 22.2704 7.92231 21.3365L2.65839 16.0726Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M4 16L8 20L10 18L8 16L6 14L4 16Z" fill="currentColor"/>
<path d="M8 20L4 16C2.77138 17.2 2.61929 19 3.82942 20.198C5.01128 21.3792 6.8002 21.2 8 20Z" fill="currentColor"/>
<path d="M12 12L14 7L8.18182 8L6 14L8 16L12 12Z" fill="currentColor"/>
<path d="M12 12L8 16L10 18L16 15.8182L17 10L12 12Z" fill="currentColor"/>
<path d="M17 10L18 6L14 7L12 12L17 10Z" fill="currentColor"/>
<path d="M14 7V3H10L8.18182 8L14 7Z" fill="currentColor"/>
<path d="M21 14V10H17L16 15.8182L21 14Z" fill="currentColor"/>
</g>
<path d="M8 20L4 16M8 20L10 18M8 20C6.8002 21.2 5.01128 21.3792 3.82942 20.198C2.61929 19 2.77138 17.2 4 16M4 16L6 14M10 18L8 16M10 18L16 15.8182M6 14L8 16M6 14L8.18182 8M17 10H21V14L16 15.8182M17 10L18 6L14 7M17 10L12 12M17 10L16 15.8182M14 7V3H10L8.18182 8M14 7L12 12M12 12L8 16M14.0018 7L8.18182 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M4 16L8 20L10 18L8 16L6 14L4 16Z" fill="currentColor"/>
<path d="M8 20L4 16C2.77138 17.2 2.61929 19 3.82942 20.198C5.01128 21.3792 6.8002 21.2 8 20Z" fill="currentColor"/>
<path d="M12 12L14 7L8.18182 8L6 14L8 16L12 12Z" fill="currentColor"/>
<path d="M12 12L8 16L10 18L16 15.8182L17 10L12 12Z" fill="currentColor"/>
<path d="M17 10L18 6L14 7L12 12L17 10Z" fill="currentColor"/>
<path d="M14 7V3H10L8.18182 8L14 7Z" fill="currentColor"/>
<path d="M21 14V10H17L16 15.8182L21 14Z" fill="currentColor"/>
</g>
<path d="M8 20L4 16M8 20L10 18M8 20C6.8002 21.2 5.01128 21.3792 3.82942 20.198C2.61929 19 2.77138 17.2 4 16M4 16L6 14M10 18L8 16M10 18L16 15.8182M6 14L8 16M6 14L8.18182 8M17 10H21V14L16 15.8182M17 10L18 6L14 7M17 10L12 12M17 10L16 15.8182M14 7V3H10L8.18182 8M14 7L12 12M12 12L8 16M14.0018 7L8.18182 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 20L4 16M8 20L10 18M8 20C6.8002 21.2 5.01128 21.3792 3.82942 20.198C2.61929 19 2.77138 17.2 4 16M4 16L6 14M10 18L8 16M10 18L16 15.8182M6 14L8 16M6 14L8.18182 8M17 10H21V14L16 15.8182M17 10L18 6L14 7M17 10L12 12M17 10L16 15.8182M14 7V3H10L8.18182 8M14 7L12 12M12 12L8 16M14.0018 7L8.18182 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default Shuttlecock;