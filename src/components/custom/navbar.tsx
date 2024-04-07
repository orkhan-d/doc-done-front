'use client';

import React from 'react';
import Link from "next/link";
import {
    NavigationMenu, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {ModeToggle} from "@/components/custom/theme-toggle-button";
import {cn} from "@/lib/utils";
import {PencilIcon, FilesIcon, LucideLogIn, MenuIcon, MountainIcon, CircleHelp} from "lucide-react"
import {Button} from "@/components/ui/button";
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {FaQuestion} from "@react-icons/all-files/fa/FaQuestion";
import {FaQq} from "@react-icons/all-files/fa/FaQq";

const Navbar = () => {
    return (
        <div className={"border-b-2 border-b-grey-300 dark:border-b-grey-600 p-3"}>
            <NavigationMenu className={"hidden lg:flex max-w-[1360px] mx-auto"}>
                <Link href={"/"} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(), 'text-xl font-bold'
                    )}>
                        Doc-Done
                    </NavigationMenuLink>
                </Link>
                <div className={"flex space-x-1"}>
                    <Link href={"/documents"} legacyBehavior passHref>
                        <Button variant="link">
                            <FilesIcon className="mr-2 h-4 w-4"/> My Documents
                        </Button>
                    </Link>
                    <Link href={"/rules"} legacyBehavior passHref>
                        <Button variant="link">
                            <PencilIcon className="mr-2 h-4 w-4"/> My rules
                        </Button>
                    </Link>
                    <Link href={"/faq"} legacyBehavior passHref>
                        <Button variant="link">
                            <CircleHelp className="mr-2 h-4 w-4"/> FAQ
                        </Button>
                    </Link>
                </div>
                <div className={"flex space-x-1"}>
                    <Link href={"/auth"} legacyBehavior passHref>
                        <Button variant="ghost" size="icon">
                            <LucideLogIn className="h-[1.2rem] w-[1.2rem] color-accent rotate-0 scale-100 transition-all"/>
                        </Button>
                    </Link>
                    <ModeToggle/>
                </div>
            </NavigationMenu>
            <div className={"flex justify-between items-center flex-row lg:hidden"}>
                <Link href={"/"} className={'text-xl font-bold'} legacyBehavior passHref>
                    <Button variant={"outline"}>
                        Doc-Done
                    </Button>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="" size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className={"grid grid-cols-1 gap-4"}>
                            <SheetClose asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                                    Home
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/documents">
                                    My documents
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/rules">
                                    My rules
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/auth">
                                    Sign in / Sign up
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href={"/faq"}>
                                    FAQ
                                </Link>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
};

export default Navbar;