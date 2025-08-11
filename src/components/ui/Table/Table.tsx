"use client";

import React from "react";
import clsx from "clsx";
import Loader from "../Loader";
import EnvelopeIcon from "@/components/icons/EnvelopIcon";

interface ITableProps<TRow> {
	isLoading?: boolean;

	clickRowAction?: (row: TRow, index: number) => void;
	tableData?: TRow[];
	columns: Array<{
		header: React.ReactNode;
		view?: (row: TRow, index: number) => React.ReactNode;
		rowStyle?: string;
	}>;
}

export default function Table<TRow>({
	isLoading = false,
	tableData = [],
	clickRowAction,
	columns = [],
}: ITableProps<TRow>) {
	return (
		<div className="h-auto min-h-[300px]">
			<div
				className="border border-baz-border max-w-full rounded-lg overflow-y-hidden mb-6"
				style={{ overflowX: "auto", maxHeight: 400 }}
			>
				<table className="table table-auto min-w-full border-collapse">
					<thead className="bg-baz-primaryBlue600">
						<tr>
							{columns.map((col, idx) => (
								<th
									key={typeof col.header === "string" ? col.header : idx}
									className={clsx(
										"text-white font-bold text-sm leading-normal px-3 sm:px-5 py-5 whitespace-nowrap text-left"
									)}
									scope="col"
								>
									<span className="w-full block">{col.header}</span>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{isLoading ? (
							<tr>
								<td colSpan={columns.length}>
									<div className="flex items-center justify-center w-full h-[30vh]">
										<div className="flex justify-center items-center">
											<Loader />
										</div>
									</div>
								</td>
							</tr>
						) : tableData.length === 0 ? (
							<tr>
								<td colSpan={columns.length}>
									<div className="flex items-center justify-center w-full h-[30vh]">
										<div className="flex flex-col items-center gap-y-3">
											<EnvelopeIcon />
											<p className="text-baz-primaryText text-sm font-medium">
												No Item primaryText.
											</p>
											<p className="text-baz-secondaryText text-xs">
												Request found will be displayed here
											</p>
										</div>
									</div>
								</td>
							</tr>
						) : (
							tableData.map((row, rowIndex) => (
								<tr
									key={`table-body-row${rowIndex}`}
									className={clsx(
										"px-3 sm:px-5 bg-white border-0 border-b border-baz-border last:border-0 transition-colors hover:bg-baz-primaryBlue50",
										clickRowAction && "cursor-pointer"
									)}
									onClick={() => clickRowAction?.(row, rowIndex)}
								>
									{columns.map((col, colIndex) => (
										<td
											key={`table-body-cell${colIndex}`}
											className={clsx(
												"px-3 sm:px-5 py-5 whitespace-nowrap text-baz-primaryText text-sm text-left align-middle",
												col.rowStyle || "font-normal"
											)}
										>
											<span className="w-full text-sm leading-normal block">
												{col.view?.(row, rowIndex)}
											</span>
										</td>
									))}
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
