import {
    IAwaitingApprovalTableData,
    IIncidentTicketTableData,
    ITicketOverviewCardProps,
} from "@/interfaces/analytics.interface";

// Chart color configurations
export const changeRequestStatusColors = {
    Emergency: "#4077EB",
    Normal: "#E95D5D",
    Standard: "#4ACF7B",
} as const;

export const changeRequestBarColors = [
    "#4077EB",
    "#FFD95D",
    "#4ACF7B",
] as const;

export const ticketResolutionLegend = [
    { key: "pv", color: "#1659E6", label: "Number of Closed Tickets" },
    { key: "uv", color: "#30B7EE", label: "Number of Open Tickets" },
] as const;

// Chart data
export const changeRequestStatusData = [
    {
        name: "Jan",
        Emergency: 4000,
        Normal: 2400,
        Standard: 3200,
        amt: 2400,
    },
    {
        name: "Feb",
        Emergency: 3000,
        Normal: 1398,
        Standard: 2500,
        amt: 2210,
    },
    {
        name: "Mar",
        Emergency: 2000,
        Normal: 9800,
        Standard: 4100,
        amt: 2290,
    },
    {
        name: "Apr",
        Emergency: 2780,
        Normal: 3908,
        Standard: 3600,
        amt: 2000,
    },
    {
        name: "May",
        Emergency: 1890,
        Normal: 4800,
        Standard: 2900,
        amt: 2181,
    },
    {
        name: "Jun",
        Emergency: 2390,
        Normal: 3800,
        Standard: 3700,
        amt: 2500,
    },
    {
        name: "Jul",
        Emergency: 3490,
        Normal: 4300,
        Standard: 4200,
        amt: 2100,
    },
    {
        name: "Aug",
        Emergency: 3200,
        Normal: 4100,
        Standard: 3900,
        amt: 2300,
    },
    {
        name: "Sep",
        Emergency: 2800,
        Normal: 3700,
        Standard: 3500,
        amt: 2400,
    },
    {
        name: "Oct",
        Emergency: 2600,
        Normal: 3500,
        Standard: 3300,
        amt: 2200,
    },
    {
        name: "Nov",
        Emergency: 3000,
        Normal: 3900,
        Standard: 3800,
        amt: 2600,
    },
    {
        name: "Dec",
        Emergency: 3400,
        Normal: 4200,
        Standard: 4000,
        amt: 2800,
    },
];

export const changeRequestBarData = [
    { name: "Open", uv: 4000 },
    { name: "Work in progress", uv: 3000 },
    { name: "Closed", uv: 2000 },
];

// Agent ticket data
export const agentTicketData = [
    { name: "Agent A", uv: 4000 },
    { name: "Agent B", uv: 3000 },
    { name: "Agent C", uv: 2000 },
    { name: "Agent D", uv: 2780 },
    { name: "Agent E", uv: 1890 },
    { name: "Agent F", uv: 2390 },
    { name: "Agent G", uv: 3490 },
];

export const agentTicketColors = [
    "#00D0FF",
    "#E4439E",
    "#F9854C",
    "#325F4A",
    "#0077FF",
    "#BC2EDF",
    "#FFD95D",
] as const;

// Average analytics data
export const averageAnalyticsData = [
    { time: "0:04:01", duration: "Hours", percentage: 11.2 },
    { time: "0:04:01", duration: "Minutes", percentage: 11.2 },
];

// Change request pie chart data
export const changeRequestPieData = [
    { name: "Title", value: 400 },
    { name: "Title", value: 300 },
    { name: "Title", value: 300 },
    { name: "Title", value: 200 },
];

export const changeRequestPieColors = [
    "#FFC300",
    "#00C033",
    "#9A00C0",
    "#C0006A",
] as const;

export const monthlyTicketStats = [
    { month: "Jan", closed: 2400, open: 4000 },
    { month: "Feb", closed: 1398, open: 3000 },
    { month: "Mar", closed: 9800, open: 2000 },
    { month: "Apr", closed: 3908, open: 2780 },
    { month: "May", closed: 4800, open: 1890 },
    { month: "Jun", closed: 3800, open: 2390 },
    { month: "Jul", closed: 4300, open: 3490 },
    { month: "Aug", closed: 4100, open: 3200 },
    { month: "Sep", closed: 3700, open: 2800 },
    { month: "Oct", closed: 3500, open: 2600 },
    { month: "Nov", closed: 3900, open: 3000 },
    { month: "Dec", closed: 4200, open: 3400 },
];

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
        priority: "Severity 1",
        status: "pending",
        assignedTo: "Odion James",
    },
    {
        title: "Onoboarding process taking more tha...",
        id: "INC-84625",
        createdBy: "Cynthia Njoku",
        createdOn: "24/04/2025",
        category: "Onboarding",
        priority: "Severity 1",
        status: "pending",
        assignedTo: "Babafemi Ojo",
    },
    {
        title: "Login Failure – Credentials Not Working",
        id: "INC-65142",
        createdBy: "Cynthia Njoku",
        createdOn: "24/04/2025",
        category: "System and Application",
        priority: "Severity 1",
        status: "pending",
        assignedTo: "Rhoda Samson",
    },
    {
        title: "Locked Out of System – Need Passw...",
        id: "CHG-76251",
        createdBy: "Cynthia Njoku",
        createdOn: "24/04/2025",
        category: "Security & Access Issues",
        priority: "Severity 1",
        status: "pending",
        assignedTo: "Rhoda Samson",
    },
];
