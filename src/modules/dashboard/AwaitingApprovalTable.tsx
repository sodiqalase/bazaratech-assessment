"use client";
import Action from "@/components/ui/Action";
import Table from "@/components/ui/Table/Table";
import { awaitingApprovalData } from "@/data/dashbaord";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import CardWrapper from "@/components/ui/CardWrapper";
import Status from "@/components/ui/Status";

const AwaitingApprovalTable = () => {
	return (
		<CardWrapper title="Awaiting Approval" leftIcon="hand">
           
			<Table
				tableData={awaitingApprovalData}
				columns={[
					{
						header: "Title",
						view: (row) => row.title,
					},
					{
						header: "Module",
						view: (row) => row.module,
					},
					{
						header: "ID",
						view: (row) => row.id,
					},
					{
						header: "Created By",
						view: (row) => row.createdBy,
					},
					{
						header: "Created On",
						view: (row) => row.createdOn,
					},
					{
						header: "Due Date",
						view: (row) => row.dueDate,
					},
                    {
						header: "Status",
						view: (row) => (
							<Status
                            status={row.status}
                            />
						),
					},
					{
						header: "Action",
						view: () => (
							<Action>
								<EllipsisVerticalIcon className="size-5 text-baz-secondaryText focus:outline-none cursor-pointer" />
							</Action>
						),
					},
				]}
			/>
		</CardWrapper>
	);
};

export default AwaitingApprovalTable;
