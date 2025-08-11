import GraphLineIcon from "@/components/icons/GraphLineIcon";
import MountainIconUp from "@/components/icons/MountainIconUp";
import CardWrapper from "@/components/ui/CardWrapper";
import RateComponent from "@/components/ui/Rate";
import { IAverageAnalyticsCardProps } from "@/interfaces/analytics.interface";
import { formatWithCommas } from "@/utils/numbers.util";
import React from "react";

const data = [
	{ time: "0:04:01", duration: "Hours", percentage: 11.2 },
	{ time: "0:04:01", duration: "Minutes", percentage: 11.2 },
];

const AverageAnalytics = () => {
	return (
		<div className="grid grid-cols-2 gap-x-3">
			{data.map((item, index) => (
				<CardWrapper rightIcon='arrow' title="Average Incident Response Time - Metrics" key={index}>
					<AverageAnalyticsCard key={index} {...item} />{" "}
				</CardWrapper>
			))}
		</div>
	);
};

export default AverageAnalytics;

function AverageAnalyticsCard({ time, duration, percentage }: IAverageAnalyticsCardProps) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<h6 className="font-bold text-lg mb-2 text-baz-primaryText">
					{time} <span className="text-lg font-bold text-baz-secondaryText">({duration})</span>
				</h6>
				<RateComponent value={percentage} additionalText="response time this week" />
			</div>
			<div>
				<MountainIconUp className="w-full" />
			</div>
		</div>
	);
}
