import { verifySession } from "@/domain/auth/dal"
import getToken from "@/domain/auth/token"

export async function GET(
    request: Request,
    context: { params: Promise<{ budgetId: string; expenseId: string }> }
) {

    //Verificamos que este activa la sesión
    await verifySession()

    const { budgetId, expenseId } = await context.params

    const token = await getToken()
    const url = `${process.env.API_URL}/budgets/${budgetId}/expenses/${expenseId}`

    const req = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    const json = await req.json()

    if (!req.ok) {
        return Response.json(json.error, { status: 403 })
    }

    return Response.json(json.data)
}