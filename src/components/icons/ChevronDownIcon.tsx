import { cn } from "@/utils/strings.utils";
import React from "react";

interface ChevronDownIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#C4C5C7]";

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ className }) => {
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
					d="M13.28 5.96667L8.9333 10.3133C8.41997 10.8267 7.57997 10.8267 7.06664 10.3133L2.71997 5.96667"
					stroke="currentColor"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default ChevronDownIcon;
