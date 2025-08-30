

import { Dispatch, SetStateAction } from 'react'
import { BoxsResetPass } from '../ui/forms/BoxsResetPass'

type ResetPasswordTokenProps = {
    setIsValidToken: Dispatch<SetStateAction<boolean>>
    token: string
    setToken: Dispatch<SetStateAction<string>>
}

export const ResetPasswordToken = ({ setIsValidToken, token, setToken }: ResetPasswordTokenProps) => {
    return (
        <form className="flex flex-col gap-4 p-6">

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                Please enter the 6-digit code you received in your email box provided.
            </p>

            <BoxsResetPass 
                setIsValidToken={setIsValidToken}
                token={token}
                setToken={setToken}
            />

        </form>
    )
}