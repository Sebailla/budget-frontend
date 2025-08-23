import clsx from "clsx";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({ name, type, onClick, className,disabled }: ButtonProps) => {
    return (
        <button
            className={clsx({
                'btn-primary': 'btn-primary',
                'btn-out': 'btn-outline',
            }, className)}
            type={type || "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    )
}

export default Button

