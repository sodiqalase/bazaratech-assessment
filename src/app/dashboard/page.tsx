import { Metadata } from "next";
import DashboardAnalytics from "@/modules/dashboard";
export const metadata: Metadata = {
  title: 'Dashboard Analytics',
};

export default function DashboardPage() {
  return (
    <DashboardAnalytics />
  );
}