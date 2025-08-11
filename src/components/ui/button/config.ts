export type IButtonVariant = "primary";

export type IButtonIconPosition = "left" | "right";

export type IButtonSizes = "big" | "medium" | "small";

export const buttonVariantStylesMap: Readonly<Record<IButtonVariant, string>> = {
	primary: "bg-baz-primaryBlue disabled:bg-opacity-50 text-white text-sm font-semibold",
};

export const buttonSizeMap: Readonly<Record<IButtonSizes, string>> = {
	big: "h-[50px]",
	medium: "h-[40px]",
	small: "h-[36px]",
};
