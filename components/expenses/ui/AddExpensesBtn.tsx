'use client'

import { useRouter } from "next/navigation"
import Button from "../../ui/buttons/Button"

const AddExpenseBtn = () => {

    const router = useRouter()

    return (
            <Button
                type="button"
                className="btn"
                color="rose"
                name="Add Expense"
                onClick={()=>router.push(location.pathname + `?addExpense=true&showModal=true`)}
            />
    )
}

export default AddExpenseBtn