import AddExpenseBtn from "@/components/expenses/ui/AddExpensesBtn"
import ExpenseMenu from "@/components/expenses/ui/ExpenseMenu"
import ModalContainer from "@/components/layout/ModalContainer"
import Button from "@/components/ui/buttons/Button"
import { getBudgetById } from "@/domain/api/budgets"
import { currencyFormat, dateFormat } from "@/domain/utils"
import { Metadata } from "next"
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
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className="font-black text-4xl text-pastel-lira-500 mb-5">{budget.name}</h1>
                    <p className="text-xl font-bold">Admin your {''} <span className="text-pastel-rose-400">expenses</span></p>
                </div>
                <section className="flex gap-5">
                    <AddExpenseBtn />
                    <Link href={'/admin'}>
                        <Button
                            className="btn"
                            color="sky"
                            type="submit"
                            name="Admin"
                        />
                    </Link>
                </section>
            </div>

            {
                budget.expenses.length ?
                    (
                        <>
                            <h1 className="font-black text-2xl text-pastel-sky-600 mt-10">Expenses in this budget</h1>

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
        </>
    )
}

export default BudgetDetailPage