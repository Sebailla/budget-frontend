'use client'

import { DialogTitle } from "@headlessui/react";
import { useActionState, useEffect } from "react";
import { createExpense } from "@/actions";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import ExpenseForm from "./ExpenseForm";
import Button from "../ui/buttons/Button";
//import { toast } from "react-toastify";

export default function AddExpenseForm({ closeModal }: { closeModal: () => void }) {

  const { id } = useParams()

  const createExpenseWithBudgetId = createExpense.bind(null, id)
  const [state, dispatch] = useActionState(createExpenseWithBudgetId, {
    errors: [] as string[],
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
      closeModal()
    }
  }, [state])

  return (
    <>
      <DialogTitle
        as="h3"
        className="font-black text-4xl text-pastel-lira-500 my-5"
      >
        Add Expense
      </DialogTitle>

      <p className="text-xl font-bold">Fill out the form and create a {''}
        <span className="text-pastel-rose-400">expense</span>
      </p>
      <form
        className="bg-white shadow-lg rounded-xl p-10 mt-10 border border-pastel-lira-200"
        noValidate
        action={dispatch}
      >
        <ExpenseForm />

        <Button
          className="btn w-full"
          color="lira"
          type="submit"
          name="Save Expense"
        />
      </form>
    </>
  )
}