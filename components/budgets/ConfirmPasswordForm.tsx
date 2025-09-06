'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { DialogTitle } from "@headlessui/react"
import { FormField } from "../ui/forms/FormField"
import Button from "../ui/buttons/Button"
import { useActionState, useCallback, useEffect} from "react"
import { deleteBudget } from "@/actions"
import { ErrorMsg } from "../ui/forms/ErrorMsg"
import { toast } from "react-toastify"

export default function ConfirmPasswordForm() {
    const pathname = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    const budgetIdParam = searchParams.get('deleteBudgetId')
    const budgetId = budgetIdParam ? Number(budgetIdParam) : undefined

    const deleteBudgetWithId = deleteBudget.bind(null, budgetId!)
    const [state, dispatch] = useActionState(deleteBudgetWithId, {
        errors: [],
        success: ''
    })

    const closeModal = useCallback(() => {
        const hideModal = new URLSearchParams(searchParams.toString())
        hideModal.delete('deleteBudgetId')
        router.replace(`${pathname}?${hideModal}`)
    }, [pathname, router, searchParams])

    useEffect(()=>{
        if(state.success){
            toast.success(state.success)
            closeModal()
        }
    },[state, closeModal])

    

    return (
        <>
            <DialogTitle
                as="h3"
                className="font-black text-4xl text-pastel-red-400 my-5"
            >
                Delete Budget
            </DialogTitle>
            <p className="text-xl font-bold">Enter your password to {''}
                <span className="text-pastel-red-300">delete the budget {''}</span>
            </p>
            <p className='text-gray-600 text-sm mb-5'>(A budget is deleted and its expenses cannot be recovered.)</p>

            {
                state.errors.map((e,i) => <ErrorMsg key={i}>{e}</ErrorMsg>)
            }

            <form
                className=" mt-14 space-y-10"
                noValidate
                action={dispatch}
            >
                <div className="flex flex-col gap-5">
                    <FormField
                        id="password"
                        name="password"
                        type="password"
                        color="red"
                        label="Enter your pasword to delete"
                    />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <Button
                        className="btn"
                        color="red"
                        name="Delete"
                        type="submit"
                    />
                    <Button
                        className="ntb"
                        color="green"
                        name="Cancel"
                        onClick={closeModal}
                    />
                </div>
            </form>
        </>
    )
}