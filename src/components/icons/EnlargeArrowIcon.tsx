import React from "react";
import { cn } from "@/utils/strings.utils";

interface EnlargeArrowsIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#808080]";

const EnlargeArrowsIcon: React.FC<EnlargeArrowsIconProps> = ({ className }) => {
	return (
		<span className={cn(defaultClass, className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14 2.5H9L11.0286 4.52859L8.86193 6.69526L9.80473 7.63807L11.9714 5.47141L14 7.5V2.5ZM2 14.5H7L4.97141 12.4714L7.13807 10.3047L6.19526 9.36193L4.02859 11.5286L2 9.5V14.5Z"
					fill="currentColor"
				/>
			</svg>
		</span>
	);
};

export default EnlargeArrowsIcon;
