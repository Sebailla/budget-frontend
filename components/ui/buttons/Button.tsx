import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    color?: "yellow" | "rose" | "sky" | "lira" | "green"; 
}

const Button = ({
    name,
    type = "button",
    onClick,
    className,
    disabled,
    color = "yellow"
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                "btn",
                {
                    "bg-pastel-yellow-300 text-gray-900": color === "yellow",
                    "bg-pastel-rose-200 text-gray-900": color === "rose",
                    "bg-pastel-lira-200 text-gray-900": color === "lira",
                    "bg-pastel-green-300 text-gray-900": color === "green",
                    "bg-pastel-sky-300 text-gray-900": color === "sky",
                }, "hover:text-gray-700",
                className
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;

