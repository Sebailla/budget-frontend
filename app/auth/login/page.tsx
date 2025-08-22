import { HeaderCard, LoginForm } from '@/components'

import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: 'Budget Tracker - Sing In',
    description: 'Login page for the Budget Tracker application',
}

const LoginPage = () => {
    return (
        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Sign In'}/>

            <LoginForm/>

            <div className="p-6 pt-0">
                <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Do not have an account?
                    <Link
                        href="/auth/register"
                        className="ml-1 block font-sans text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Sign up
                    </Link>
                </p>
                <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                    Forgot you password?
                    <Link
                        href="/auth/forgot-pass"
                        className="ml-1 block font-sans text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Password Recovery
                    </Link>
                </p>
                
            </div>
        </div> 

    )
}

export default LoginPage
