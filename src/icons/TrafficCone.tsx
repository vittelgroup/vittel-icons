import React from "react";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'linear' | 'solid' | 'duotone' | 'monochrome';
}

const TrafficCone: React.FC<IconsProps> = ({ variant = 'linear', ...props }) => {
  switch (variant) {
    
    case 'linear':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.88889 9.99996H15.1111M6.94444 15H17.0556M3 20H21M5 20L10.3 6.37132C10.8287 5.01189 11.093 4.33217 11.4736 4.13405C11.8035 3.96231 12.1965 3.96231 12.5264 4.13405C12.907 4.33217 13.1713 5.01189 13.7 6.37132L19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'solid':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5174 16L19.6841 19H21C21.5523 19 22 19.4477 22 20C22 20.5522 21.5523 21 21 21H19.0234C19.0079 21.0003 18.9925 21.0003 18.9771 21H5.02289C5.00751 21.0003 4.99208 21.0003 4.97663 21H3C2.44772 21 2 20.5522 2 20C2 19.4477 2.44772 19 3 19H4.31593L5.4826 16H18.5174Z" fill="currentColor"/>
<path d="M17.7396 14L16.573 11H7.42704L6.26038 14H17.7396Z" fill="currentColor"/>
<path d="M8.20482 8.99995H15.7952L14.6149 5.96495C14.3652 5.32269 14.1538 4.77914 13.9546 4.37505C13.7687 3.99788 13.4887 3.50764 12.9881 3.24704C12.3688 2.92465 11.6312 2.92465 11.0119 3.24704C10.5113 3.50764 10.2313 3.99788 10.0454 4.37505C9.84621 4.77915 9.63484 5.3227 9.38509 5.96497L8.20482 8.99995Z" fill="currentColor"/>
</svg>
        )
    
    case 'duotone':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g opacity="0.14">
<path d="M19 20H5L6.94444 15H17.0556L19 20Z" fill="currentColor"/>
<path d="M11.4736 4.13405C11.093 4.33217 10.8287 5.01189 10.3 6.37132L8.88889 9.99996H15.1111L13.7 6.37132L13.7 6.3713C13.1713 5.01188 12.907 4.33217 12.5264 4.13405C12.1965 3.96231 11.8035 3.96231 11.4736 4.13405Z" fill="currentColor"/>
</g>
<path d="M3 20H21M5 20L6.94444 15M19 20L17.0556 15M15.1111 9.99996L13.7 6.37132C13.1713 5.01189 12.907 4.33217 12.5264 4.13405C12.1965 3.96231 11.8035 3.96231 11.4736 4.13405C11.093 4.33217 10.8287 5.01189 10.3 6.37132L8.88889 9.99996M15.1111 9.99996H8.88889M15.1111 9.99996L17.0556 15M8.88889 9.99996L6.94444 15M6.94444 15H17.0556" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
    
    case 'monochrome':
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.48242 16H18.5172L17.7395 14H6.2602L5.48242 16Z" fill="currentColor"/>
<path d="M7.42687 11H16.5728L15.795 9H8.20465L7.42687 11Z" fill="currentColor"/>
<g opacity="0.3">
<path d="M18.5174 16L19.6841 19H21C21.5523 19 22 19.4477 22 20C22 20.5522 21.5523 21 21 21H19.0234C19.0079 21.0003 18.9925 21.0003 18.9771 21H5.02289C5.00751 21.0003 4.99208 21.0003 4.97663 21H3C2.44772 21 2 20.5522 2 20C2 19.4477 2.44772 19 3 19H4.31593L5.4826 16H18.5174Z" fill="currentColor"/>
<path d="M17.7396 14L16.573 11H7.42704L6.26038 14H17.7396Z" fill="currentColor"/>
<path d="M8.20482 8.99995H15.7952L14.6149 5.96495C14.3652 5.32269 14.1538 4.77914 13.9546 4.37505C13.7687 3.99788 13.4887 3.50764 12.9881 3.24704C12.3688 2.92465 11.6312 2.92465 11.0119 3.24704C10.5113 3.50764 10.2313 3.99788 10.0454 4.37505C9.84621 4.77915 9.63484 5.3227 9.38509 5.96497L8.20482 8.99995Z" fill="currentColor"/>
</g>
</svg>
        )
    
    default:
      return (        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.88889 9.99996H15.1111M6.94444 15H17.0556M3 20H21M5 20L10.3 6.37132C10.8287 5.01189 11.093 4.33217 11.4736 4.13405C11.8035 3.96231 12.1965 3.96231 12.5264 4.13405C12.907 4.33217 13.1713 5.01189 13.7 6.37132L19 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
</svg>
        )
  }
};

export default TrafficCone;