"use client"

import { useParams, useSearchParams } from "next/navigation";
import { DialogTitle } from "@headlessui/react";
import Button from "../ui/buttons/Button";
import { startTransition, useActionState, useEffect } from "react";
import { deleteExpense } from "@/actions";
import { ErrorMsg } from "../ui/forms/ErrorMsg";
import toast from "react-hot-toast";

interface DeleteExpenseForm {
    closeModal: () => void
}

export default function DeleteExpenseForm({ closeModal }: DeleteExpenseForm) {
    const { id: budgetId } = useParams()
    const searchParams = useSearchParams()
    const expenseId = searchParams.get('deleteExpenseId')!

    const deleteExpenseWithIds = deleteExpense.bind(null, {
        budgetId: budgetId,
        expenseId: expenseId
    })
    const [state, dispatch] = useActionState(deleteExpenseWithIds, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if (!Number.isInteger(+budgetId) || !Number.isInteger(+expenseId)) {
            closeModal()
        }
    }, [budgetId, expenseId, closeModal])

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
                Delete Expense
            </DialogTitle>
            <p className="text-xl font-bold">Confirm to delete , {''}
                <span className="text-amber-500">the expense</span>
            </p>
            <p className='text-gray-600 text-sm mb-5'>(A deleted expense cannot be recovered)</p>
            {
                state.errors.map((e, i) => <ErrorMsg key={i}>{e}</ErrorMsg>)
            }
            <div className="grid grid-cols-2 gap-5 mt-10">
                <Button
                    className="btn"
                    color="red"
                    name="Delete"
                    type="submit"
                    onClick={() => startTransition(() => {
                        dispatch()
                    })}
                />
                <Button
                    className="ntb"
                    color="green"
                    name="Cancel"
                    onClick={closeModal}
                />
            </div>
        </>
    )
}