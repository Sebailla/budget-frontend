
import clsx from "clsx";

interface FormFieldProps {
    label?: string;
    placeholder?: string;
    name: string;
    className?: string
    type?: string;
    defaultValue?: string;
    id: string
    color?: "yellow" | "rose" | "sky" | "lira" | "green" | "red";
}

export const FormField = ({
    label,
    placeholder,
    name,
    className,
    type = "text",
    defaultValue,
    id,
    color = "yellow",
}: FormFieldProps) => {
    return (
        <div className="relative h-11 w-full min-w-[200px] my-1 rounded-xl">
            <input
                className={clsx(
                    "peer h-full w-full rounded-xl border border-border border-t-transparent bg-transparent px-3 py-3 font-body text-sm font-normal text-text-input outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200 placeholder-shown:border-t-slate-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50",
                    {
                        "focus:border-pastel-yellow-400": color === "yellow",
                        "focus:border-pastel-rose-100": color === "rose",
                        "focus:border-pastel-lira-100": color === "lira",
                        "focus:border-pastel-green-100": color === "green",
                        "focus:border-pastel-sky-100": color === "sky",
                        "focus:border-pastel-red-100": color === "red",
                    },
                    className,
                )}
                placeholder={placeholder || " "}
                name={name}
                type={type}
                defaultValue={defaultValue}
                id={id}
            />
            <label
                className={clsx(
                    "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-3 before:w-3 before:rounded-tl-xl before:border-t before:border-l before:border-slate-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-3 after:w-3 after:flex-grow after:rounded-tr-xl after:border-t after:border-r after:border-slate-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500",
                    {
                        "peer-focus:text-pastel-yellow-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-yellow-400":
                            color === "yellow",
                        "peer-focus:text-pastel-rose-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-rose-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-rose-100":
                            color === "rose",
                        "peer-focus:text-pastel-lira-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-lira-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-lira-100":
                            color === "lira",
                        "peer-focus:text-pastel-green-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-green-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-green-100":
                            color === "green",
                        "peer-focus:text-pastel-sky-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-sky-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-sky-100":
                            color === "sky",
                        "peer-focus:text-pastel-red-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-red-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-red-100":
                            color === "red",
                    },
                )}
            >
                {label || "Label"}
            </label>
        </div>
    );
};