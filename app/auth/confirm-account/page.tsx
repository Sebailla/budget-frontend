import { ConfirmAccount, HeaderCard } from "@/components"

const ConfirmAcountPage = () => {
    return (
        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Confirm Account'} />

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                Please enter the 6-digit code you received in your email box provided during registration.
            </p>

            <ConfirmAccount />

            <p className="p-6  text-center font-body text-md leading-normal text-inherit antialiased">
                Once the account is confirmed, you will be <span className="font-semibold">redirected to login page</span>.
            </p>

        </div>
    )
}

export default ConfirmAcountPage
