'use client'

import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"

export const RegisterForm = () => {
    return (

        <form className="flex flex-col gap-4 p-6">
            
            <FormField 
            label={'Name'}
            type="text"
            name="name"
            />

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

            <FormField 
            label={'Confirm Password'}
            type="password"
            name="confirmPassword"
            />

            <Button
            className={'btn-primary'}
            type={"submit"}
            name={"Sign Up"}
            />

        </form>
    )
}

