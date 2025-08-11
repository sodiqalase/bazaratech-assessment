"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

import { monthlyTicketStats, ticketResolutionLegend } from "@/data/dashbaord";

const TicketResolutionChart = () => {
	const chartData = monthlyTicketStats.map(({ month, closed, open }) => ({ name: month, pv: closed, uv: open }));

	return (
		<CardWrapper title="Tickets Resolution" leftIcon="hand">
			<div>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						data={chartData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
						barGap={0}
						barCategoryGap={20}
					>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />
						<XAxis style={{ fontSize: "12px" }} dataKey="name" />
						<YAxis style={{ fontSize: "12px" }} strokeWidth={0} />
						<Tooltip wrapperStyle={{ fontSize: "12px" }} />
						{ticketResolutionLegend.map(({ key, color }) => (
							<Bar key={key} dataKey={key} fill={color} activeBar={false} />
						))}
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="flex justify-center gap-4 mt-1">
				{ticketResolutionLegend.map(({ color, label }) => (
					<div className="flex items-center gap-x-2" key={label}>
						<span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
						<p className="text-[10px] font-medium text-baz-primaryText">{label}</p>
					</div>
				))}
			</div>
		</CardWrapper>
	);
};

export default TicketResolutionChart;
