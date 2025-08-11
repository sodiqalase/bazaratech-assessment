
import React from 'react'
import TicketOverviewSection from "./ticket-overview-section"
import GridAnalyticsSection from "./grid-analytics-section"
import ChangeRequestChart from "./ChangeRequestChart"
import AwaitingApprovalTable from "./AwaitingApprovalTable"
import IncidentTicketTable from "./IncidentTicketTable"
import TicketResolutionChart from "./TicketResolutionChart"
import ChangeRequestTwo from "./ChangeRequestTwo"
import RequestTicketTable from "./RequestTicketTable"

const DashboardAnalytics = () => {
  return (
      <section className="flex flex-col gap-y-10">
          <TicketOverviewSection />
          <GridAnalyticsSection />
          <ChangeRequestChart />
          <AwaitingApprovalTable />
          <IncidentTicketTable />
          <TicketResolutionChart />
          <div className="grid grid-cols-2 gap-x-4">
              <ChangeRequestTwo />
              <RequestTicketTable />
          </div>
      </section>
  );
}

export default DashboardAnalytics