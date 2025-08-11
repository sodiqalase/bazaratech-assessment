import React from 'react'
import CalendarIcon from "../icons/CalendarIcon"

const DateButton = () => {
  return (
    <button className="py-[6px] rounded-lg px-5 flex items-center gap-x-2 bg-baz-primaryBlue100 text-baz-primaryBlue600 text-xs">
                        <span>24/04/2025</span>
                        <CalendarIcon/>
                    </button>
  )
}

export default DateButton