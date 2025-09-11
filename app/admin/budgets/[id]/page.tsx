
import AddExpenseBtn from "@/components/expenses/ui/AddExpensesBtn"
import ExpenseMenu from "@/components/expenses/ui/ExpenseMenu"
import ModalContainer from "@/components/layout/ModalContainer"
import Button from "@/components/ui/buttons/Button"
import { getBudgetById } from "@/domain/api/budgets"
import { currencyFormat, dateFormat } from "@/domain/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import StickyHeader from "@/components/layout/StickyHeader"
import TableStickyHeader from "@/components/expenses/ui/TableStickyHeader"



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
            <StickyHeader
                title={budget.name}
                topOffsetPx={80}
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

            <TableStickyHeader topOffsetPx={204} />

            {
                budget.expenses.length ?
                    (
                        <>
                            <article role="list" className="mt-10 w-full">
                                {budget.expenses.map((expense) => (
                                    <div key={expense.id}>
                                        <div className="flex items-center border border-gray-100 rounded-xl shadow-md p-5 my-5 w-full">

                                            <p className="w-4/12 text-left font-sans text-sm font-bold text-gray-900">
                                                {expense.name}
                                            </p>

                                            <p className="w-2/12 text-right font-sans text-sm font-bold text-pastel-rose-500 pr-10">
                                                {currencyFormat(+expense.amount)}
                                            </p>

                                            <p className="w-2/12 text-center font-sans text-sm text-gray-700">
                                                {dateFormat(expense.createdAt)}
                                            </p>

                                            <div className="w-1/12 text-center">
                                                <div className="inline-block font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                                                    paid
                                                </div>
                                            </div>

                                            <div className="w-2/12 flex items-center justify-end gap-2">
                                                <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <Image
                                                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                                        alt="visa"
                                                        className="h-full w-full object-contain rounded-md"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                                <div className="flex flex-col text-right">
                                                    <p className="text-sm text-blue-gray-900 capitalize">visa 1234</p>
                                                    <p className="text-sm text-blue-gray-900 opacity-70">06/2026</p>
                                                </div>
                                            </div>

                                            <div className="w-1/12 text-right">
                                                <ExpenseMenu expenseId={expense.id} />
                                            </div>

                                        </div>
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


