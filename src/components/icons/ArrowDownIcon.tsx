import { cn } from "@/utils/strings.utils";
import React from "react";

interface ArrowDownIconProps {
	className?: string;
}

const defaultClass = "size-[10px] inline-block text-baz-danger";

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({ className }) => {
	return (
		<span className={cn(defaultClass, className)}>
			<svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M5.10413 7.49996L7.60413 4.99996M5.10413 2.29163V7.49996V2.29163ZM5.10413 7.49996L2.60413 4.99996L5.10413 7.49996Z"
					stroke="currentColor"
					strokeWidth="0.625"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</span>
	);
};

export default ArrowDownIcon;
