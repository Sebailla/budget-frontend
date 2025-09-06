'use server'

import { LoginSchema } from "@/domain/schemas"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

interface ActionState {
    errors: string[]
}

export const LoginUserAction = async (prevState: ActionState, formData: FormData) => {

    const loginData = {
        email: (formData.get("email") as string) || "",
        password: (formData.get("password") as string) || "",
    }

    const login = LoginSchema.safeParse(loginData)

    if (!login.success) {
        const errors = login.error.issues.map((issue) => issue.message)

        return {
            errors
        }
    }


    // ✅ Registro en API
    const url = `${process.env.API_URL}/auth/login`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: login.data.email,
            password: login.data.password,
        }),
    })

    const json = await req.json()

    if (!req.ok) {
        return{
            errors: [json.message || 'Failed to confirm account'],
        }        
    }

    // cookies Set
    (await cookies()).set({
        name: 'BUDGET_TOKEN',
        value: json.token,
        httpOnly: true,
        path: '/',
    })

    redirect('/admin')

}