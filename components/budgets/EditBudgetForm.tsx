'use client'
import { BudgetId } from "@/domain/schemas"
import Button from "../ui/buttons/Button"
import { useActionState, useEffect } from "react"
import { editBudget } from "@/actions"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import BudgetFields from "./ui/BudgetFields"


const EditBudgetForm = ({ budget }: { budget?: BudgetId }) => {

    const router = useRouter()

    const editBudgetById = editBudget.bind(null, budget!.id)

    const [state, dispatch] = useActionState(editBudgetById, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (state.errors.length > 0) {
            state.errors.forEach(e => {
                toast.error(e)
            })
        }
        if (state.success) {
            toast.success(state.success)
            router.push('/admin')
        }
    }, [state, router])

    if (!budget) {
        return null
    }


    return (
        <form
            className="mt-10 space-y-8"
            noValidate
            action={dispatch}
        >
            <BudgetFields
                color={'sky'}
                budget={budget}
            />
            <Button
                type="submit"
                className="btn w-full"
                color="sky"
                name={"Save"}
            />
        </form>
    )
}

export default EditBudgetForm