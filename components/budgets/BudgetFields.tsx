import { BudgetId } from "@/src/schemas";
import { FormField } from "../ui/forms/FormField"

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
                    type={"text"}
                    color={color}
                    label="Budget Name"
                    defaultValue={budget?.name}
                />
            </div>
            <div className="space-y-3">
                <FormField
                    name={'amount'}
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