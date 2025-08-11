import { cn } from "@/utils/strings.utils";
import React from "react";

interface CalendarIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#1659E6]";

const CalendarIcon: React.FC<CalendarIconProps> = ({ className }) => {
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
					d="M5.33337 1.70248V3.70248"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10.6666 1.70248V3.70248"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.33337 6.42914H13.6667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14 6.03582V11.7025C14 13.7025 13 15.0358 10.6667 15.0358H5.33333C3 15.0358 2 13.7025 2 11.7025V6.03582C2 4.03582 3 2.70248 5.33333 2.70248H10.6667C13 2.70248 14 4.03582 14 6.03582Z"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.99703 9.50249H8.00302"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.5295 9.50249H5.53549"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.5295 11.5025H5.53549"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default CalendarIcon;
