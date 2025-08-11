import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";
import NavSettings from "./NavSettings";
import SearchField from "@/components/ui/form/search-field";
import HomeIcon from "@/components/icons/HomeIcon";
import EditIcon from "@/components/icons/EditIcon";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

const DashboardNav = () => {
	return (
		<nav>
			<div className="h-[68px] px-5 flex items-center gap-x-10 bg-white">
				<Image src={"/svgs/logo.svg"} alt="Bazara Logo" width={86} height={22} />
				<div className="w-[252px]">
					<SearchField variant="filled" />
				</div>

				<Navlinks />
				<NavSettings />
			</div>
			<div className="h-[42px] flex items-end px-2 bg-baz-primaryBlue600">
				<div className="w-[64px] rounded-t-lg h-[40px] flex  items-center justify-center bg-white">
					<HomeIcon />
				</div>
			</div>
			<div className="h-11 px-3 bg-white border-b border-[#EBEBEB] flex items-center justify-between">
				<div className="flex items-center gap-x-3">
					<div className="flex items-center gap-x-2">
						<p className="text-baz-secondaryText text-xs">All</p>
						<ChevronDownIcon />
					</div>

					<EditIcon />
				</div>
			</div>
		</nav>
	);
};

export default DashboardNav;
