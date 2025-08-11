import { cn } from "@/utils/strings.utils";
import React from "react";

interface HomeIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#808080]";

const HomeIcon: React.FC<HomeIconProps> = ({ className }) => {
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
					d="M6.01325 1.89336L2.41992 4.69336C1.81992 5.16003 1.33325 6.15336 1.33325 6.90669V11.8467C1.33325 13.3934 2.59325 14.66 4.13992 14.66H11.8599C13.4066 14.66 14.6666 13.3934 14.6666 11.8534V7.00003C14.6666 6.19336 14.1266 5.16003 13.4666 4.70003L9.34659 1.81336C8.41325 1.16003 6.91325 1.19336 6.01325 1.89336Z"
					stroke="currentColor"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8 11.9933V9.99329"
					stroke="currentColor"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default HomeIcon;
