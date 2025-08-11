import { cn } from "@/utils/strings.utils";
import React from "react";

interface LogoutIconProps {
  className?: string;
}

const defaultClass = "size-4 inline-block text-baz-danger";

const LogoutIcon: React.FC<LogoutIconProps> = ({ className }) => {
  return (
    <span className={cn(defaultClass, className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6267 9.74671L13.3334 8.04004L11.6267 6.33337"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.50671 8.04004H13.2867"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.84005 13.3333C4.89338 13.3333 2.50671 11.3333 2.50671 7.99996C2.50671 4.66663 4.89338 2.66663 7.84005 2.66663"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default LogoutIcon;
