import { cn } from "@/utils/strings.utils";
import React from "react";

interface SearchIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#808080]";

const SearchIcon: React.FC<SearchIconProps> = ({ className }) => {
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
					d="M7.66659 14C11.1644 14 13.9999 11.1645 13.9999 7.66671C13.9999 4.1689 11.1644 1.33337 7.66659 1.33337C4.16878 1.33337 1.33325 4.1689 1.33325 7.66671C1.33325 11.1645 4.16878 14 7.66659 14Z"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.6666 14.6667L13.3333 13.3334"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default SearchIcon;
