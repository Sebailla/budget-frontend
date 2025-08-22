import { Check } from "../icons/Check"

export const CheckBox = () => {
    return (
        <div className="-ml-2.5">
            <div className="inline-flex items-center">
                <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    data-ripple-dark="true"
                >
                    <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pastel-yellow-400 checked:bg-pastel-yellow-400 checked:before:bg-pastel-yellow-400 hover:before:opacity-10"
                        id="checkbox"
                    />
                    <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-pastel-yellow-950 opacity-0 transition-opacity peer-checked:opacity-100">
                        <Check />
                    </span>
                </label>
                <label
                    className="mt-px cursor-pointer select-none font-body text-sm text-slate-500"
                >
                    Remember Me
                </label>
            </div>
        </div>
    )
}
