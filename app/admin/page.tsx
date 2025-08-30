
import Link from "next/link"


const AdminPage = () => {

    return (
        <>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center'>
                <div className='w-full md:w-auto'>
                    <h1 className="font-black text-4xl text-title-text my-5">My Budgets</h1>
                    <p className="text-primary-text text-xl font-bold dark:text-primary-text">Maneja y administra tus {''}
                        <span className="text-yellow-new-500">presupuestos</span>
                    </p>
                </div>
                <Link
                    href={'/admin/budget/new'}
                    className='btn-primary'
                >
                    New Butget
                </Link>

            </div>
        </>
    )
}

export default AdminPage