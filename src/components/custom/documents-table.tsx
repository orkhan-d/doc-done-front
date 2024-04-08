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
import {DownloadIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";

interface IDocument {
    name: string,
    doctype: string,
    fix: boolean,
    date: string,
    status: boolean,
}

const DocumentsTable = () => {
    const documents = Array<IDocument | null>(100).fill(null).map((u, i): IDocument => ({
        name: `Document ${i + 1}`,
        doctype: `Document type ${i + 1}`,
        fix: i % 2 == 0,
        date: `Some date ${i + 1}`,
        status: i % 2 == 1,
    })).map((v, i) =>
        <TableRow key={i}>
            <TableCell>
                <Button variant={"ghost"} size={"icon"}>
                    <DownloadIcon/>
                </Button>
            </TableCell>
            <TableCell>{v.name}</TableCell>
            <TableCell>{v.doctype}</TableCell>
            <TableCell>
                <Button size={"icon"} variant={"ghost"}>
                    <Checkbox checked={v.fix}/>
                </Button>
            </TableCell>
            <TableCell>{v.date}</TableCell>
            <TableCell>{v.status ? 'Done' : 'Pending...'}</TableCell>
            <TableCell>
                <Button variant={"ghost"} size={"icon"} disabled={!v.status}>
                    <DownloadIcon/>
                </Button>
            </TableCell>
        </TableRow>
    )
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
                    <TableHead>Result</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {documents}
            </TableBody>
        </Table>
    );
};

export default DocumentsTable;