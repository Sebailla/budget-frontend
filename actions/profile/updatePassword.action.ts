'use server'

import getToken from "@/domain/auth/token"
import { ErrorResponseSchema, UpdatePasswordSchema } from "@/domain/schemas"
import { revalidatePath } from "next/cache"

interface ActionState { 
    errors: string []
    success: string
}

export async function updatePassword (prevState: ActionState, formData: FormData){

    const userPassword = UpdatePasswordSchema.safeParse({
        current_password: formData.get('current_password'),
        new_password: formData.get('new_password'),
        password_confirmation: formData.get('password_confirmation'),
    })

    if (!userPassword.success) {
        return {
            errors: userPassword.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()

    const url = `${process.env.API_URL}/auth/update-password`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            current_password: userPassword.data.current_password,
            new_password: userPassword.data.new_password
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

    return {
        errors: [],
        success: json.message
    }
}