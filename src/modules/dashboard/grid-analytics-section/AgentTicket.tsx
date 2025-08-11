"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

import { agentTicketColors, agentTicketData } from "@/data/dashbaord";

const AgentTicket = () => {
	return (
		<CardWrapper title="Tickets Resolved by Agent - Team" leftIcon="mover">
			<ResponsiveContainer width="100%" height={400}>
				<BarChart
					data={agentTicketData}
					layout="vertical"
					margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
					style={{ border: "none", boxShadow: "none" }} // Remove chart outline
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
					<XAxis type="number" hide />
					<YAxis style={{ fontSize: "12px" }} type="category" dataKey="name" />
					<Tooltip />

					<Bar dataKey="uv" radius={[0, 6, 6, 0]} barSize={20} isAnimationActive={false} stroke="none">
						{agentTicketData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={agentTicketColors[index % agentTicketColors.length]} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</CardWrapper>
	);
};

export default AgentTicket;
