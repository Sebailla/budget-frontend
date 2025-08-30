
import { ForgotPass, HeaderCard } from '@/components'
import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
    title: 'Budget Tracker - Forgot password',
    description: 'Forgot password page for the Budget Tracker application',
}

const ForgotPassPage = () => {


    return (

        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Reset Password'}/>

            <ForgotPass/>

            <div className="p-6 pt-0">
                <p className="mt-6 flex justify-center font-body text-sm font-light leading-normal text-inherit antialiased">
                    Do not have an account?
                    <Link
                        href="/auth/register"
                        className="ml-1 block font-body text-sm font-bold leading-normal text-pastel-yellow-700 antialiased"
                    >
                        Sign up
                    </Link>
                </p>
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

export default ForgotPassPage