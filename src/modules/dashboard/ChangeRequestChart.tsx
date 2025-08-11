"use client";
import CalendarIcon from "@/components/icons/CalendarIcon";
import CardWrapper from "@/components/ui/CardWrapper";
import DateButton from "@/components/ui/DateButton";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, YAxis } from "recharts";
import {
    changeRequestStatusColors,
    changeRequestStatusData,
} from "@/data/dashbaord";

type IDataId = "Emergency" | "Normal" | "Standard";

const idColors = changeRequestStatusColors;

function Legend({ idColors }: { idColors: Record<IDataId, string> }) {
    return (
        <div className="flex justify-center gap-4 mt-1">
            {(Object.keys(idColors) as IDataId[]).map((cat) => (
                <div className="flex items-center gap-x-2" key={cat}>
                    <span
                        className="inline-block w-4 h-4 rounded-full"
                        style={{ backgroundColor: idColors[cat] }}
                    />
                    <p className="text-[10px] font-medium text-baz-primaryText">
                        {cat}
                    </p>
                </div>
            ))}
        </div>
    );
}

function renderLines(idColors: Record<IDataId, string>) {
    return (Object.keys(idColors) as IDataId[]).map((cat) => (
        <Line
            key={cat}
            type="monotone"
            dataKey={cat}
            stroke={idColors[cat]}
            strokeWidth={2}
        />
    ));
}

export default function ChangeRequestChart() {
    return (
        <CardWrapper title="Change Request By Status" leftIcon="hand">
            <div className="mb-7">
                <div className="flex items-center justify-between">
                    <Legend idColors={idColors} />
                    <DateButton />
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={changeRequestStatusData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        horizontal={true}
                    />
                    <XAxis
                        style={{ fontSize: "12px" }}
                        dataKey="name"
                        strokeWidth={0}
                    />
                    <YAxis style={{ fontSize: "12px" }} strokeWidth={0} />
                    <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                    {renderLines(idColors)}
                </LineChart>
            </ResponsiveContainer>
        </CardWrapper>
    );
}
