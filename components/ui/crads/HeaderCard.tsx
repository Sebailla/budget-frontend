
interface HeaderCardProps {
    title?: string
}
export const HeaderCard = ({title}:HeaderCardProps) => {
    return (
        <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-pastel-yellow-400 to-pastel-yellow-100 bg-clip-border shadow-lg shadow-pastel-yellow-500/40">
            <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-pastel-yellow-950 antialiased">
                {title || 'Card Title!'}
            </h3>
        </div>
    )
}
