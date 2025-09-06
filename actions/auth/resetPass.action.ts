'use server'

import { ErrorResponseSchema, ResetPasswordSchema } from "@/domain/schemas"

interface ActionState {
    errors: string[]
    success: string
}

export const resetPassword = async (token: string, prevState: ActionState, formData: FormData) => {

    const dataInput = {
        password: (formData.get("password") as string) || "",
        confirmPassword: (formData.get("confirmPassword") as string) || "",
    }

    const validDataInput = ResetPasswordSchema.safeParse(dataInput)
    console.log(validDataInput)
    if (!validDataInput.success) {
        const errors = validDataInput.error.issues.map((issue) => issue.message)

        return {
            errors,
            success: '',
        }
    }

    // ✅ Registro en API
    const url = `${process.env.API_URL}/auth/reset-password/${token}`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: validDataInput.data.password,
        }),
    })

    const json = await req.json()
    console.log(json.ok)

    if(!req.ok){
        const {error} = ErrorResponseSchema.parse(json)
        return{
            errors: [error],
            success: ''
        }
    }

    return {
        errors: [],
        success: json.message,
    }

}
