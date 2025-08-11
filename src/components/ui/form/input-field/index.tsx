"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import {cn} from "@/utils/strings.utils";
import InputLabel from "../InputLabel";

interface IInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	required?: boolean;
	type?: "text" | "number" | "password" | "email" | "tel" | "date" | "time";
	className?: string;
	id?: string;
}

const inputBaseStyle =
    "block w-full rounded-lg px-4 outline-none text-sm h-[34px] border border-baz-border focus:border-blue-300 bg-white transition-colors duration-500 placeholder:text-baz-border text-baz-primaryText";

const InputField = ({type='text', label, required = false, className, error, id, ...props }: IInputFieldProps) => {
    const [showPasswordText, setShowPasswordText] = useState(false);
    const inputId = id || (label ? `input-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;

    return (
        <div className="w-full">
            <InputLabel label={label} required={required} htmlFor={inputId} />

            <div className="relative mt-3">
                <input
                    id={inputId}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className={cn(
                        inputBaseStyle,
                        error && "border-red-400 focus:border-red-400",
                        className
                    )}
                    {...props}
                    type={type === "password" && showPasswordText ? "text" : type}
                    required={required}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowPasswordText((prev) => !prev);
                        }}
                        className="absolute top-[8px] right-4"
                        tabIndex={0}
                        aria-label={showPasswordText ? "Hide password" : "Show password"}
                        aria-pressed={showPasswordText}
                    >
                        {showPasswordText ? (
                            <EyeSlashIcon className="h-5 w-5 text-baz-textDisabled" aria-hidden="true" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-baz-textDisabled" aria-hidden="true" />
                        )}
                    </button>
                )}
            </div>
            {error && (
                <p id={errorId} className="text-[10px] mt-[2px] text-red-400" role="alert" aria-live="assertive">
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;
