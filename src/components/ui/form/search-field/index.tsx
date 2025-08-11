"use client";
import React, { useState } from "react";
import { cn } from "@/utils/strings.utils";
import { useDebounce } from "react-use";
import SearchIcon from "@/components/icons/SearchIcon";
import { useURLQuery } from "@/hooks/useURLQuery";

type IVariant = "plain" | "filled";

type IOnChange = React.ComponentProps<"input">["onChange"];

interface ISearchFieldProps {
	variant?: IVariant;
	placeholder?: string;
    searchFieldName?: string;
}

const variantStyles: Record<IVariant, string> = {
	filled: "bg-[#FCFCFD]",
	plain: "bg-white",
};

const inputBaseStyle =
	"block w-full rounded-lg pl-8 pr-2 outline-none text-sm h-[34px] border border-baz-border focus:border-blue-300 bg-white transition-colors duration-500 placeholder:text-baz-secondaryText text-baz-primaryText";

const SearchField = ({ variant = "plain", placeholder = "Search for anything",searchFieldName='search' }: ISearchFieldProps) => {
	const inputId = `input-${Math.random().toString(36).slice(2, 9)}
    `;
    
const query = useURLQuery();
  const [internalValue, setInternalValue] = useState(query?.value?.[searchFieldName] ?? "");

  useDebounce(
    () => {
      if (internalValue) {
        query.setURLQuery({ [searchFieldName]: internalValue?.trim(), page: "1" });
      } else {
        query.setURLQuery({ [searchFieldName]: null });
      }
    },
    1000,
    [internalValue]
  );

  const handleChange: IOnChange = (e) => {
    setInternalValue(e.target.value);
  };

	return (
		<div className="relative w-full">
			<input
				id={inputId}
				placeholder={placeholder}
                 value={internalValue}
        onChange={handleChange}
				className={cn(inputBaseStyle, variantStyles[variant])}
				type="text"
			/>

			<SearchIcon className="absolute top-[8px] left-2" />
		</div>
	);
};

export default SearchField;
