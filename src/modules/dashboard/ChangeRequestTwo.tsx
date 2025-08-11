"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

const data = [
	{ name: "Open", uv: 4000 },
	{ name: "Work in progress", uv: 3000 },
	{ name: "Closed", uv: 2000 },
	
];

const colors = ["#4077EB", "#FFD95D", "#4ACF7B"];

const ChangeRequestTwo = () => {
	return (
		<CardWrapper rightIcon="arrow" title="Change Request By Status" >
			<ResponsiveContainer width="100%" height={300}>
				<BarChart
					data={data}
					layout="horizontal"
					margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
					style={{ border: "none", boxShadow: "none" }} // Remove chart outline
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
					<XAxis axisLine={false} style={{ fontSize: "12px" }} type="category" dataKey="name" />
					<YAxis hide style={{ fontSize: "12px" }} type="number" />
					<Tooltip />

					<Bar
						dataKey="uv"
						radius={[6, 6, 0, 0]}
						barSize={140}
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

export default ChangeRequestTwo;
