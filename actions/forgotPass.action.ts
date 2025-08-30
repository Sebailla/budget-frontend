'use server'

import { ForgotPasswordSchema } from "@/src/schemas"


interface ActionState {
    errors: string []
    success?: string
}

export const forgotPassword = async (prevState: ActionState, formData: FormData )=>{

    const forgotPassEmail = {
        email: (formData.get("email") as string) || "",
    }

    const forgotPass = ForgotPasswordSchema.safeParse(forgotPassEmail)

    if (!forgotPass.success){
        const errors = forgotPass.error.issues.map((issue) => issue.message)

        return {
            errors,
            success:''
        }
    }

    const url = `${process.env.API_URL}/auth/forgot-password`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: forgotPass.data.email,
        }),
    })

    const json = await req.json()

    console.log(json)

    if (!req.ok) {
        return {
            errors: [json.message || 'Failed to send email'],
        }
    }

    return{
        errors: [],
        success: json.message
    }

}
