import { cn } from "@/utils/strings.utils";
import React from "react";

interface UserIconProps {
  className?: string;
}

const defaultClass = "size-4 inline-block text-baz-primaryBlue";

const UserIcon: React.FC<UserIconProps> = ({ className }) => {
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
          d="M7.99963 1.83337C9.56433 1.83337 10.8334 3.10172 10.8336 4.66638C10.8336 6.23119 9.56444 7.50037 7.99963 7.50037C6.43498 7.50019 5.16663 6.23108 5.16663 4.66638C5.1668 3.10183 6.43509 1.83355 7.99963 1.83337Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          d="M7.99994 9.66663C4.65994 9.66663 1.93994 11.9066 1.93994 14.6666C1.93994 14.8533 2.08661 15 2.27327 15H13.7266C13.9133 15 14.0599 14.8533 14.0599 14.6666C14.0599 11.9066 11.3399 9.66663 7.99994 9.66663Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};

export default UserIcon;
