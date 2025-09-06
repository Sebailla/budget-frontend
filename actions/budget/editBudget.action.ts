'use server'

import getToken from "@/src/auth/token"
import { BudgetId, DraftBudgetSchema, ErrorResponseSchema } from "@/src/schemas"
import { revalidateTag } from "next/cache"

interface ActionState {
    errors: string[]
    success: string
}

export async function editBudget(budgetId: BudgetId['id'], prevstate: ActionState, formData: FormData) {

    const budget = DraftBudgetSchema.safeParse({
        budgetName: formData.get('budgetName'),
        amount: formData.get('amount')
    })
    if (!budget.success) {
        return {
            errors: budget.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets/${budgetId}`

    const req = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: budget.data.budgetName,
            amount: budget.data.amount
        }),
    })

    const json = await req.json()
    

    if(!req.ok){
        const {error} = ErrorResponseSchema.parse(json)
        return{
            errors: [error],
            success:''
        }
    }

    //revalidatePath('/admin')
    revalidateTag('/all-budgets')

    return {
        errors: [],
        success: json.message
    }
}