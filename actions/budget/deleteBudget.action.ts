"use server"

import getToken from "@/src/auth/token"
import { BudgetId, PassValidationSchema, SuccessSchema } from "@/src/schemas"

interface ActionState {
    errors: string[]
    success: string
}

export async function deleteBudget(budgetId: BudgetId['id'], prevState: ActionState, formData: FormData) {

    const currentPassword = PassValidationSchema.safeParse(formData.get('password'))

    if (!currentPassword.success) {
        return {
            errors: currentPassword.error.issues.map(issue => issue.message),
            success:''
        }
    }

    const token = await getToken()

    //? - Check password

    const checkPasswordUrl = `${process.env.API_URL}/auth/check-password`

    const checkPasswordReq = await fetch(checkPasswordUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            password: currentPassword.data,
        }),
    })

    const checkPasswordJson = await checkPasswordReq.json()

    if (!checkPasswordReq.ok) {
        return{
            errors: [checkPasswordJson.message],
            success: ''
        }
    }

    //? - Delete Budget

    const deleteBudgetUrl = `${process.env.API_URL}/budgets/${budgetId}`

    const deleteBudgetReq = await fetch(deleteBudgetUrl, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    const deleteBudgetJson = await deleteBudgetReq.json()

    if (!deleteBudgetReq) {
        return {
            errors: [deleteBudgetJson.message],
            success: ''
        }
    }

    const success = SuccessSchema.parse(deleteBudgetJson.message)

    return {
        errors: [],
        success
    }
}