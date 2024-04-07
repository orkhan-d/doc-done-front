import { Metadata } from "next"
import Link from "next/link"

import {UserRegisterForm} from "@/components/custom/user-register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {UserLoginForm} from "@/components/custom/user-login-form";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";


export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
    return (
        <div className={"container h-full flex flex-col items-center justify-center gap-4"}>
            <Tabs defaultValue="login" className="container flex flex-col items-center justify-center">
                <TabsList className={"grid grid-cols-2 w-fit"}>
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card className={"text text-wrap"}>
                        <CardHeader>
                            <CardTitle>Sign in</CardTitle>
                            <CardDescription>
                                to account to get more time
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UserLoginForm />
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        <CardHeader>
                            <CardTitle>Create an account</CardTitle>
                            <CardDescription>
                                to stop wasting your time
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UserRegisterForm />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            <p className="text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our Terms of Service and Privacy Policy
            </p>
        </div>
    )
}