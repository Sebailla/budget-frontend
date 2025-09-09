
import { DraftExpense } from "@/domain/schemas";
import { FormField } from "../ui/forms/FormField";

interface Props{
    expense?: DraftExpense
}

export default function ExpenseForm({expense}: Props) {
    return (
        <>
            <div className="mb-5">
                <FormField
                label="Expense Name"
                id="name"
                name="name"
                color="lira"
                defaultValue={expense?.name ?? ''}
                />
            </div>

            <div className="mb-5">
                <FormField
                    label="Amount"
                    id="amount"
                    name="amount"
                    color="lira"
                    defaultValue={expense?.amount?.toString() ?? ''}
                />
            </div>
        </>
    )
}