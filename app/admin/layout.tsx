import { Footer, Navbar} from "@/components";
import Notifications from "@/components/layout/Notifications";
import { verifySession } from "@/domain/auth/dal";
import { SessionProvider } from "@/domain/context/SessionContext";
import { ThemeProvider } from "next-themes";



export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = await verifySession()

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <SessionProvider>
                    <div className="">
                        <Navbar user={user} />

                        <section className='max-w-5xl mx-auto mt-20 p-3 py-10'>
                            {children}
                        </section>

                        <Footer />

                        {/* <ToastNotification /> */}
                    </div>
                    {/* <Toaster position="top-right" /> */}
                    <Notifications/>
                </SessionProvider>
            </ThemeProvider >
        </>
    );
}