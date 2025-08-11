'use client';
import CardWrapper from "@/components/ui/CardWrapper";
import { Cell, Pie, PieChart } from 'recharts';

import { changeRequestPieColors, changeRequestPieData } from "@/data/dashbaord";

const LEGEND_ITEMS = changeRequestPieData.map((item, idx) => ({
	color: changeRequestPieColors[idx % changeRequestPieColors.length],
	name: item.name,
}));

export default function ChangeRequest() {
	return (
		<CardWrapper title="Change Result - Team" leftIcon="hand">
			<div className="flex justify-center">
				<PieChart width={200} height={228}>
					<Pie
						data={changeRequestPieData}
						cx={100}
						cy={100}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						paddingAngle={-10}
						dataKey="value"
					>
						{changeRequestPieData.map((entry, index) => (
							<Cell
								key={`cell-${entry.name}`}
								fill={changeRequestPieColors[index % changeRequestPieColors.length]}
							/>
						))}
					</Pie>
					<text
						x={100}
						y={100}
						textAnchor="middle"
						dominantBaseline="central"
						fontSize="1.25rem"
						fontWeight="bold"
						fill="#222"
					>
						$239,991
					</text>
					<text
						x={100}
						y={115}
						textAnchor="middle"
						dominantBaseline="central"
						fontSize="0.75rem"
						fontWeight="normal"
						fill="#888"
					>
						Total Spent
					</text>
				</PieChart>
			</div>
			<div className="flex justify-center gap-4 mt-1">
				{LEGEND_ITEMS.map((item, idx) => (
					<div className="flex items-center gap-x-2" key={idx}>
						<span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
						<p className="text-[10px] font-medium text-baz-primaryText">{item.name}</p>
					</div>
				))}
			</div>
		</CardWrapper>
	);
}