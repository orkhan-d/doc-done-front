'use client';

import React from 'react';
import Link from "next/link";
import {
    NavigationMenu, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {ModeToggle} from "@/components/custom/theme-toggle-button";

const Navbar = () => {
    return (
        <NavigationMenu>
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
    );
};

export default Navbar;