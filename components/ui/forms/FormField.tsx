
interface FormFieldProps {
    label?: string; 
    placeholder?: string;
    name: string;
    type?: string;
    defaultValue?: string;
}

export const FormField = ({label, placeholder, name, type, defaultValue}: FormFieldProps) => {
    return (
        <div className="relative h-11 w-full min-w-[200px] my-1">
            <input
                className="peer h-full w-full rounded-md border border-slate-400 border-t-transparent bg-transparent px-3 py-3 font-body text-sm font-normal text-slate-400 outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200 placeholder-shown:border-t-slate-200 focus:border-2 focus:border-pastel-yellow-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                placeholder={placeholder || " "}
                name={name}
                type={type || "text"}
                defaultValue={defaultValue}
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-slate-400 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-slate-400 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-400 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pastel-yellow-700 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pastel-yellow-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pastel-yellow-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500">
                {label || "Label"}
            </label>
        </div>
    )
}
