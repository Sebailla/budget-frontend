'use client'

import { useActionState, useEffect, useState } from "react"
import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"
import { forgotPassword } from "@/actions"
import { toast } from "react-toastify"
import SpinIcon from "../ui/icons/spinIcon"
import { useRouter } from "next/navigation"


export const ForgotPass = () => {

    const router = useRouter()

    const [isComplete, setIsComplete] = useState(false)

    const [state, dispatch] = useActionState(forgotPassword, {
        errors: [],
        success: '',
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
            setIsComplete(false)
        }
        if (state.success) {
            toast.success(state.success,)
            setIsComplete(false)
            router.push('/auth/post-token-send-info')
        }
    }, [state, router])

    const send = ()=>{
        setIsComplete(true)
    }

    return (

        <form
            className="flex flex-col gap-4 p-6"
            action={dispatch}
        >

            <FormField
                label={'Email'}
                type="email"
                name="email"
            />

            <Button
                className={'btn my-8'}
                type={"submit"}
                name={"Send Email"}
                onClick={send}
            />
            {
                isComplete &&
                <div className="flex flex-row justify-center items-center gap-4 text-red-400 text-xl">
                    <SpinIcon />
                    Sending ...
                </div>
            }

        </form>

    )
}