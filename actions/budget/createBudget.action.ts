'use server'

import { DraftBudgetSchema } from "@/src/schemas"
import { cookies } from "next/headers"

interface ActionState{
    errors: string []
    success: string
}
export const createBudget = async (prevState: ActionState, formData: FormData ) =>{

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

    const token = (await cookies()).get('BUDGET_TOKEN')?.value

    console.log(token)

    const url = `${process.env.API_URL}/budgets`

    const req = await fetch(url, {
        method: "POST",
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

    return{
        errors: [],
        success: json.message
    }
}