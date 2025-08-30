'use client'

import { useState } from "react"

import { ResetPassForm } from "./ResetPassForm"
import { ResetPasswordToken } from "./ResetPasswordToken"

export const PasswordResetHandler = () => {

    const [token, setToken] = useState('')

    const [isValidToken, setIsValidToken] = useState(false)

    return (
        <>
            {
                !isValidToken
                    ?
                    <ResetPasswordToken
                        setIsValidToken={setIsValidToken}
                        token={token}
                        setToken={setToken}
                    />
                    :
                    <ResetPassForm
                        token={token}
                    />
            }
        </>
    )
}
