'use cliente'
import { ChevronDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { logout } from "@/actions";
import Link from "next/link";



export const UserMenu = ({
    name,
    email = 'john@example.com',
    userAvatar,
    onItemClick
}: {
    name?: string;
    email?: string;
    userAvatar?: string;
    onItemClick?: (item: string) => void;
}) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-12 px-2 py-0">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={userAvatar} alt={name} />
                    <AvatarFallback className="text-xl">
                        {name?.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                </Avatar>
                <ChevronDownIcon className="h-6 w-6 ml-1" />
                <span className="sr-only">User menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>
                <div className="flex flex-col space-y-2">
                    <p className="text-title-text text-lg font-medium leading-none">{name}</p>
                    <p className="text-xs leading-none text-[#737373]">
                        {email}
                    </p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onItemClick?.('profile')}>
                <Link href={'/admin/profile/settings'} className="w-full">
                    Settings
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onItemClick?.('settings')}>
                <Link href={'/admin'} className="w-full">
                    Budgets
                </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={async () => await logout()}>
                Log out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);

