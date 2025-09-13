import { currencyFormat } from "@/domain/utils"


interface Props {
    label: string
    amount?: number
    color?: string
}
const Amounts = ({ label, amount, color}: Props) => {
    return (
        <p className="text-lg md:text-xl font-normal text-gray-700">{label}: {''}
        {
                amount > 0 ? <span className={`${color || 'text-pastel-sky-600'} font-bold`}>{currencyFormat(amount)}</span> : <span className="text-pastel-red-400 font-bold">{currencyFormat(amount)}</span>
        }
            
        </p>
    )
}

export default Amounts