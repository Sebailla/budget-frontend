'use client'

import { createAccountAction } from "@/actions"
import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


const initialState = {
    errors: [],
    success: '',
    status: undefined,
    values: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
}

export const RegisterForm = () => {

    const router = useRouter()

    const [state, dispatch] = useActionState(createAccountAction, initialState)

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
        }
        if (state.status === 409) {
            toast.info(state.success)
        }
        if (state.success && state.status === 201) {
            toast.success(state.success)
            router.push('/auth/post-token-send-info')
        }
    }, [state, router])

    return (
        <form
            className="flex flex-col gap-4 p-6"
            noValidate
            action={dispatch}
        >

            <FormField
                label={'Name'}
                type="text"
                name="name"
                id="name"
                defaultValue={state.values.name}
            />

            <FormField
                label={'Email'}
                type="email"
                name="email"
                id="email"
                defaultValue={state.values.email}
            />

            <FormField
                label={'Password'}
                type="password"
                name="password"
                id="password"
                defaultValue={state.values.password}
            />

            <FormField
                label={'Confirm Password'}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                defaultValue={state.values.confirmPassword}
            />

            <Button
                className={'btn-primary'}
                type={"submit"}
                name={"Sign Up"}
            />

        </form >

    )
}

