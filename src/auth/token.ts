import { cookies } from "next/headers"

const getToken = async ()=>{
    const cookieStore = await cookies()
    const token = cookieStore.get('BUDGET_TOKEN')?.value
    return token
}

export default getToken
