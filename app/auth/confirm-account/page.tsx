import { ForgotPass, HeaderCard } from "@/components"

const ConfirmAcountPage = () => {
    return (
        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Confirm Account'} />

            <ForgotPass />

        </div>
    )
}

export default ConfirmAcountPage