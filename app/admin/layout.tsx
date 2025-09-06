import { Footer, Navbar, ToastNotification } from "@/components";
import { verifySession } from "@/src/auth/dal";
import { ThemeProvider } from "next-themes";


export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const {user} = await verifySession()

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <div className="">
                    <Navbar user={user}/>

                    <section className='max-w-5xl mx-auto mt-20 p-3 py-10'>
                        {children}
                    </section>

                    <Footer />

                    <ToastNotification />
                </div>

            </ThemeProvider>
        </>
    );
}