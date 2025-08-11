/* eslint-disable @typescript-eslint/no-explicit-any */
interface ISpinner {
    width?: string;
    height?: string;
    colour?: string;
    size?: "sm" | "md" | "lg";
    [key: string]: any;
}

const sizeMap = {
    sm: "16",
    md: "24",
    lg: "32"
};

const Spinner = (props: ISpinner) => {
    const { size = "sm", colour = "#ffffff", ...rest } = props;
    const dimension = sizeMap[size] || "16";
    return (
        <svg
            width={dimension}
            height={dimension}
            viewBox="0 0 38 38"
            xmlns="http://www.w3.org/2000/svg"
            stroke={colour}
            data-testid="spinner"
            role="status"
            aria-label="Loading"
            {...rest}
        >
            <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18" data-testid="spinner-animation">
                        <animateTransform data-testid="spinner-animate"
                            attributeName="transform"
                            type="rotate"
                            from="0 18 18"
                            to="360 18 18"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </g>
        </svg>
    );
};

export default Spinner;
