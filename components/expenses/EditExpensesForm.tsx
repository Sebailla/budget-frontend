'use client'

import { DialogTitle } from "@headlessui/react";
import { useActionState, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import ExpenseForm from "./ExpenseForm";
import Button from "../ui/buttons/Button";
import { DraftExpense } from "@/domain/schemas";
import { editExpense } from "@/actions";


export default function EditExpenseForm({ closeModal }: { closeModal: () => void }) {

    const [expense, setExpense] = useState<DraftExpense>()

    const { id: busgetId } = useParams()

    const searchParams = useSearchParams()
    const expenseId = searchParams.get('editExpenseId')

    const editExpenseWithExpenseId = editExpense.bind(null, {
        expenseId: expenseId,
        budgetId: busgetId
    })
    const [state, dispatch] = useActionState(editExpenseWithExpenseId, {
        errors: [] as string[],
        success: ''
    })

    useEffect(() => {
        const url = `${process.env.NEXT_PUBLIC_URL}/admin/api/budgets/${busgetId}/expenses/${expenseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setExpense(data))
    }, [])

    useEffect(() => {
        if (state.errors) {
            state.errors.forEach(e => {
                toast.error(e)
            })
        }
        if (state.success) {
            toast.success(state.success)
            closeModal()
        }
    }, [state])



    return (
        <>
            <DialogTitle
                as="h3"
                className="font-black text-4xl text-pastel-lira-500 my-5"
            >
                Edit Expense
            </DialogTitle>

            <p className="text-xl font-bold">
                Edit your spending details
            </p>
            <form
                className="bg-white shadow-lg rounded-xl p-10 mt-10 border border-pastel-lira-200"
                noValidate
                action={dispatch}
            >
                <ExpenseForm expense={expense} />

                <Button
                    className="btn w-full"
                    color="lira"
                    type="submit"
                    name="Save Change"
                />
            </form>
        </>
    )
}