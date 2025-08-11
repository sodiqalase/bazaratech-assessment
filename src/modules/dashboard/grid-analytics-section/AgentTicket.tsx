"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const data = [
	{ name: "Agent A", uv: 4000 },
	{ name: "Agent B", uv: 3000 },
	{ name: "Agent C", uv: 2000 },
	{ name: "Agent D", uv: 2780 },
	{ name: "Agent E", uv: 1890 },
	{ name: "Agent F", uv: 2390 },
	{ name: "Agent G", uv: 3490 },
];

const colors = ["#00D0FF", "#E4439E", "#F9854C", "#325F4A", "#0077FF", "#BC2EDF", "#FFD95D"];

const AgentTicket = () => {
	return (
		<CardWrapper title="Tickets Resolved by Agent - Team" leftIcon="mover">
			<ResponsiveContainer width="100%" height={400}>
				<BarChart
					data={data}
					layout="vertical"
					margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
					style={{ border: "none", boxShadow: "none" }} // Remove chart outline
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
					<XAxis type="number" hide />
					<YAxis style={{ fontSize: "12px", }} type="category" dataKey="name" />
					<Tooltip />

					<Bar
						dataKey="uv"
						radius={[0, 6, 6, 0]}
						barSize={20}
						isAnimationActive={false}
						stroke="none"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</CardWrapper>
	);
};

export default AgentTicket;
