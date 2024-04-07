import React from 'react';
import DocumentsTable from "@/components/custom/documents-table";
import {cn} from "@/lib/utils";

const Page = () => {
    return (
        <div className={
            cn(
                "container max-w-[1200px] h-full flex flex-col gap-4"
            )
        }>
            <div className={"py-14"}>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    There is list of all your documents
                </h3>
                <p className="text-sm text-muted-foreground">
                    All documents after status becomes done lasts for 3 days and automatically delete
                </p>
            </div>
            <DocumentsTable/>
        </div>
    );
};

export default Page;