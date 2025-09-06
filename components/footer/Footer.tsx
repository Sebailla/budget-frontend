import { CopyrightIcon } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-5 fixed bottom-0 w-full backdrop-blur bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(20,20,20,0.5)]">
            <p className="text-center flex justify-center gap-3">
                <CopyrightIcon /> All rights reserved {new Date().getFullYear()} - By Sebastián Illa
            </p>
        </footer>
    );
}
