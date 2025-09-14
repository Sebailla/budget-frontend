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

export const ErrorResponseSchema = z.object({
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

export const DraftExpensSchema = z.object({
    name: z.string()
        .min(1, { message: 'The Expense Name is required' }),
    amount: z.coerce.
        number({ message: 'Invalid amount' })
        .min(1, { message: 'Invalid amount' }),
})

export const ExpenseAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    budgetId: z.number()
})

export const BudgetAPIResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
    amount: z.string(),
    userId: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    expenses: z.array(ExpenseAPIResponseSchema)
})

export const BudgetsAPIResponseSchema = z.array(BudgetAPIResponseSchema.omit({expenses: true}))

export const PassValidationSchema = z.string().min(1, { message: 'Invalid Password' })

export const CreateExpenseSchema = z.object({
    name: z.string()
        .min(1, { message: 'The Expense Name is required' }),
    amount: z.coerce.
        number({ message: 'Invalid amount' })
        .min(1, { message: 'Invalid amount' }),
})

export const UpdatePasswordSchema = z.object({
    current_password: z.string().min(1, { message: 'The password cannot be empty.' }),
    new_password: z.string()
        .min(8, { message: 'The new password must be at least 8 characters long.' }),
    password_confirmation: z.string()
}).refine((data) => data.new_password === data.password_confirmation, {
    message: "Passwords are not the same",
    path: ["password_confirmation"]
});

export const ProfileFormSchema = z.object({
    name: z.string()
        .min(1, { message: 'Tu Nombre no puede ir vacio' }),
    email: z.string()
        .min(1, { message: 'El Email es Obligatorio' })
        .email({ message: 'Email no válido' }),
})


//? Types infer ----------------------------------------------

export type User = z.infer<typeof UserSchema>
export type BudgetId = z.infer<typeof BudgetAPIResponseSchema>
export type Expense = z.infer<typeof ExpenseAPIResponseSchema>
export type DraftExpense = z.infer<typeof DraftExpensSchema>

