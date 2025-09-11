import StickyBudgetHeader from "@/components/budgets/ui/StickyBudgetHeader"
import AddExpenseBtn from "@/components/expenses/ui/AddExpensesBtn"
import ExpenseMenu from "@/components/expenses/ui/ExpenseMenu"
import ModalContainer from "@/components/layout/ModalContainer"
import Button from "@/components/ui/buttons/Button"
import { getBudgetById } from "@/domain/api/budgets"
import { currencyFormat, dateFormat } from "@/domain/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"



//? - Matadatos dinámicos ----------------------------

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {

    const budget = await getBudgetById((await params).id)

    return {
        title: `Budget Tracker - ${budget.name}`,
        description: `Budget Tracker - ${budget.name}`
    }
}
//?----------------------------------------------------


const BudgetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {

    const { id } = await params

    const budget = await getBudgetById(id)

    return (
        <>
            {/* topOffsetPx: ajustalo según la altura de tu navbar (en px) */}
            <StickyBudgetHeader
                title={budget.name}
                topOffsetPx={128}
                subTitle={'Admin your'}
                subTitlleAccent={'expenses'}
                note={'Expenses in this budget'}
                titleColor={"text-pastel-lira-500"}
                subTitleAccentColor={"text-pastel-rose-400"}
                noteColor={"text-pastel-sky-600"}
                rightContent={
                    <>
                        <AddExpenseBtn />
                        <Link href="/admin">
                            <Button className="btn" color="sky" type="button" name="Admin" />
                        </Link>
                    </>
                }
            />

            {
                budget.expenses.length ?
                    (
                        <>


                            <article role="list" className=" mt-10 w-full">
                                {budget.expenses.map((expense) => (
                                    <div key={expense.id}>
                                        <section className="flex justify-between p-5 my-5 border border-gray-100 rounded-xl shadow-md">
                                            <div className="flex flex-col min-w-11/12 gap-x-4">
                                                <div className="min-w-0 flex justify-start items-center">
                                                    <p className="w-1/2 text-lg font-semibold capitalize leading-6 text-gray-800 ">
                                                        {
                                                            expense.name
                                                        }
                                                    </p>
                                                    <p className="w-1/2 text-lg font-bold text-pastel-rose-500 py-3">
                                                        {
                                                            currencyFormat(+expense.amount)
                                                        }
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className='text-gray-500 font-bold  text-xs'>
                                                        Create date: {" "}
                                                        <span className="font-light">{
                                                            dateFormat(expense.createdAt)
                                                        }</span>
                                                    </p>
                                                </div>


                                            </div>
                                            <div className="flex min-w-1/12 shrink-0 items-start">
                                                <ExpenseMenu expenseId={expense.id} />
                                            </div>
                                        </section>

                                    </div>
                                ))}
                            </article>
                        </>
                    ) :
                    (
                        <p className="text-center py-20">There are no expenses yet</p>
                    )
            }

            <ModalContainer />






            <div className="flex min-h-screen items-center justify-center bg-white">

                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Transaction</p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Amount</p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Status</p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Account</p>
                            </th>
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            budget.expenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            {/* <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"> */}
                                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{expense.name}</p>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{currencyFormat(+expense.amount)}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">{dateFormat(expense.createdAt)}</p>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="w-max">
                                            <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md opacity-100">
                                                <span className="">paid</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                <Image src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png" alt="visa" className="inline-block relative object-center rounded-md h-full w-full object-contain p-1" width={50} height={50} />
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">visa
                                                    1234
                                                </p>
                                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">06/2026</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 border-b border-blue-gray-50">
                                        <button className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default BudgetDetailPage


