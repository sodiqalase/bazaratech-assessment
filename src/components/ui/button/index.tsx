import { forwardRef, MouseEvent } from "react";
import { buttonSizeMap, buttonVariantStylesMap, IButtonIconPosition, IButtonSizes, IButtonVariant } from "./config";
import Link, { LinkProps } from "next/link";
import Spinner from "../Spinner";
import { cn } from "@/utils/strings.utils";

type NextLinkType = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface CommonProps {
    fullWidth?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    variant?: IButtonVariant;
    iconPosition?: IButtonIconPosition;
    className?: string;
    buttonSize?: IButtonSizes;
}

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        CommonProps {
    renderAs?: "button";
    loading?: boolean;
}

interface NextLinkProps extends NextLinkType, CommonProps {
    renderAs: "next_link";
    href: string;
}

interface ExternalLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
        CommonProps {
    renderAs: "external_link";
    href: string;
    newTab?: boolean;
}

type Props = ButtonProps | NextLinkProps | ExternalLinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
    (props, ref) => {
        const {
            fullWidth = false,
            className,
            disabled = false,
            icon,
            buttonSize = "small",
            iconPosition = "left",
            variant = "primary",
            ...rest
        } = props;

        const styles = cn([
            "items-center rounded-lg gap-x-2 px-5 inline-flex justify-center relative overflow-hidden",
            buttonVariantStylesMap[variant],
            fullWidth ? "w-full" : "whitespace-nowrap w-auto",
            buttonSizeMap[buttonSize],
            className,
        ]);

        const renderIcon = (icon: React.ReactNode) => {
            return <>{icon}</>;
        };

        const _children = (
            <>
                {icon && iconPosition === "left" && renderIcon(icon)}
                {props.children}
                {icon && iconPosition === "right" && renderIcon(icon)}
            </>
        );

        // Next.js Link
        if (props.renderAs === "next_link") {
            const { href, ...linkProps } = rest as NextLinkProps;
            return (
                <Link
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    className={styles}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : undefined}
                    onClick={
                        disabled ? (e) => e.preventDefault() : linkProps.onClick
                    }
                    {...linkProps}
                >
                    {_children}
                </Link>
            );
        }

        // External Link
        if (props.renderAs === "external_link") {
            const { href, newTab, ...anchorProps } = rest as ExternalLinkProps;
            return (
                <a
                    href={disabled ? undefined : href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={styles}
                    aria-disabled={disabled}
                    tabIndex={disabled ? -1 : undefined}
                    target={newTab ? "_blank" : undefined}
                    rel={newTab ? "noopener noreferrer" : undefined}
                    onClick={
                        disabled
                            ? (e: MouseEvent) => e.preventDefault()
                            : anchorProps.onClick
                    }
                    {...anchorProps}
                >
                    {_children}
                </a>
            );
        }

        // Button
        const { loading = false, type, ...buttonProps } = rest as ButtonProps;
        return (
            <button
                disabled={disabled || loading}
                aria-disabled={disabled || loading}
                className={styles}
                type={type ?? "button"}
                ref={ref as React.Ref<HTMLButtonElement>}
                aria-busy={loading}
                {...buttonProps}
            >
                {loading && (
                    <span className="flex items-center justify-center absolute inset-0 bg-opacity-60">
                        <Spinner />
                    </span>
                )}
                <span
                    className={cn(
                        "flex gap-x-3 items-center justify-center",
                        loading && "opacity-50"
                    )}
                >
                    {_children}
                </span>
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
