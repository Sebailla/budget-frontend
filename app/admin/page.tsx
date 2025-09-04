
import BudgetMenu from "@/components/budgets/BudgetMenu";
import Button from "@/components/ui/buttons/Button";
import getToken from "@/src/auth/token";
import { BudgetsAPIResponseSchema } from "@/src/schemas";
import { currencyFormat, dateFormat } from "@/src/utils";
import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
    title: "Budget Tracker",
    description: "Budget management page of the budget tracker app",
};


async function getUserBudget() {

    const token = await getToken()

    const url = `${process.env.API_URL}/budgets`

    const req = await fetch(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    const json = await req.json()

    const budgets = BudgetsAPIResponseSchema.parse(json.data)

    return budgets
}


const AdminPage = async () => {

    const budgets = await getUserBudget()

    return (
        <>
            <section className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className="font-black text-4xl text-title-text my-5">My Budgets</h1>
                    <p className="text-primary-text text-xl font-bold dark:text-primary-text">Maneja y administra tus {''}
                        <span className="text-yellow-new-500">presupuestos</span>
                    </p>
                </div>
                <Link href={'/admin/budgets/new'}>
                    <Button
                        type="button"
                        className="btn"
                        color="green"
                        name={"New Budget"}
                    />
                </Link>
            </section>
            <section className="flex flex-col justify-center items-center w-full">
                {
                    budgets.length ?
                        (
                            <ul role="list" className="divide-y divide-gray-200 border border-gray-200 rounded-xl shadow-lg mt-10 w-full">
                                {budgets.map((budget) => (
                                    <li key={budget.id} className="flex justify-between gap-x-6 p-5 ">
                                        <div className="flex min-w-0 gap-x-4">
                                            <div className="min-w-0 flex-auto space-y-2">
                                                <p className="text-sm font-semibold leading-6 text-gray-900">

                                                    <Link
                                                        href={`/admin/budgets/${budget.id}`}
                                                        className="cursor-pointer u-underline-hover-current"
                                                    >
                                                        {
                                                            budget.name
                                                        }
                                                    </Link>

                                                </p>
                                                <p className="text-xl font-bold text-amber-500">
                                                    {
                                                        currencyFormat(+budget.amount) 
                                                    }
                                                </p>
                                                <p className='text-gray-500 font-bold  text-sm'>
                                                    Last Update: {" "}
                                                    <span className="font-light">{
                                                        dateFormat(budget.updatedAt) 
                                                    }</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex shrink-0 items-center gap-x-6">
                                            <BudgetMenu budgetId={budget.id}/>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                        :
                        (

                            <p className="text-md md:text-xl py-20 md:py-40">
                                There is no budget yet, {' '}
                                <Link
                                    href={'/admin/budgets/new'}
                                    className="text-title-text u-underline-hover-current cursor-pointer"
                                >
                                    start creating one
                                </Link>
                            </p>

                        )
                }
            </section>

        </>
    )
}

export default AdminPage