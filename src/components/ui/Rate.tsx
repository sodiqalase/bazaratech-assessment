import { cn } from "@/utils/strings.utils";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const RateComponent = ({ value,additionalText }: { value: number,additionalText:string }) => {
	const isPositive = value > 0;

	const hideIcon = value === 0;

	return (
		<div className="flex items-center gap-x-3">
			<span className="flex items-center gap-x-1">
				{!hideIcon && <ArrowDownIcon className={isPositive ? "transform rotate-180 text-baz-success" : ""} />}
				<span className={cn("text-sm", isPositive ? "text-baz-success" : "text-baz-danger")}>{value}%</span>
			</span>
            <span className="text-[10px] text-baz-secondaryText">{additionalText}</span>
		</div>
	);
};

export default RateComponent;
