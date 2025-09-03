'use client'

import { useActionState, useEffect } from "react"
import Button from "../ui/buttons/Button"
import { FormField } from "../ui/forms/FormField"
import { createBudget } from "@/actions"
import { toast } from "react-toastify"
import { ToastNotification } from "../ui/ToastNotification"
import { useRouter } from "next/navigation"

const CreateBudgetForm = () => {

    const router = useRouter()

    const [state, dispatch] = useActionState(createBudget,{
        errors: [],
        success:''
    })

    useEffect(()=>{
        if(state.errors){
            state.errors.forEach(e=>{
                toast.error(e)
            })
        }
        if(state.success){
            toast.success(state.success,{
                onClose: ()=>{
                    router.push('/admin')
                },
                onClick: ()=>{
                    router.push('/admin')
                }
            })
        }

    }, [state, router])

    return (
        <form
            className="mt-10 space-y-8"
            noValidate
            action={dispatch}
        >
            <div className="space-y-3">
                <FormField
                    name={'budgetName'}
                    type={"text"}
                    color="rose"
                    label="Budget Name"
                />
            </div>
            <div className="space-y-3">
                <FormField
                    name={'amount'}
                    type={"number"}
                    color="rose"
                    label="Budget Amount"
                />
            </div>
            <Button
                type="submit"
                className="btn w-full"
                color="rose"
                name={"Create New Budget"}
            />
            <ToastNotification/>
        </form>
    )
}

export default CreateBudgetForm
