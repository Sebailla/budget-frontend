'use client'

import { confirmAccountAction } from "@/actions"
import { PinInput, PinInputField } from "@chakra-ui/pin-input"
import { useRouter } from "next/navigation"


import { useActionState, useEffect, useState } from "react"
import { toast } from "react-toastify"
import SpinIcon from "../icons/spinIcon"

export const BoxsConfirm = () => {

    const router = useRouter()

    const [token, setToken] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    const confirmAccountWithToken = confirmAccountAction.bind(null, token)

    const [state, dispatch] = useActionState(confirmAccountWithToken, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (isComplete) {
            dispatch()
        }
    }, [isComplete])

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
                setIsComplete(false)
            })
        }

        if (state.success) {
            toast.success(state.success, {
                onClose: () => {
                    router.push('/auth/login')
                },
            })
        }

    }, [state, router])

    const handleChange = (token: string) => {
        setIsComplete(false)
        setToken(token)
    }

    const handleComplete = () => {
        setIsComplete(true)
    }

    return (
        <div className=" flex flex-col justify-center gap-4">
            <section className="flex justify-center gap-3 my-10">
                <PinInput
                    value={token}
                    onChange={handleChange}
                    onComplete={handleComplete}

                >
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                    <PinInputField className="w-10 h-12 rounded-lg border border-slate-400 text-center placeholder-white shadow-md" />
                </PinInput>

            </section>
            <section >
                {
                    isComplete &&
                    <div className="flex flex-row justify-center items-center gap-4 text-red-400 text-xl">
                        <SpinIcon />
                        Confirming ...
                    </div>
                }
            </section>
        </div>
    )
}
