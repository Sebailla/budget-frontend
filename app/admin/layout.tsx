import { Footer, Navbar, ToastNotification } from "@/components";
import { verifySession } from "@/src/auth/dal";
import { ThemeProvider } from "next-themes";


export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    await verifySession()

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <div className="bg-primary-bg dark:bg-primary-bg">
                    <Navbar />

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