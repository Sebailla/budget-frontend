'use server'

import { RegisterSchema } from "@/domain/schemas"

interface ActionState {
    errors: string[]
    success: string
    status?: number
    values: {
        name: string
        email: string
        password: string,
        confirmPassword: string
    }
}

export const createAccountAction = async (
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> => {
    const registerData = {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        password: (formData.get("password") as string) || "",
        confirmPassword: (formData.get("confirmPassword") as string) || "",
    }

    // Validación con Zod
    const register = RegisterSchema.safeParse(registerData)

    if (!register.success) {
        const errors = register.error.issues.map((issue) => issue.message)

        return {
            errors,
            success: '',
            values: registerData, // devolvemos los valores que el user ya escribió
        }
    }

    // Aquí harías la request a tu API
    
    // ✅ Registro en API
    const url = `${process.env.API_URL}/auth/register`

    const req = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: register.data.name,
            email: register.data.email,
            password: register.data.password,
        }),
    })

    const json = await req.json()

    return {
        errors: [],
        success: json.message || 'Account created successfully',
        status: req.status,
        values: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }, // ✅ Limpiamos si salió bien
    }
}