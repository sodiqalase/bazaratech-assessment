import { cn } from "@/utils/strings.utils";
import React from "react";

interface ProfileIconProps {
  className?: string;

}

const defaultClass = "size-9 inline-block text-baz-primaryBlue";

const ProfileIcon: React.FC<ProfileIconProps> = ({
 className
}) => {
  return (


    <span className={cn(defaultClass, className)}>
       <svg
      width='100%'
      height='100%'
     
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   
    >
      <circle cx="18" cy="18" r="18" fill="currentColor" opacity={0.15} />
      <mask
        id="mask0"
        style={{ maskType: "alpha" } as React.CSSProperties}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask0)">
        <ellipse cx="18" cy="31.68" rx="13.68" ry="7.92" fill="currentColor" />
      </g>
      <circle cx="18" cy="15.3" r="6.48" fill="currentColor" />
    </svg>
    </span>
   
  );
};

export default ProfileIcon;
