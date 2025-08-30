import { HeaderCard } from "@/components"

const PostRegisterPage = () => {
    return (
        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Account Information'} />

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                Please check the inbox of your email account provided during registration.
            </p>

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                You will receive a 6-digit token required to confirm that you placed the order.
            </p>

            <p className="p-6 text-center font-body text-md leading-normal text-inherit antialiased">
                If you do not receive the email, check your spam folder. Delivery may take a while, depending on your email service.
            </p>

        </div>
    )
}

export default PostRegisterPage
