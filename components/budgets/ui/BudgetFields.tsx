import { FormField } from "@/components/ui/forms/FormField";
import { BudgetId } from "@/domain/schemas";


interface Props {
    color?: "yellow" | "rose" | "sky" | "lira" | "green"
    budget?:BudgetId
}

const BudgetFields = ({color, budget}:Props) => {
    return (
        <>
            <div className="space-y-3">
                <FormField
                    name={'budgetName'}
                    id={'budgetName'}
                    type={"text"}
                    color={color}
                    label="Budget Name"
                    defaultValue={budget?.name}
                />
            </div>
            <div className="space-y-3">
                <FormField
                    name={'amount'}
                    id={'amount'}
                    type={"number"}
                    color={color}
                    label="Budget Amount"
                    defaultValue={budget?.amount}
                />
            </div>
        </>
    )
}

export default BudgetFields