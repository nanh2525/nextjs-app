import React from "react";

type ButtonProps = {
    title: string;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    icon?: React.ReactNode;
    onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    boxShadowColor?: string;
    additionalClassName?: string;
};

const Button = (props: ButtonProps) => {
    const {
        title,
        color,
        bgColor,
        borderColor,
        icon,
        onPress,
        boxShadowColor,
        additionalClassName,
    } = props;

    return (
        <button
            className={`${additionalClassName} btn rounded-md text-center font-bold py-3 px-5 flex gap-2 hover:gap-4 items-center justify-center transition-all duration-300 hover:scale-105`}
            style={{
                border: `1px solid ${borderColor || "transparent"}`,
                color: color || "inherit",
                backgroundColor: bgColor || "transparent",
                boxShadow: boxShadowColor,
            }}
            onClick={onPress}
        >
            {title}
            {icon && <div className="">{icon}</div>}
        </button>
    );
};

export default Button;
