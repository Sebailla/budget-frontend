"use client"
import { Fragment } from "react"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid"
import { Expense } from "@/domain/schemas"
import { useRouter } from "next/navigation"

export default function ExpenseMenu({ expenseId }: { expenseId: Expense['id'] }) {

    const router = useRouter()

    return (
        <>
            <Menu as="div" className="relative flex justify-end">
                <MenuButton className="-m-2.5 block p-1 z-0 text-gray-500 hover:text-gray-900">
                    <span className="sr-only">opciones</span>
                    <EllipsisHorizontalIcon className="h-9 w-9 md:w-15 lg:w-18" aria-hidden="true" />
                </MenuButton>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <MenuItem>
                            <button
                                type='button'
                                className='block px-3 py-1 text-sm leading-6 text-gray-700'
                                onClick={() => router.push(location.pathname + `?showModal=true&editExpenseId=${expenseId}`)}
                            >
                                Edit
                            </button>
                        </MenuItem>

                        <MenuItem>
                            <button
                                type='button'
                                className='block px-3 py-1 text-sm leading-6 text-pastel-red-500'
                                onClick={() => router.push(location.pathname + `?showModal=true&deleteExpenseId=${expenseId}`)}
                            >
                                Delete
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Transition>
            </Menu>
        </>
    )
}