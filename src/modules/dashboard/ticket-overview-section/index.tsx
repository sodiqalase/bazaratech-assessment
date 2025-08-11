import { ticketOverviewData } from "@/data/dashbaord";
import React from "react";
import TicketOverviewCard from "./TicketOverviewCard";
import Action from "@/components/ui/Action";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

const TicketOverviewSection = () => {
	return (
		<section className="flex flex-col gap-y-4">
			<div className="flex justify-between items-center">
				<h2 className="text-baz-primaryText font-bold">Home</h2>
				<div className="flex items-center gap-x-4">
					<p className="text-sm text-baz-primaryText">Dashboard View:</p>
					<Action>
						<div className="flex shadow-[0_1px_2px_0_#1018280D] bg-white border-baz-border p-2 border rounded-lg items-center gap-x-2">
							<span className="text-sm text-baz-primaryText">Overall Dashboard View</span>
							<ChevronDownIcon />
						</div>
					</Action>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-x-4">
				{ticketOverviewData.map((data) => {
					return <TicketOverviewCard key={data.title} {...data} />;
				})}
			</div>
		</section>
	);
};

export default TicketOverviewSection;
