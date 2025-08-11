import BellIcon from "@/components/icons/BellIcon"
import GridIcon from "@/components/icons/GridIcon"
import React from 'react'
import ProfileDropdown from "./ProfileDropdown"

const NavSettings = () => {
  return (
    <div className="flex items-center gap-x-6">
        <hr className="h-6 w-[1px] bg-[#EBEBEB]" />
        <span className="flex items-center justify-center size-8 rounded-full border border-[#EBEBEB]">
            <BellIcon/>
        </span>
        <GridIcon/>
        <ProfileDropdown/>
    </div>
  )
}

export default NavSettings