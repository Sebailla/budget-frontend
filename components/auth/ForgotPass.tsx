'use client'

import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"

export const ForgotPass = () => {
    return (

        <form className="flex flex-col gap-4 p-6">

            <FormField
                label={'Email'}
                type="email"
                name="email"
            />

            <Button
                className={'btn-primary'}
                type={"submit"}
                name={"Send Email"}
            />
        </form>

    )
}