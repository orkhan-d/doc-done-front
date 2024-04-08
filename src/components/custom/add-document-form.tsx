"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Icons} from "@/components/custom/icons";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {addDocument, loginSchema} from "@/schemas/schemas";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {DialogClose} from "@/components/ui/dialog";
import {toast} from "sonner";
import {useState} from "react";

export function AddDocumentForm({submitFunc}: {submitFunc: Function}) {
    const form = useForm<z.infer<typeof addDocument>>({
        resolver: zodResolver(addDocument),
        defaultValues: {
            fix: false
        },
    })

    async function onSubmit(values: z.infer<typeof addDocument>) {
        toast("File has been added!", {
            description: "Wait for your place at queue",
            action: {
                label: "Dismiss",
                onClick: () => console.log("Undo"),
            },
        });
        submitFunc();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2"
                  encType={"multipart/form-data"}>
                <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>File</FormLabel>
                            <FormControl>
                                <Input name={field.name} ref={field.ref} type={"file"} onChange={(e) => {
                                    form.setValue('file', e.target.files![0]);
                                }}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="doctype"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Document format</FormLabel>
                            <Select onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value={"1"}>Type 1</SelectItem>
                                    <SelectItem value={"2"}>Type 2</SelectItem>
                                    <SelectItem value={"3"}>Type 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="fix"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Fix this file
                                </FormLabel>
                                <FormDescription>
                                    Either file will be only checked for mistakes
                                </FormDescription>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}