'use client'


import { createAccountAction } from "@/actions"
import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"
import { useActionState} from "react"
import { ErrorMsg } from "../ui/forms/ErrorMsg"
import { SuccessMsg } from "../ui/forms/SuccessMsg"


const initialState = {
    errors: [],
    success: '',
    values: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
}

export const RegisterForm = () => {


    const [state, dispatch] = useActionState(createAccountAction, initialState)

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
                defaultValue={state.values.name}
            />

            <FormField
                label={'Email'}
                type="email"
                name="email"
                defaultValue={state.values.email}
            />

            <FormField
                label={'Password'}
                type="password"
                name="password"
                defaultValue={state.values.password}
            />

            <FormField
                label={'Confirm Password'}
                type="password"
                name="confirmPassword"
                defaultValue={state.values.confirmPassword}
            />

            <Button
                className={'btn-primary'}
                type={"submit"}
                name={"Sign Up"}
            />

            {state.errors.map((err, i) =>
                <ErrorMsg key={i}>{err}</ErrorMsg>
            )}
            {state.success && state.status === 201 &&
                < SuccessMsg > {state.success}</SuccessMsg>
            }
            {state.status === 409 &&
                <ErrorMsg> {state.success}</ErrorMsg>}

        </form >
    )
}

