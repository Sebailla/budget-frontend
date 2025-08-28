import { CopyrightIcon } from "lucide-react"


export const Footer = () => {
    return (
        <footer className='py-5 fixed bottom-0 w-full bg-secondary-bg dark:bg-secondary-bg'>
            <p className='text-center flex justify-center gap-3'>
                <CopyrightIcon/> All rights reserved {new Date().getFullYear()} - By Sebastián Illa
            </p>
        </footer>
    )
}
