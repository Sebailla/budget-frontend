import Button from "@/components/ui/buttons/Button";
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='space-y-7'>
            <h1 className="font-black text-4xl text-pastel-rose-600">Not Found</h1>
            <p className="text-xl font-bold">The Budget you are trying to access {''} <span className="text-pastel-lira-400">does not exist</span></p>

            <Link href={'/admin'}>
                <Button
                    type="button"
                    className="btn"
                    color="lira"
                    name={"Go To Budgets"}
                />
            </Link>

        </div >
    )
}