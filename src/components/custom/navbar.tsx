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

const Navbar = () => {
    return (
        <div className={"border-b-2 border-b-gray-400"}>
            <NavigationMenu className={"max-w-[1360px] mx-auto p-2"}>
                <Link href={"/"} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Doc-Done
                    </NavigationMenuLink>
                </Link>
                <div className={"flex space-x-1"}>
                    <Link href={"/login"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Login
                        </NavigationMenuLink>
                    </Link>
                    <Link href={"/register"} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Register
                        </NavigationMenuLink>
                    </Link>
                    <ModeToggle/>
                </div>
            </NavigationMenu>
        </div>
    );
};

export default Navbar;