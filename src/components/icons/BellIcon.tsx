import React from "react";
import { cn } from "@/utils/strings.utils";

interface BellIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#808080]";

const BellIcon: React.FC<BellIconProps> = ({ className }) => {
	return (
		<span className={cn(defaultClass, className)}>
			<svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M8 4.29333V6.51334" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" />
				<path
					d="M8.01339 1.33337C5.56005 1.33337 3.57339 3.32004 3.57339 5.77337V7.17337C3.57339 7.62671 3.38672 8.30671 3.15339 8.69337L2.30672 10.1067C1.78672 10.98 2.14672 11.9534 3.10672 12.2734C6.29339 13.3334 9.74005 13.3334 12.9267 12.2734C13.8267 11.9734 14.2134 10.92 13.7267 10.1067L12.8801 8.69337C12.6467 8.30671 12.4601 7.62004 12.4601 7.17337V5.77337C12.4534 3.33337 10.4534 1.33337 8.01339 1.33337Z"
					stroke="currentColor"
					strokeMiterlimit="10"
					strokeLinecap="round"
				/>
				<path
					d="M10.22 12.5466C10.22 13.7666 9.22003 14.7666 8.00003 14.7666C7.39336 14.7666 6.83336 14.5133 6.43336 14.1133C6.03336 13.7133 5.78003 13.1533 5.78003 12.5466"
					stroke="currentColor"
					strokeMiterlimit="10"
				/>
			</svg>
		</span>
	);
};

export default BellIcon;
