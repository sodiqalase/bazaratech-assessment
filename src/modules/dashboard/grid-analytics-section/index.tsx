import CardWrapper from "@/components/ui/CardWrapper";
import React from "react";
import AgentTicket from "./AgentTicket";
import AverageAnalytics from "./AverageAnalytics";
import UsersCircleIcon from "@/components/icons/UserCircleIcon";
import ChangeResult from "./ChangeRequest";

const GridAnalyticsSection = () => {
	return (
        <section className="grid grid-cols-[70%_30%] gap-x-5">
            <div className="flex flex-col gap-y-6">
                <AgentTicket />
                <AverageAnalytics />
            </div>
            <div className="flex flex-col gap-y-6 h-full">
                <CardWrapper title="Pending Tickets - Team" leftIcon="hand">
                    <h5 className="text-[28px] font-bold">13</h5>
                    <p className="text-xs mt-1 font-medium text-baz-secondaryText">
                        Pending Tickets
                    </p>
                </CardWrapper>
                <CardWrapper title="Pending Tickets - Team" leftIcon="hand">
                    <div className="flex items-center gap-x-3">
                        <UsersCircleIcon />
                        <div>
                            <h5 className="text-[28px] font-bold">13</h5>
                            <p className="text-xs mt-1 font-medium text-baz-secondaryText">
                                Pending Tickets
                            </p>
                        </div>
                    </div>
                </CardWrapper>

                <ChangeResult />
            </div>
        </section>
    );
};

export default GridAnalyticsSection;
