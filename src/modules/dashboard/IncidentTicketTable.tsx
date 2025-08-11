"use client";
import Action from "@/components/ui/Action";
import Table from "@/components/ui/Table/Table";
import { awaitingApprovalData, incidentTicketData } from "@/data/dashbaord";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import CardWrapper from "@/components/ui/CardWrapper";
import Status from "@/components/ui/Status";
import SearchField from "@/components/ui/form/search-field";
import DateButton from "@/components/ui/DateButton";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import Button from "@/components/ui/button";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";

const IncidentTicketTable = () => {
	return (
		<CardWrapper title="Incident Tickets Assigned to my Team" leftIcon="hand">
			<div className="flex mb-6 items-center justify-between">
				<div className="flex items-center gap-x-4">
					<SearchField searchFieldName="awaitingApprovalSearch" placeholder="Search by Username" />
					<DateButton />
					<button className="py-[6px] rounded-lg px-5 flex items-center gap-x-2 bg-baz-primaryBlue100 text-baz-primaryBlue600 text-xs">
						<span className="flex-shrink-0">
                            More Filters
                        </span>
						<ChevronDownIcon className="text-baz-primaryBlue" />
					</button>
				</div>
				<Button iconPosition="left" icon={<ArrowDownIcon className="text-white size-4" />}>
					Export
				</Button>
			</div>

			<Table
				tableData={incidentTicketData}
				columns={[
					{
						header: "Title",
						view: (row) => row.title,
					},
					
					{
						header: "ID",
						view: (row) => row.id,
					},
                    {
						header: "Category",
                        view: (row) => row.category,
					
					},
                    {
						header: "Priority",
                        view: (row) => row.priority,
                        
					
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
						header: "Assigned To",
                        view: (row) => row.assignedTo,
						
					},
					{
						header: "Status",
						view: (row) => <Status status={row.status} />,
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

export default IncidentTicketTable;
