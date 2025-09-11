import { cache } from "react"
import getToken from "../auth/token"
import { notFound, redirect } from "next/navigation"
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
    const token = await getToken();
    if (!token) {
        window.location.href = '/auth/login';
        return;
    }

    const url = `${process.env.API_URL}/budgets`;
    const req = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (req.status === 401) {
        // Token expirado o inválido
        redirect("/auth/login");
    }

    const json = await req.json();

    if (!json.data) {
        console.error('No budget data received', json);
        redirect("/auth/login")
    }

    try {
        const budgets = BudgetsAPIResponseSchema.parse(json.data);
        return budgets;
    } catch (err) {
        console.error('Error validating budgets', err);
        return [];
    }
}