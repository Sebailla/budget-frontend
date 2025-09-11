'use server'

import getToken from "@/domain/auth/token"
import { BudgetId, Expense } from "@/domain/schemas"
import { revalidatePath } from "next/cache"
import { z } from "zod";

interface ActionState {
    errors: string[]
    success: string
}

interface PropsIds {
    expenseId: BudgetId['id']
    budgetId: Expense['id']
}

const ErrorResponseSchema = z.object({
    status: z.string().optional(),
    error: z.string().optional(),
    message: z.string().optional(),
});

export async function deleteExpense({ expenseId, budgetId }: PropsIds, prevState: ActionState,) {

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`

    const req = await fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    const json = await req.json()

    if (!req.ok) {
        const parsed = ErrorResponseSchema.parse(json);
        const errorMsg = parsed.error ?? parsed.message ?? "Unknown error";
        return {
            errors: [errorMsg],
            success: "",
        }
    }

    revalidatePath(`/admin/budgets/${budgetId}`)
    //revalidateTag('/all-budgets')

    return {
        errors: [],
        success: json.message
    }
}