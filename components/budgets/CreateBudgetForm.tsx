'use client'

import { useActionState, useEffect } from "react"
import Button from "../ui/buttons/Button"
import { createBudget } from "@/actions"
import { toast } from "react-toastify"
import { ToastNotification } from "../ui/ToastNotification"
import { useRouter } from "next/navigation"
import BudgetFields from "./ui/BudgetFields"


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
            toast.success(state.success)
            router.push('/admin')
        }

    }, [state, router])

    return (
        <form
            className="mt-10 space-y-8"
            noValidate
            action={dispatch}
        >
            <BudgetFields color={'lira'}/>
            <Button
                type="submit"
                className="btn w-full"
                color="lira"
                name={"Create New Budget"}
            />
            <ToastNotification/>
        </form>
    )
}

export default CreateBudgetForm
