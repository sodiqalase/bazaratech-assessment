import { cn } from "@/utils/strings.utils";
import React from "react";

interface GridIconProps  {
  className?: number | string;
  
}

const defaultClass = "size-6 inline-block text-baz-primaryBlue";

const GridIcon: React.FC<GridIconProps> = ({
 className
}) => {
  return (

<span className={cn(defaultClass, className)}>

<svg
      width='100%'
      height='100%'
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <rect width="6.66667" height="7.22892" fill="currentColor" />
      <rect x="8.66663" width="6.66667" height="7.22892" fill="currentColor" />
      <rect x="17.3334" width="6.66667" height="7.22892" fill="currentColor" />
      <rect y="8.3855" width="7.22892" height="7.22892" fill="currentColor" />
      <rect x="8.3855" y="8.3855" width="7.22892" height="7.22892" fill="currentColor" />
      <rect x="16.7711" y="8.3855" width="7.22892" height="7.22892" fill="currentColor" />
      <rect y="16.7711" width="7.22892" height="7.22892" fill="currentColor" />
      <rect x="8.3855" y="16.7712" width="7.22892" height="7.22892" fill="currentColor" />
      <rect x="16.7711" y="16.7712" width="7.22892" height="7.22892" fill="currentColor" />
    </svg>

</span>


    
  );
};

export default GridIcon;
