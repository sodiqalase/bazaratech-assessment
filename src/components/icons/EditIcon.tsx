import { cn } from "@/utils/strings.utils";
import React from "react";

interface EditIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#C4C5C7]";

const EditIcon: React.FC<EditIconProps> = ({ className }) => {
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
					d="M8.84006 2.39994L3.36673 8.19327C3.16006 8.41327 2.96006 8.84661 2.92006 9.14661L2.6734 11.3066C2.58673 12.0866 3.14673 12.6199 3.92006 12.4866L6.06673 12.1199C6.36673 12.0666 6.78673 11.8466 6.9934 11.6199L12.4667 5.82661C13.4134 4.82661 13.8401 3.68661 12.3667 2.29327C10.9001 0.913274 9.78673 1.39994 8.84006 2.39994Z"
					stroke="currentColor"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.92651 3.3667C8.21318 5.2067 9.70651 6.61337 11.5598 6.80003"
					stroke="currentColor"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2 14.6666H14"
					stroke="currentColor"
					strokeMiterlimit={10}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default EditIcon;
