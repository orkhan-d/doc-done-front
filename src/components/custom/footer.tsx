import React from 'react';
import {cn} from "@/lib/utils";
import {GitHubLogoIcon, InstagramLogoIcon} from "@radix-ui/react-icons";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={cn(
            "border-t-2 border-t-grey-200 dark:border-t-grey-700",
            "flex items-center justify-between p-4",
        )}>
            <div className={"flex items-center justify-between space-x-2"}>
                <Link href={"https://github.com/orkhan-d"}>
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] color-accent rotate-0 scale-100 transition-all"/>
                </Link>
                <Link href={"https://instagram.com/0rkhan.d"}>
                    <InstagramLogoIcon className="h-[1.2rem] w-[1.2rem] color-accent rotate-0 scale-100 transition-all"/>
                </Link>
                <Link href={"https://t.me/d_orkhan"}>
                    <FaTelegram className="h-[1.2rem] w-[1.2rem] color-accent rotate-0 scale-100 transition-all"/>
                </Link>
            </div>
            <p className={"text-sm"}>© 2024 0rkhan.d All rights reserved.</p>
        </div>
    );
};

export default Footer;