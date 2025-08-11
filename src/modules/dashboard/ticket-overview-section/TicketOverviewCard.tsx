import GraphLineIcon from "@/components/icons/GraphLineIcon";
import RateComponent from "@/components/ui/Rate";
import { ITicketOverviewCardProps } from "@/interfaces/analytics.interface";
import { formatWithCommas } from "@/utils/numbers.util";
import React from "react";



const TicketOverviewCard = ({title,amount,percentage}:ITicketOverviewCardProps) => {
	return (
		<div className="bg-white flex flex-col gap-y-5 p-5 rounded-xl shadow-[0_0_4px_0_#968F8F40]">
			<h3 className="text-baz-primaryText font-medium text-sm">{title}</h3>
			<div className="grid grid-cols-2 gap-x-2">
				<div>
					<h6 className="font-bold text-lg text-baz-primaryText">{formatWithCommas(amount)}</h6>
					<RateComponent value={percentage} additionalText="this week" />
				</div>
                <div >
                    <GraphLineIcon className="w-full"/>
                </div>
			</div>
		</div>
	);
};

export default TicketOverviewCard;
