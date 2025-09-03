import { z } from "zod"

export const RegisterSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
    email: z.string().min(1, { message: 'Invalid email address' }).email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
})

export const TokenSchema = z.string({ message: 'Invalid token' }).length(6, { message: 'Invalid token' })

export const LoginSchema = z.object({
    email: z.string()
        .min(1, { message: 'Email address cannot be empty' })
        .email({ message: 'Invalid email address' }),
    password: z.string()
        .min(1, { message: 'Password cannot be empty' })
})

export const ErrorPesponseSchema = z.object({
    error: z.string()
})

export const SuccessSchema = z.string()

export const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email()
})

export const ForgotPasswordSchema = z.object({
    email: z.string()
        .min(1, { message: 'Email address cannot be empty' })
        .email({ message: 'Invalid email address' }),
})

export const ResetPasswordSchema = z.object({
    password: z.string()
        .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match"
});

export const DraftBudgetSchema = z.object({
    budgetName: z.string()
        .min(1, { message: 'The Budget Name is required' }),
    amount: z.coerce.
        number({ message: 'Invalid quantity' })
        .min(1, { message: 'Invalid quantity' }),
})

export type User = z.infer<typeof UserSchema>

