
import Notifications from "@/components/layout/Notifications";
import ProfileTabs from "@/components/profile/ProfileTabs";
//import { verifySession } from "@/domain/auth/dal";
import { SessionProvider } from "@/domain/context/SessionContext";
import { ThemeProvider } from "next-themes";

export default async function profileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    //const { user } = await verifySession()

    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                <SessionProvider>
                    <div className="">
                        <ProfileTabs/>
                        <section className='max-w-5xl mx-auto mt-20 p-3 py-10'>
                            {children}
                        </section>
                    </div>
                    <Notifications />
                </SessionProvider>
            </ThemeProvider >
        </>
    );
}