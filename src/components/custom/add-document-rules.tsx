"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {useFieldArray} from "react-hook-form"
import { z } from "zod"
import {addRules, FormProviderAddRules, useFormContextAddRules} from "@/schemas/schemas";
import {toast} from "sonner";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Select, SelectTrigger, SelectValue} from "@/components/ui/select";
import {cn} from "@/lib/utils";
import {Plus, Trash2Icon} from "lucide-react";
import {TrashIcon} from "@radix-ui/react-icons";

export function AddDocumentRulesForm({submitFunc}: {submitFunc: Function}) {
    return <FormProviderAddRules>
        <AddDocumentRules submitFunc={submitFunc}/>
    </FormProviderAddRules>
}
export function AddDocumentRules({submitFunc}: {submitFunc: Function}) {
    const {register, handleSubmit} = useFormContextAddRules();

    async function onSubmit(values: z.infer<typeof addRules>) {
        toast("Rules have been added!", {
            description: "You can use it for your documents",
            action: {
                label: "Dismiss",
                onClick: () => console.log("Undo"),
            },
        });
        console.log(values);
        submitFunc();
    }

    return (
        <ScrollArea className={"p-4 max-h-[60vh]"}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="space-y-2">
                    <div className={"px-1 flex space-x-4 items-center"}>
                        <Label className={"text-lg font-semibold"}>Name</Label>
                        <Input {...register('name')}/>
                    </div>
                    <Card className={"p-4"}>
                        <ManageRules/>
                    </Card>
                <Button type="submit">Submit</Button>
            </form>
        </ScrollArea>
    )
}

const ManageRules = () => {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContextAddRules();

    const { append, remove, fields } = useFieldArray({
        name: `rules`,
        control,
    });

    return <div>
        <div className={"flex items-center justify-between space-x-4 py-2"}>
            <Label className={"scroll-m-20 text-lg font-semibold tracking-tight"}>Rules</Label>
            <div className={"flex items-center space-x-4"}>
                <Button variant={"secondary"} type={"button"}
                        className={"hidden lg:block"}
                        onClick={() => {
                    append({
                        text_type: "",
                        name: "",
                        value: ""
                    })
                }}>Add rule</Button>
                <Button variant={"secondary"} type={"button"}
                        size={"icon"}
                        className={"block lg:hidden flex items-center justify-center"}
                        onClick={() => append({
                            text_type: "",
                            name: "",
                            value: ""
                        })}
                ><Plus/></Button>
                <Button variant={"destructive"}
                        className={"hidden lg:block"}
                        type={"button"}
                        onClick={() => remove()}
                >Remove all rules</Button>
                <Button variant={"destructive"}
                        className={"block lg:hidden flex items-center justify-center"}
                        size={"icon"}
                        type={"button"}
                        onClick={() => remove()}
                ><Trash2Icon/></Button>
            </div>
        </div>
        <div className={"flex flex-col space-y-2"}>
            {fields.map((rule, ruleIndex) => (
                    <div key={ruleIndex} className={cn(
                        "items-end flex",
                        "flex-col space-y-4",
                        "lg:flex-row lg:space-x-4"
                    )}>
                        <Select {...register(`rules.${ruleIndex}.text_type`)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Text type" />
                            </SelectTrigger>
                        </Select>
                        <Select {...register(`rules.${ruleIndex}.name`)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Rule" />
                            </SelectTrigger>
                        </Select>
                        <Select {...register(`rules.${ruleIndex}.value`)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Value" />
                            </SelectTrigger>
                        </Select>
                        <Button variant={"destructive"}
                                type={"button"}
                                onClick={() => remove(ruleIndex)}>
                            Remove
                        </Button>
                    </div>
                )
            ) }
        </div>
    </div>
}