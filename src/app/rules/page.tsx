'use client';

import React, {useState} from 'react';
import DocumentsTable from "@/components/custom/documents-table";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {AddDocumentRulesForm} from "@/components/custom/add-document-rules";

const Page = () => {
    const [showDialog, setShowDialog] = useState(false);

    return (
        <div className={
            cn(
                "container max-w-[1200px] h-full flex flex-col gap-4"
            )
        }>
            <div className={"py-14 flex flex-col gap-8"}>
                <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        There is list of all your documents rules
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus excepturi impedit tenetur. Asperiores blanditiis cumque facere magnam modi numquam porro quam quidem, quis recusandae rerum tenetur vitae? Animi, consequatur, harum.
                    </p>
                </div>
                <div>
                    <Dialog open={showDialog} onOpenChange={setShowDialog}>
                        <DialogTrigger asChild>
                            <Button onClick={() => setShowDialog(true)}>Add document rules</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[425px] lg:max-w-fit">
                            <DialogHeader>
                                <DialogTitle>Add document rules</DialogTitle>
                                <DialogDescription>
                                    After adding, you&#39;ll need to wait for a queue
                                </DialogDescription>
                            </DialogHeader>
                            <AddDocumentRulesForm submitFunc={() => setShowDialog(false)}/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <DocumentsTable/>
        </div>
    );
};

export default Page;