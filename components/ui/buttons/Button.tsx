import clsx from "clsx";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    name: string
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

const Button = ({ name, type, onClick, className }: ButtonProps) => {
    return (
        <button
            className={clsx({
                'btn-primary': 'btn-primary',
                'btn-out': 'btn-outline',
            }, className)}
            type={type || "button"}
            onClick={onClick}
        >
            {name}
        </button>
    )
}

export default Button

