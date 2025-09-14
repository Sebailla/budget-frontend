
import LightLogo from "@/components/ui/logos/LightLogo";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <main className=" max-w-3xl mx-auto p-5 space-y-5 font-sans">
        <section className="-mt-30 -mb-20">
          <LightLogo />
        </section>
        
        <p className="text-lg">Domina tus finanzas con nuestro Administrador de Gastos. Simplifica la gestión de tus ingresos y egresos en un solo lugar, de manera intuitiva y eficiente. Toma el control total de tus finanzas personales o empresariales con nuestra plataforma fácil de usar.</p>

        <ol className="grid grid-cols-1 gap-5 items-start">
          <li className="p-5 shadow-lg text-lg">
            <span className="text-purple-950 font-black">Organización sin Esfuerzo: </span>
            Clasifica y visualiza tus gastos de forma clara y ordenada, sin complicaciones con nuestro panel amigable y fácil de usar.
          </li>
          <li className="p-5 shadow-lg text-lg">
            <span className="text-purple-950 font-black">Presupuestación Inteligente: </span>
            Establece objetivos financieros realistas y sigue tu progreso con nuestras herramientas de presupuestación inteligente.
          </li>
          <li className="p-5 shadow-lg text-lg">
            <span className="text-purple-950 font-black">Acceso en cualquier lugar: </span>
            Nuestra plataforma está disponible para que puedas gestionar tus finanzas desde donde te encuentres.
          </li>
          <li className="p-5 shadow-lg text-lg">
            <span className="text-purple-950 font-black">Seguridad Garantizada: </span>
            Protegemos tus datos con los más altos estándares de seguridad, para que puedas utilizar nuestra plataforma con total tranquilidad.
          </li>
        </ol>
      </main>

      <nav className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10 pb-20 max-w-3xl mx-auto ">
        <Link
          href="/auth/register"
          className="border border-[#c1ec76] rounded-lg font-medium shadow-sm inline-flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center transition-colors px-4 py-2 text-sm font-sans text-gray-800 bg-[#c1ec76] disabled:border-gray-500 focus:ring-wt-primary hover:ring-2 hover:ring-offset-2 hover:ring-[#c1ec76]"
        >¿No tienes cuenta? Crea una</Link>
        <Link
          href="/auth/login"
          className="border border-[#c1ec76] rounded-lg font-medium shadow-sm inline-flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 justify-center transition-colors px-4 py-2 text-sm font-sans text-gray-800 bg-[#c1ec76] disabled:border-gray-500 focus:ring-wt-primary hover:ring-2 hover:ring-offset-2 hover:ring-[#c1ec76]"
        >¿Ya tienes cuenta? Iniciar Sesión</Link>
      </nav>
    </>
  );
}
