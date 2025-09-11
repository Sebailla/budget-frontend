
import DeleteBudgetModal from "@/components/budgets/DeleteBudgetModal";
import BudgetMenu from "@/components/budgets/ui/BudgetMenu";
import StickyBudgetHeader from "@/components/budgets/ui/StickyBudgetHeader";
import Button from "@/components/ui/buttons/Button";
import { getUserBudget } from "@/domain/api/budgets";
import { currencyFormat, dateFormat } from "@/domain/utils";
import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
    title: "Budget Tracker",
    description: "Budget management page of the budget tracker app",
}

const AdminPage = async () => {

    const budgets = await getUserBudget()

    return (
        <>

            {/* topOffsetPx: ajustalo según la altura de tu navbar (en px) */}
            <StickyBudgetHeader
                title='My Budgets'
                topOffsetPx={128}
                subTitle={'Manage and administer your'}
                subTitlleAccent={'budgets'}
                titleColor={"text-pastel-green-600"}
                subTitleAccentColor={"text-amber-500"}
                rightContent={
                    <>
                        <Link href={'/admin/budgets/new'}>
                            <Button
                                type="button"
                                className="btn"
                                color="green"
                                name={"New Budget"}
                            />
                        </Link>
                    </>
                }
            />

            <section className="flex flex-col justify-center items-center w-full">
                {
                    budgets.length ?
                        (
                            <article role="list" className=" mt-10 w-full">
                                {budgets.map((budget) => (
                                    <div key={budget.id}>
                                        <section className="flex justify-between p-5 my-5 border border-gray-100 rounded-xl shadow-md">
                                            <div className="flex min-w-11/12 gap-x-4">
                                                <div className="min-w-0 flex-auto space-y-2">
                                                    <p className="text-sm font-semibold leading-6 text-gray-900 border-2 border-transparent border-b-gray-200 pb-2.5">
                                                        <Link
                                                            href={`/admin/budgets/${budget.id}`}
                                                            className="cursor-pointer u-underline-hover-current"
                                                        >
                                                            {
                                                                budget.name
                                                            }
                                                        </Link>

                                                    </p>
                                                    <p className="text-xl font-bold text-amber-500 py-3">
                                                        {
                                                            currencyFormat(+budget.amount)
                                                        }
                                                    </p>
                                                    <p className='text-gray-500 font-bold  text-xs'>
                                                        Last Update: {" "}
                                                        <span className="font-light">{
                                                            dateFormat(budget.updatedAt)
                                                        }</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex min-w-1/12 shrink-0 items-start">
                                                <BudgetMenu budgetId={budget.id} />
                                            </div>
                                        </section>
                                        <DeleteBudgetModal />
                                    </div>
                                ))}
                            </article>
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