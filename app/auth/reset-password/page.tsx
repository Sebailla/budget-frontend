import { HeaderCard, PasswordResetHandler} from "@/components"

const ResetPasswordPage = () => {
    return (
        <div className="relative z-50 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

            <HeaderCard title={'Reset Password'} />

            <PasswordResetHandler/>

        </div>
    )
}

export default ResetPasswordPage