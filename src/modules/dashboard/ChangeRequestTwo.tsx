"use client";
import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from "recharts";

import { changeRequestBarColors, changeRequestBarData } from "@/data/dashbaord";

const ChangeRequestTwo = () => {
    return (
        <CardWrapper
            className="h-full"
            rightIcon="arrow"
            title="Change Request By Status"
        >
            <ResponsiveContainer className="pb-2" width="100%" height="100%">
                <BarChart
                    data={changeRequestBarData}
                    layout="horizontal"
                    margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                    style={{ border: "none", boxShadow: "none" }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        horizontal={false}
                    />
                    <XAxis
                        axisLine={false}
                        style={{ fontSize: "12px" }}
                        type="category"
                        dataKey="name"
                    />
                    <YAxis hide style={{ fontSize: "12px" }} type="number" />
                    <Tooltip />

                    <Bar
                        dataKey="uv"
                        radius={[2, 2, 0, 0]}
                        barSize={140}
                        isAnimationActive={false}
                        stroke="none"
                    >
                        {changeRequestBarData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={
                                    changeRequestBarColors[
                                        index % changeRequestBarColors.length
                                    ]
                                }
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </CardWrapper>
    );
};

export default ChangeRequestTwo;
