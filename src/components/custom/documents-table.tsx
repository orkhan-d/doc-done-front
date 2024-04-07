import React from 'react';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {TiTick} from "@react-icons/all-files/ti/TiTick";
import {DownloadIcon} from "@radix-ui/react-icons";
import {CircleCheckBig, SidebarClose} from "lucide-react";
import {Button} from "@/components/ui/button";
import { IoMdCloseCircleOutline } from "@react-icons/all-files/io/IoMdCloseCircleOutline";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";

const DocumentsTable = () => {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Document name</TableHead>
                    <TableHead>Document type</TableHead>
                    <TableHead>To fix</TableHead>
                    <TableHead>Added at</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <Button variant={"ghost"} size={"icon"}>
                            <DownloadIcon/>
                        </Button>
                    </TableCell>
                    <TableCell>SomeBoringDocument</TableCell>
                    <TableCell>Official document</TableCell>
                    <TableCell>
                        <Button size={"icon"} variant={"ghost"}>
                            <Checkbox checked={false}/>
                        </Button>
                    </TableCell>
                    <TableCell>January 27, 2024</TableCell>
                    <TableCell>Done</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Button variant={"ghost"} size={"icon"}>
                            <DownloadIcon/>
                        </Button>
                    </TableCell>
                    <TableCell>SomeBoringDocument</TableCell>
                    <TableCell>Official document</TableCell>
                    <TableCell>
                        <Button size={"icon"} variant={"ghost"}>
                            <Checkbox checked={true}/>
                        </Button>
                    </TableCell>
                    <TableCell>January 30, 2024</TableCell>
                    <TableCell>Pending</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default DocumentsTable;