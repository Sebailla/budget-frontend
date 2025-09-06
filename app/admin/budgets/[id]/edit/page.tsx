import { Metadata } from "next"
import Link from "next/link"
import Button from "@/components/ui/buttons/Button"
import EditBudgetForm from "@/components/budgets/EditBudgetForm"
import { getBudgetById } from "@/domain/api/budgets"


//? - Matadatos dinámicos

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const budget = await getBudgetById((await params).id)

    return{
        title: `Budget Tracker - ${budget.name}`,
        description: `Budget Tracker - ${budget.name}`
    }
}
//?----------------------------------------------------

const EditBudgetPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    
    const { id } = await params

    const budget = await getBudgetById(id)

    return (

        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className=' text-4xl text-pastel-sky-700 my-5'>
                        Edit budget: <span className="text-pastel-sky-600 font-bold">{budget.name}</span> 
                    </h1>

                </div>
                <Link
                    href={'/admin'}
                >
                    <Button
                        type="button"
                        className="btn"
                        color="sky"
                        name="Back"
                    />
                </Link>
            </div>
            <div className='p-10 mt-10 border border-gray-100 rounded-xl shadow-lg '>
                <EditBudgetForm budget={budget}/>
            </div>
        </>
    )
}

export default EditBudgetPage