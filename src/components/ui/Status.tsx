import clsx from "clsx";

const statusValue = {
    active: "active",
    completed: "completed",
    pending: "pending",
    canceled: "canceled",
    successful: "successful",
    failed: "failed",
    
} as const;

export type IStatus = keyof typeof statusValue;

interface StatusProps {
    status: IStatus;
    overrideCompleted?: boolean;
}

const STATUS_STYLES: Record<IStatus, string> = {
    active: "text-[#156E19] bg-[#CFFFD1]",
    completed: "text-[#156E19] bg-[#CFFFD1]",
    successful: "text-[#156E19] bg-[#CFFFD1]",
    pending: "text-yellow-700 bg-yellow-100",
    failed: "text-[#BA1F1F] bg-[#FFCFCF]",
    canceled: "text-[#BA1F1F] bg-[#FFCFCF]",
};

const Status = ({ status }: StatusProps) => {
    return (
        <span
            className={clsx(
                "rounded-[4px] py-1 font-J-Medium text-xs px-5 inline-block w-auto",
                STATUS_STYLES[status]
            )}
        >
            {statusValue[status].toUpperCase()}
        </span>
    );
};

export default Status;
