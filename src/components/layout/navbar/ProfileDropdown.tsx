'use client';
import * as React from "react";
import { Popover } from "@base-ui-components/react/popover";
import ProfileIcon from "../../icons/ProfileIcon";
import UserIcon from "../../icons/UserIcon";
import LogoutIcon from "../../icons/LogoutIcon";
import { useAuth } from "@/store/authStore";

export default function ProfileDropdown() {
	const { user,logout } = useAuth(); // Assuming useAuth is a custom hook that provides user data
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpenChange = (open: boolean) => {
        setIsOpen(open);
    };

	return (
		<Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
			<Popover.Trigger>
				<ProfileIcon />
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Positioner sideOffset={8}>
					<Popover.Popup className="w-[234px] bg-white p-4 rounded-xl shadow-[0px_8px_8px_-4px_#1018280A,0px_20px_24px_-4px_#1018281A]">
						<div className="flex items-center gap-x-2">
							<ProfileIcon />
							<div className="flex flex-col">
								<p className="font-medium text-baz-primaryText text-xs">{user?.name??''}</p>
								<p className="text-baz-secondaryText text-[10px]">{user?.email??""}</p>
							</div>
						</div>
                        <div className="flex mt-4 pl-1 flex-col gap-y-3">
                            <button className="flex items-center gap-x-3">
                                <UserIcon/>
                                <p className="text-baz-primaryText text-sm">
                                    Profile
                                </p>
                            </button>
                            <button onClick={() => { 
								logout();
								setIsOpen(false);
							 }} className="flex items-center gap-x-3">
                                <LogoutIcon/>
                                <p className="text-baz-danger text-sm">
                                    Logout
                                </p>
                            </button>

                        </div>
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover.Root>
	);
}
