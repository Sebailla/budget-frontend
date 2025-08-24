'use client'

import { useActionState, useEffect } from "react"
import Button from "../ui/buttons/Button"
import { GoogleSignBTN } from "../ui/buttons/Google-sign-btn"
import { CheckBox } from "../ui/forms/CheckBox"
import { FormField } from "../ui/forms/FormField"
import { LoginUserAction } from "@/actions"
import { toast } from "react-toastify"


export const LoginForm = () => {

    const [state, dispatch] = useActionState(LoginUserAction, {
        errors: [],
    })

    useEffect(() => {
        if(state.errors){
            state.errors.forEach( e => {
                toast.error(e)
            })
        }
    }, [state])

    return (
        <form
            action={dispatch}
            noValidate
            className="flex flex-col gap-4 p-6"
        >

            <FormField
                label={'Email'}
                type="email"
                name="email"
            />

            <FormField
                label={'Password'}
                type="password"
                name="password"
            />

            <CheckBox />

            <Button
                className={'btn-primary'}
                type={"submit"}
                name={"Sign In"}
            />

            <div className="after:border-[#e5e5e5] relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-white text-[#737373] relative z-10 px-2">
                    Or continue with
                </span>
            </div>

            <GoogleSignBTN />

        </form>


    )
}

