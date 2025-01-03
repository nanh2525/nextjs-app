import React from "react";

type ButtonProps = {
    title: string;
    color?: string;
    bgColor?: string;
    borderColor?: string;
    icon?: React.ReactNode;
    onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: ButtonProps) => {
    const { title, color, bgColor, borderColor, icon, onPress } = props;

    return (
        <button
            className="btn rounded-md text-center font-bold py-3 px-5 flex items-center justify-center"
            style={{
                border: `1px solid ${borderColor || 'transparent'}`,
                color: color || 'inherit',
                backgroundColor: bgColor || 'transparent',
            }}
            onClick={onPress}
        >
            {title}
            {icon && <div className="ml-5">{icon}</div>}
        </button>
    );
};

export default Button;
