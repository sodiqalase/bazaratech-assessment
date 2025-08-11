/* eslint-disable import/no-anonymous-default-export */
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				baz: {
					primaryBlue100: "#E8EEFD",
					primaryBlue: "#1659E6",
					primaryBlue700: "#103FA3",
					primaryBlue600: "#1659E6",
                    primaryText: "#0A0D12",
                    secondaryText: "#808080",
					textDisabled: "#C4C5C7",
                    border: "#EBEBEB",
                    black: "#000000",
					success:"#22C55E",
					danger: "#E43A39"

				},
			},

			boxShadow: {
				card: "0px 2px 4px -2px #0A0D120F,0px 4px 8px -2px #0A0D121A",
				modal: "0px 4px 8px -3px #0000001A, 1px 10px 20px -5px #00000014",
			},
			fontFamily: { sans: ["var(--font-inter)", ...fontFamily.sans] },
		},
	},
};
