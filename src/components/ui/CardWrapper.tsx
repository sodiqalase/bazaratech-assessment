import React from "react";
import Action from "./Action";
import EnlargeArrowsIcon from "../icons/EnlargeArrowIcon";
import MoveArrow from "../icons/MoveArrowIcon";
import HandIcon from "../icons/HandIcon";
import clsx from "clsx";

type rightIconType = "ellipsis" | "arrow";
type leftIconType = "mover" | "hand";

interface CardWrapperProps {
    rightIcon?: rightIconType;
    leftIcon?: leftIconType;
    title?: string;
    children: React.ReactNode;
    className?: string;
}

const rightIconMap: Record<rightIconType, React.ReactNode> = {
    ellipsis: <Action />,
    arrow: <EnlargeArrowsIcon />,
};

const leftIconMap: Record<leftIconType, React.ReactNode> = {
    mover: <MoveArrow />,
    hand: <HandIcon />,
};

const CardWrapper = ({
    rightIcon = "ellipsis",
    leftIcon,
    title,
    children,
    className,
}: CardWrapperProps) => {
    return (
        <div
            className={clsx(
                "rounded-xl border p-4 border-baz-border bg-white shadow-[0px_8px_16px_0px_#0000000A]",
                className
            )}
        >
            {title && (
                <div className="flex border-b border-[#F5F5F5] pb-3 mb-3 justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        {leftIcon && leftIconMap[leftIcon]}
                        <h3 className="text-baz-primaryText font-bold text-sm">
                            {title}
                        </h3>
                    </div>
                    {rightIcon && rightIconMap[rightIcon]}
                </div>
            )}
            {children}
        </div>
    );
};

export default CardWrapper;
