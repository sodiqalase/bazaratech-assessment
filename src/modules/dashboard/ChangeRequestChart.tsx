"use client";
import CalendarIcon from "@/components/icons/CalendarIcon";
import CardWrapper from "@/components/ui/CardWrapper";
import DateButton from "@/components/ui/DateButton";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from "recharts";

type IDataId = "Emergency" | "Normal" | "Standard";

const data = [
	{ name: "Page A", Emergency: 4000, Normal: 2400, Standard: 3200, amt: 2400 },
	{ name: "Page B", Emergency: 3000, Normal: 1398, Standard: 2500, amt: 2210 },
	{ name: "Page C", Emergency: 2000, Normal: 9800, Standard: 4100, amt: 2290 },
	{ name: "Page D", Emergency: 2780, Normal: 3908, Standard: 3600, amt: 2000 },
	{ name: "Page E", Emergency: 1890, Normal: 4800, Standard: 2900, amt: 2181 },
	{ name: "Page F", Emergency: 2390, Normal: 3800, Standard: 3700, amt: 2500 },
	{ name: "Page G", Emergency: 3490, Normal: 4300, Standard: 4200, amt: 2100 },
];

const idColors: Record<IDataId, string> = {
	Emergency: "#4077EB",
	Normal: "#E95D5D",
	Standard: "#4ACF7B",
};

function Legend({ idColors }: { idColors: Record<IDataId, string> }) {
	return (
		<div className="flex justify-center gap-4 mt-1">
			{(Object.keys(idColors) as IDataId[]).map((cat) => (
				<div className="flex items-center gap-x-2" key={cat}>
					<span
						className="inline-block w-4 h-4 rounded-full"
						style={{ backgroundColor: idColors[cat] }}
					/>
					<p className="text-[10px] font-medium text-baz-primaryText">{cat}</p>
				</div>
			))}
		</div>
	);
}

function renderLines(idColors: Record<IDataId, string>) {
	return (Object.keys(idColors) as IDataId[]).map((cat) => (
		<Line key={cat} type="monotone" dataKey={cat} stroke={idColors[cat]} strokeWidth={2} />
	));
}

export default function ChangeRequestChart() {
	return (
		<CardWrapper title="Change Request By Status" leftIcon="hand">
			<div className="mb-7">
				<div className="flex items-center justify-between">
					<Legend idColors={idColors} />
                   <DateButton/>
				</div>
			</div>
			<ResponsiveContainer width="100%" height={300}>
				<LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} />
					<XAxis style={{ fontSize: "12px" }} dataKey="name" strokeWidth={0} />
					<YAxis style={{ fontSize: "12px" }} strokeWidth={0} />
					<Tooltip wrapperStyle={{ fontSize: "12px" }} />
					{renderLines(idColors)}
				</LineChart>
			</ResponsiveContainer>
		</CardWrapper>
	);
}
