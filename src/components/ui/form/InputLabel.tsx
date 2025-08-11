import React from "react";

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label?: string;
    required?: boolean;
    htmlFor?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, required, htmlFor, ...rest }) => {
    if (!label) return null;
    return (
        <label
            htmlFor={htmlFor}
            className="text-sm block text-baz-primaryText"
            {...rest}
        >
            <span>
                {label}
                {required && (
                    <span className="text-red-500 text-sm" aria-hidden="true">
                        {" "}*
                    </span>
                )}
                {required && (
                    <span className="sr-only"> (required)</span>
                )}
            </span>
        </label>
    );
};

export default InputLabel;
