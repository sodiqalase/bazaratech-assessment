"use client";
import Action from "@/components/ui/Action";
import Table from "@/components/ui/Table/Table";
import { awaitingApprovalData } from "@/data/dashbaord";
import React from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import CardWrapper from "@/components/ui/CardWrapper";
import Status from "@/components/ui/Status";

const RequestTicketTable = () => {
	return (
		<CardWrapper  title="Awaiting Approval" leftIcon="hand">
           
			<Table
				tableData={[]}
				columns={[
					{
						header: "Form Title",
						
					},
					{
						header: "Date Created",
						
					},
					{
						header: "Owner",
				
					},
					{
						header: "Status",
					
					},
					
				]}

			/>
		</CardWrapper>
	);
};

export default RequestTicketTable;
