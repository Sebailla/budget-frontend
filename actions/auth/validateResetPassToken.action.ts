'use server'

import { TokenSchema } from "@/domain/schemas"

interface ActionState{
    errors: string[]
    success: string
}

export const validateResetPassToken = async (token:string, prevState: ActionState )=>{

    const confirmToken = TokenSchema.safeParse(token)
    
        if (!confirmToken.success) {
            return {
                errors: confirmToken.error.issues.map(e => e.message),
                success: ''
            }
        }
    
    const url = `${process.env.API_URL}/auth/validate-token`
    
        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: confirmToken.data,
            }),
        })
    
        const json = await req.json()
    
        if (!req.ok) {
            return {
                errors: [json.message || 'Failed to confirm token'],
                success: ''
            }
        }
    
        return {
            errors: [],
            success: json.message
        }
}