"use client";
import React, { useState } from "react";
import { Popover } from "@base-ui-components/react/popover";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { cn } from "@/utils/strings.utils";

export interface ActionOptionProps {
	name: React.ReactNode;
	icon?: string | React.ReactNode;
	action: () => void;
	disabled?: boolean;
	hide?: boolean;
	selected?: boolean;
	remainOpenOnClick?: boolean;
}
interface Props {
	options?: ActionOptionProps[];
	dropDownClass?: string;
	disabled?: boolean;
}
export const Action = ({
	options,
	disabled = false,
	dropDownClass,
	children,
}: Props & { children?: React.ReactNode }) => {
	const [open, setOpen] = useState(false);
	const hasVisibleOption = (options?.filter((option) => !option.hide).length ?? 0) > 0;
	return (
        <div className="flex-shrink-0">
            <Popover.Root open={open && !disabled} onOpenChange={setOpen}>
                <Popover.Trigger className="focus:outline-none">
                    {children ? (
                        React.cloneElement(children as React.ReactElement, {
                            tabIndex: 0,
                            role: "button",
                        })
                    ) : (
                        <span className="flex items-center justify-center size-5 rounded-[5px] border border-baz-secondaryText">
                            <EllipsisVerticalIcon className="size-4 text-baz-secondaryText cursor-pointer" />
                        </span>
                    )}
                </Popover.Trigger>
                {options && (
                    <Popover.Portal>
                        <Popover.Positioner
                            sideOffset={10}
                            align={"right" === "right" ? "end" : "start"}
                        >
                            {hasVisibleOption && (
                                <Popover.Popup
                                    className={cn(
                                        "bg-white rounded-[4px] overflow-hidden p-2 shadow-[0px_2px_20px_rgba(0,0,0,0.13)] flex flex-col min-w-[10rem]",
                                        dropDownClass
                                    )}
                                >
                                    {options
                                        .filter((option) => !option.hide)
                                        .map((option, index) => {
                                            return (
                                                <button
                                                    key={"Action-" + index}
                                                    disabled={option.disabled}
                                                    className={cn(
                                                        "text-left rounded p-2 text-xs group",
                                                        "min-w-[6rem] hover:bg-baz-border/50 font-normal flex items-center",
                                                        "w-full truncate disabled:cursor-not-allowed disabled:opacity-50 flex-shrink-0 block text-baz-secondaryText"
                                                    )}
                                                    onClick={() => {
                                                        if (
                                                            option !==
                                                                undefined &&
                                                            option.action
                                                        ) {
                                                            if (
                                                                !option.remainOpenOnClick
                                                            )
                                                                option.action();
                                                            if (
                                                                option.remainOpenOnClick
                                                            )
                                                                return option.action();
                                                        }
                                                        setOpen(false);
                                                    }}
                                                >
                                                    <span className="text-sm font-semibold text-baz-secondaryText">
                                                        {option.name}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                </Popover.Popup>
                            )}
                        </Popover.Positioner>
                    </Popover.Portal>
                )}
            </Popover.Root>
        </div>
    );
};

export default Action;
