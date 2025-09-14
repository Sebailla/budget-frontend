"use client"

import { logout } from "@/actions"
import { updatePassword } from "@/actions/profile/updatePassword.action"
import { useActionState, useEffect } from "react"
import toast from "react-hot-toast"
import { FormField } from "../ui/forms/FormField"
import Button from "../ui/buttons/Button"

export default function ChangePasswordForm() {

    const [state, dispatch] = useActionState(updatePassword, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
        }
        if (state.success) {
            toast.success(state.success)
            setTimeout(() => {
                logout()
            }, 1500)

        }
    }, [state])

    return (
        <>
            <form
                className=" mt-14 space-y-5"
                noValidate
                action={dispatch}
            >
                <div className="flex flex-col gap-5">
                    <FormField
                        label="Current Password"
                        name="current_password"
                        id="current_password"
                        type="pasword"
                        color="lira"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <FormField
                        label="New Password"
                        name="new_password"
                        id="new_password"
                        type="pasword"
                        color="lira"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <FormField
                        label="Password Confirmation"
                        name="password_confirmation"
                        id="password_confirmation"
                        type="pasword"
                        color="lira"
                    />
                </div>

                <Button
                    className="btn w-full"
                    type="submit"
                    color="lira"
                    name="Save New Password" />
            </form>
        </>
    )
}