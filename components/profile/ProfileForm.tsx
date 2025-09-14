"use client"

import { updateUser } from "@/actions"
import { User } from "@/domain/schemas"
import { useActionState, useEffect } from "react"
import toast from "react-hot-toast"
import { FormField } from "../ui/forms/FormField"
import Button from "../ui/buttons/Button"

export default function ProfileForm({user}: {user: User}) {
    
    const [state, dispatch] = useActionState(updateUser,{
        errors:[],
        success:''
    })

    useEffect(()=>{
        if(state.errors){
            state.errors.forEach(e=>{
                toast.error(e)
            })
        }
        if(state.success){
            toast.success(state.success)
        }
    },[state])

    return (
        <>
            <form
                className=" mt-14 space-y-5"
                noValidate
                action={dispatch}
            >
                <div className="flex flex-col gap-5">
                    <FormField
                    label="Name"
                    name="name"
                    id="name"
                    type="text"
                    color="lira"
                    defaultValue={user.name}
                    />
                    
                </div>
                <div className="flex flex-col gap-5">
                    <FormField
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        color="lira"
                        defaultValue={user.email}
                    />
                    
                </div>

                <Button
                className="btn w-full"
                type="submit"
                color="lira"
                name="Save Change"/>
            </form>
        </>
    )
}