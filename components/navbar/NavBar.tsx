'use client';

import * as React from 'react';
import { useRef } from 'react';

import { UserMenu } from './UserMenu';
import LogoSolo from '../ui/logos/Logo';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { User } from '@/src/schemas';




export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    userName?: string;
    userEmail?: string;
    userAvatar?: string;
    user?: User
    onUserItemClick?: (item: string) => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
    (
        {
            userAvatar,
            onUserItemClick,
            user
        }, ref
    ) => {
        const containerRef = useRef<HTMLElement>(null);

        return (
            <header
                ref={ref}
                className='sticky top-0 z-50 w-full backdrop-blur-xs bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(20,20,20,0.4)] px-4 md:px-6 [&_*]:no-underline'
            >
                <div className="container mx-auto flex h-32 max-w-screen-2xl items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex flex-1 items-center gap-2">

                        <div className="flex items-center gap-10">
                            {/* Logo */}
                            <Link href={'#'}>
                                <LogoSolo />
                            </Link>
                            <span className="hidden font-brand font-bold text-4xl text-primary-text dark:text-primary-text sm:inline-block">Budget Tracker</span>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">

                        {/* Theme toggle */}
                        <ThemeToggle />

                        {/* User menu */}
                        <UserMenu
                            name={user?.name}
                            email={user?.email}
                            userAvatar={userAvatar}
                            onItemClick={onUserItemClick}
                        />

                        {/* Language selector */}

                    </div>
                </div>
            </header>
        )
    }
);

Navbar.displayName = 'Navbar';
