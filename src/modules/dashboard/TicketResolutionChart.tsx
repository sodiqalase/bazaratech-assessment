"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Unified data source for ticket stats
const ticketStats = [
	{ month: "Jan", closed: 2400, open: 4000 },
	{ month: "Feb", closed: 1398, open: 3000 },
	{ month: "Mar", closed: 9800, open: 2000 },
	{ month: "Apr", closed: 3908, open: 2780 },
	{ month: "May", closed: 4800, open: 1890 },
	{ month: "Jun", closed: 3800, open: 2390 },
	{ month: "Jul", closed: 4300, open: 3490 },
	{ month: "Aug", closed: 4100, open: 3200 },
	{ month: "Sep", closed: 3700, open: 2800 },
	{ month: "Oct", closed: 3500, open: 2600 },
	{ month: "Nov", closed: 3900, open: 3000 },
	{ month: "Dec", closed: 4200, open: 3400 },
];

const LEGEND = [
	{ key: "pv", color: "#1659E6", label: "Number of Closed Tickets" },
	{ key: "uv", color: "#30B7EE", label: "Number of Open Tickets" },
];

const TicketResolutionChart = () => {
	const chartData = ticketStats.map(({ month, closed, open }) => ({ name: month, pv: closed, uv: open }));

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
						{LEGEND.map(({ key, color }) => (
							<Bar key={key} dataKey={key} fill={color} activeBar={false} />
						))}
					</BarChart>
				</ResponsiveContainer>
			</div>
			<div className="flex justify-center gap-4 mt-1">
				{LEGEND.map(({ color, label }) => (
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
