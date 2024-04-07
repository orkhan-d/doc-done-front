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
import {ButtonIcon} from "@radix-ui/react-icons";
import {PencilIcon, FilesIcon, LucideLogIn} from "lucide-react"
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (
        <div className={"border-b-2 border-b-grey-300 dark:border-b-grey-600"}>
            <NavigationMenu className={"max-w-[1360px] mx-auto p-2"}>
                <Link href={"/"} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Doc-Done
                    </NavigationMenuLink>
                </Link>
                <div className={"flex space-x-1"}>
                    <Link href={"/documents"} legacyBehavior passHref>
                        <Button variant="ghost">
                            <FilesIcon className="mr-2 h-4 w-4"/> My Documents
                        </Button>
                    </Link>
                    <Link href={"/rules"} legacyBehavior passHref>
                        <Button variant="ghost">
                            <PencilIcon className="mr-2 h-4 w-4"/> My rules
                        </Button>
                    </Link>
                </div>
                <div className={"flex space-x-1"}>
                    <Link href={"/auth"} legacyBehavior passHref>
                        <Button variant="outline" size="icon">
                            <LucideLogIn className="h-[1.2rem] w-[1.2rem] color-accent rotate-0 scale-100 transition-all"/>
                        </Button>
                    </Link>
                    <ModeToggle/>
                </div>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;