import React from "react";
import { cn } from "@/utils/strings.utils";

interface MountainIconUpProps {
	className?: string;
}

const defaultClass = "w-[72px] h-[53px] inline-block text-[#42BD53]";

const MountainIconUp: React.FC<MountainIconUpProps> = ({ className }) => {
	return (
		<span className={cn(defaultClass, className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 66 55"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0)">
					<path
						d="M-2.67383 57.3853L7.81597 41.3421L15.0149 47.1012L22.6251 29.6182L31.8808 44.8387L47.933 3.1001L58.9027 41.3421L69.7264 57.3853"
						stroke="currentColor"
						strokeWidth="1.23409"
					/>
					<path
						d="M7.81597 41.3422L-2.67383 57.3854H69.7264L58.9027 42.6865L47.2175 3.57709L31.8808 44.8387L22.6251 29.6183L15.0149 47.1013L7.81597 41.3422Z"
						fill="url(#paint0)"
						fillOpacity="0.25"
					/>
				</g>
				<defs>
					<linearGradient
						id="paint0"
						x1="33.5263"
						y1="6.78751"
						x2="33.5263"
						y2="57.3854"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#42BD53" />
						<stop offset="1" stopColor="#42BD54" stopOpacity="0" />
					</linearGradient>
					<clipPath id="clip0">
						<rect width="65.8184" height="54.3001" fill="white" />
					</clipPath>
				</defs>
			</svg>
		</span>
	);
};

export default MountainIconUp;
