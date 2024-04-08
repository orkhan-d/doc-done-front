"use client"

import { z } from "zod"
import {FormProvider, useForm, useFormContext} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {ReactNode} from "react";

const DOCX_TYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8)
})

export const addDocument = z.object({
    file: z.instanceof(File)
        .refine((file) => {
            return file.type==DOCX_TYPE
        }, 'File must be .docx format!'),
    fix: z.boolean(),
    doctype: z.string().transform(Number)
})

export const addRules = z.object({
    name: z.string(),
    rules: z.object({
        text_type: z.string(),
        name: z.string(),
        value: z.any(),
    }).array()
})

export type FormTypeAddRules = z.infer<typeof addRules>
export const useFormAddRules = () => useForm<FormTypeAddRules>({
    resolver: zodResolver(addRules)
})

export const FormProviderAddRules = ({children}: {children: ReactNode}) => {
    const methods = useFormAddRules();
    return <FormProvider {...methods}>
        {children}
    </FormProvider>
}

export const useFormContextAddRules = () =>
    useFormContext<FormTypeAddRules>()