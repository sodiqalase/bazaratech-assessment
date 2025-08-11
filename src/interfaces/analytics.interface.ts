import { IStatus } from "@/components/ui/Status";

export interface ITicketOverviewCardProps {
    title: string;
    amount: number;
    percentage: number;
}

export interface IAverageAnalyticsCardProps {
    time: string;
    duration: string;
    percentage: number;
}

export interface IAwaitingApprovalTableData {
    title: string;
    module: string;
    id: string;
    createdBy: string;
    createdOn: string;
    dueDate: string;
    status: IStatus;
}

export interface IIncidentTicketTableData {
    title: string;
    category: string;
    id: string;
    priority: string;
    createdOn: string;
    createdBy: string;
    assignedTo: string;
    status: IStatus;
}
