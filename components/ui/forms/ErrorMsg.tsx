import { ReactNode } from "react"


export const ErrorMsg = ({ children }: { children: ReactNode }) => {
    return (
        <p
            className="w-full text-xs font-body font-regular text-red-500 leading-tight">
            {children}
        </p>
    )
}
