'use server'

import getToken from "@/domain/auth/token"
import { ErrorResponseSchema, ProfileFormSchema} from "@/domain/schemas"
import { revalidatePath } from "next/cache"

interface ActionState {
    errors: string[]
    success: string
}

export async function updateUser(prevState: ActionState, formData: FormData) {

    const user = ProfileFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email')
    })

    if (!user.success) {
        return {
            errors: user.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const token = await getToken()

    const url = `${process.env.API_URL}/auth/user`

    const req = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: user.data.name,
            email: user.data.email
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

    return {
        errors: [],
        success: json.message
    }
}