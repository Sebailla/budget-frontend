import { cache } from "react"
import getToken from "../auth/token"
import { notFound } from "next/navigation"
import { BudgetAPIResponseSchema, BudgetsAPIResponseSchema } from "../schemas"

export const getBudgetById = cache(async (budgetId: string) => {
    const token = await getToken()

    const url = `${process.env.API_URL}/budgets/${budgetId}`

    const req = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        //cache: "no-store", // opcional: evita caché en datos dinámicos
    })

    if (!req.ok) {
        notFound()
    }

    const json = await req.json()

    const budget = BudgetAPIResponseSchema.parse(json.data)

    return budget
})

export async function getUserBudget() {

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets`

    const req = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        next: {
            tags: ['all-budgets']
        }
    })

    const json = await req.json()

    const budgets = BudgetsAPIResponseSchema.parse(json.data)

    return budgets
}