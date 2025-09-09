'use server'

import getToken from "@/domain/auth/token"
import { BudgetId, DraftExpensSchema, ErrorResponseSchema, Expense } from "@/domain/schemas"
import { revalidatePath} from "next/cache"

interface ActionState {
    errors: string[],
    success: string
}

interface PropsIds{
    expenseId: BudgetId['id']
    budgetId: Expense['id']
}
export async function editExpense({expenseId, budgetId}: PropsIds ,prevState: ActionState, formData: FormData) {

    const expense = DraftExpensSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })
    if (!expense.success) {
        return {
            errors: expense.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`

    const req = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: expense.data.name,
            amount: expense.data.amount
        }),
    })

    const json = await req.json()


    if (!req.ok) {
        const { error } = ErrorResponseSchema.parse(json)
        return {
            errors: [error],
            success: ''
        }
    }

    revalidatePath('/admin')
    //revalidateTag('/all-budgets')

    return{
        errors: [],
        success: json.message
    }
}