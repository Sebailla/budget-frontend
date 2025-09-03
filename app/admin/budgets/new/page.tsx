import CreateBudgetForm from "@/components/budgets/CreateBudgetForm"
import Button from "@/components/ui/buttons/Button"
import Link from "next/link"

const CreateBudgetPage = () => {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className='font-black text-5xl text-pastel-rose-200 my-5'>
                        New Budget
                    </h1>
                </div>
                <Link href={'/admin'}>
                    <Button
                        type="button"
                        className="btn"
                        color="yellow"
                        name={"Back"}
                    />
                </Link>

                <Button
                    type="button"
                    className="btn"
                    color="rose"
                    name={"Rose"}
                />
                <Button
                    type="button"
                    className="btn"
                    color="lira"
                    name={"Lira"}
                />
                <Button
                    type="button"
                    className="btn"
                    color="green"
                    name={"Green"}
                />
                <Button
                    type="button"
                    className="btn"
                    color="sky"
                    name={"Sky"}
                />

            </div>

            <div className='p-10 mt-10  shadow-lg border border-pastel-rose-100 rounded-xl '>
                <CreateBudgetForm />
            </div>
        </>
    )
}

export default CreateBudgetPage