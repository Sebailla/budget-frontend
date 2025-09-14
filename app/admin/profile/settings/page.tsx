import ProfileForm from "@/components/profile/ProfileForm";
import { verifySession } from "@/domain/auth/dal";


export default async function EditProfilePage() {

    const {user} = await verifySession()
    return (
        <>
            <h1 className="font-black text-4xl text-purple-950 my-5">Profile Update</h1>

            <ProfileForm user={user}/>
        </>
    )
}