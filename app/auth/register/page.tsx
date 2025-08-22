import type { Metadata } from 'next'
import { HeaderCard, RegisterForm } from "@/components"
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Budget Tracker - Sing Up',
    description: 'Register page for the Budget Tracker application',
}

const RegisterPage = () => {
    return (

        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Sign Up'} />

            < RegisterForm />

            <div className="p-6 pt-0">
                <p className="mt-6 flex justify-center font-body text-sm font-light leading-normal text-inherit antialiased">
                    Are you already registered?
                    <Link
                        href="/auth/login"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>

    )
}

export default RegisterPage
