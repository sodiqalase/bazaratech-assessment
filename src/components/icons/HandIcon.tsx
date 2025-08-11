import React from "react";
import { cn } from "@/utils/strings.utils";

interface HandIconProps {
	className?: string;
}

const defaultClass = "size-4 inline-block text-[#1659E6]";

const HandIcon: React.FC<HandIconProps> = ({ className }) => {
	return (
		<span className={cn(defaultClass, className)}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_1_3473)">
					<path
						d="M13.9759 3.53583H11.3146M13.9759 3.53583C13.9759 3.90917 12.9819 4.60717 12.6453 4.86917M13.9759 3.53583C13.9759 3.1625 12.9819 2.4645 12.6453 2.2025M1.99927 3.53583H4.6606M1.99927 3.53583C1.99927 3.1625 2.99393 2.4645 3.3306 2.2025M1.99927 3.53583C1.99927 3.90917 2.99393 4.60717 3.3306 4.86917M6.54327 15.5358V14.9092C6.54336 14.477 6.4035 14.0565 6.1446 13.7105L3.59593 10.3045C3.38393 10.0218 3.2266 9.6785 3.32327 9.3385C3.56327 8.49917 4.51193 7.75317 5.5726 9.06717L6.63927 10.2058V3.26517C6.7046 2.04517 8.7546 1.6605 8.9666 3.26517V7.2205C9.95527 7.09383 14.6106 7.78783 13.9333 10.7305L13.8373 11.1545C13.6993 11.7665 13.2933 12.8558 12.8459 13.4932C12.3799 14.1565 12.5979 15.2265 12.5446 15.5372"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1_3473">
						<rect
							width="16"
							height="16"
							fill="white"
							transform="translate(0 0.869141)"
						/>
					</clipPath>
				</defs>
			</svg>
		</span>
	);
};

export default HandIcon;
