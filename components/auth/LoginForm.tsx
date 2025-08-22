'use client'

import Button from "../ui/buttons/Button"
import { GoogleSignBTN } from "../ui/buttons/Google-sign-btn"
import { CheckBox } from "../ui/forms/CheckBox"
import { FormField } from "../ui/forms/FormField"




export const LoginForm = () => {
    return (
        <form className="flex flex-col gap-4 p-6">

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

            <p className="mt-3 flex justify-center font-body text-sm font-bold leading-normal text-inherit antialiased"> Or Sing In with ...</p>

            <GoogleSignBTN />

        </form>


    )
}

