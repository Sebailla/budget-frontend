import { ReactNode } from "react"

export const SuccessMsg = ({ children }: { children: ReactNode }) => {
    return (
        <p
            className="w-full text-md text-center font-body font-semibold text-green-500 leading-tight">
            {children}
        </p>
    )
}