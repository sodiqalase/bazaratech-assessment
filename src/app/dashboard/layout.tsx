'use client';

import DashboardNav from "@/components/layout/navbar";
import Fallback from "@/components/ui/Fallback";
import { IAuthResponse } from "@/data/constant";
import { useAuth } from "@/store/authStore";
import { storageHelper } from "@/utils/storage.util";
import { Toast } from "@/utils/toast.util";
import React from "react";



interface DashboardLayoutProps {
	children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
	const [loading, setLoading] = React.useState(false);
	const {setUser,setToken,user} = useAuth()


	const fetchUserDetails=async() =>{
			setLoading(true);

			const res = await fetch("/api/me", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});

			setLoading(false);
			
			if (res.ok) {
				const data = await res.json() as IAuthResponse
				const token = storageHelper.getCookieItem("token");
				
				setUser(data.user);
				setToken(token);
				setLoading(false);
			} else {
				
				Toast.error('Error', "Error fetching user. Please refetch.");
				setLoading(false);
			}
		}

	React.useEffect(() => {
		fetchUserDetails();
	}, []);

	if (loading && !user) {
	return <Fallback/>
	}



	return (
		<section className="flex flex-col h-screen max-h-screen">
			<DashboardNav />
			<main className="flex-1 h-full overflow-hidden bg-[#F9FAFB] p-5">
				<div className="h-full overflow-y-auto">
					<div className="bg-white min-h-full p-4">{children}</div>
				</div>
			</main>
		</section>
	);
}
