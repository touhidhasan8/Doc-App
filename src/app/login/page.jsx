"use client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
import { authClient } from "../lib/auth-client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
  

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })
        if (data) {
            toast.success("Login Successfull");
            router.push('/');
            return;
        }
        else if (error) {
            toast.error(error.message)
        }

    }
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center px-4 text-[#4B5563]">
                <Form className="flex w-full max-w-md shadow-2xl border p-6 rounded-2xl flex-col gap-4 bg-white" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <h1 className="text-3xl font-semibold ">Login </h1>
                        <p>Please login to book appointment</p>
                    </div>

                    {/* Gmail */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    {/* Image */}

                    {/* PasssWord */}
                    <TextField className="w-full" isRequired name="password">
                        <Label>Password</Label>
                        <InputGroup>
                            <InputGroup.Input
                                name="password"

                                placeholder="Enter Your Password"
                                className="w-full "
                                type={isVisible ? "text" : "password"}

                            />
                            <InputGroup.Suffix className="pr-0">
                                <Button
                                    isIconOnly
                                    aria-label={isVisible ? "Hide password" : "Show password"}
                                    size="sm"
                                    variant="ghost"
                                    onPress={() => setIsVisible(!isVisible)}
                                >

                                    {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                </Button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>
                    {/* Button Submit */}
                    <div>
                        <Button className="w-full mt-2 rounded-lg" type="submit">
                            <Check />
                            Login
                        </Button>

                    </div>
                    <p className="text-center">
                        No Account ?{" "}
                        <Link
                            href="/sign-up"
                            className="text-[#5F6FFF] font-medium hover:underline"
                        >
                            Register Now
                        </Link>
                    </p>
                    <Button
                        variant="outline"
                        className="w-full rounded-lg"
                    >
                        <GrGoogle className="mr-2" />
                        Continue with Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;