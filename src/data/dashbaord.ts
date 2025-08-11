import { IAwaitingApprovalTableData, IIncidentTicketTableData, ITicketOverviewCardProps } from "@/interfaces/analytics.interface";

export const ticketOverviewData: ITicketOverviewCardProps[] = [
	{
		title: "Total Number of Users Tickets",
		amount: 109826,
		percentage: 11.2,
	},
	{
		title: "Total Open Tickts",
		amount: 2910,
		percentage: 11.2,
	},
	{
		title: "Total Closed Tickets",
		amount: 109291,
		percentage: -11.2,
	},
	{
		title: "Total Due Tickets",
		amount: 34,
		percentage: -11.2,
	},
];

export const awaitingApprovalData: IAwaitingApprovalTableData[] = [
	{
		title: "Request for Application Upgrade to La...",
		module: "Change Management",
		id: "CHG-76251",
		createdBy: "Cynthia Njoku",
		createdOn: "24/04/2025",
		dueDate: "24/04/2025",
		status: "pending",
	},
	{
		title: "Two-Factor Authentication Setup Req...",
		module: "Service Request",
		id: "SRT-56719",
		createdBy: "Cynthia Njoku",
		createdOn: "24/04/2025",
		dueDate: "24/04/2025",
		status: "pending",
	},
	{
		title: "Login Failure – Credentials Not Working",
		module: "Incident Management",
		id: "INC-28238",
		createdBy: "Cynthia Njoku",
		createdOn: "24/04/2025",
		dueDate: "24/04/2025",
		status: "pending",
	},
	{
		title: "Locked Out of System – Need Passw...",
		module: "Incident Management",
		id: "CHG-76251",
		createdBy: "Cynthia Njoku",
		createdOn: "24/04/2025",
		dueDate: "24/04/2025",
		status: "pending",
	},
];
export const incidentTicketData: IIncidentTicketTableData[] = [
	{
		title: "System Crash – Unable to Access",
		
		id: "CHG-76251",
		createdBy: "Cynthia Njoku",
		createdOn: "24/04/2025",
	
      category: "System and Applicat...",
      priority:"Severity 1",
		status: "pending",
      assignedTo: "Odion James",
	},
   {
      title: "Onoboarding process taking more tha...",
      id: "INC-84625",
      createdBy: "Cynthia Njoku",
      createdOn: "24/04/2025",
      category: "Onboarding",
      priority:"Severity 1",
      status: "pending",
      assignedTo: "Babafemi Ojo",
   },
   {
      title: "Login Failure – Credentials Not Working",
      id: "INC-65142",
      createdBy: "Cynthia Njoku",
      createdOn: "24/04/2025",
      category: "System and Application",
      priority:"Severity 1",
      status: "pending",
      assignedTo: "Rhoda Samson",
   },
   {
      title: "Locked Out of System – Need Passw...",
      id: "CHG-76251",
      createdBy: "Cynthia Njoku",
      createdOn: "24/04/2025",
      category: "Security & Access Issues",
      priority:"Severity 1",
      status: "pending",
      assignedTo: "Rhoda Samson",
   },

	
];
