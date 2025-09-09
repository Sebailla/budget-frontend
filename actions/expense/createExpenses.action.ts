'use server'

import getToken from "@/domain/auth/token"
import { CreateExpenseSchema, ErrorResponseSchema } from "@/domain/schemas"
import { revalidatePath } from "next/cache"

interface ActionState{
    errors: string [],
    success: string
}

export async function createExpense(budgetId: string ,prevState:ActionState, formData: FormData) {
    
    const expenseData = CreateExpenseSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount')
    })
    if (!expenseData.success) {
        return {
            errors: expenseData.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: expenseData.data.name,
            amount: expenseData.data.amount
        }),
    })

    const json = await req.json()

    if(!req.ok){
        const {error} = ErrorResponseSchema.parse(json.data)
        return{
            errors: [error],
            success:''
        }
    }

    revalidatePath(`/admin/budgets/${budgetId}`)

    return {
        errors: [],
        success: json.message
    }
}