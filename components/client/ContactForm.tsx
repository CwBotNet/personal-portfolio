"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue, } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const FormSchema = z.object({
    fullName: z.string().min(8, {
        message: "Name must be atleast 8 characters long"
    }),
    phone: z.string().min(10, {
        message: "Phone must be atleast 10 characters long"
    }),
    email: z.string().email("Invalid email address"),
    message: z.string()
});
const ContactForm = ({ className }: { className?: string }) => {
    const form = useForm<z.infer<typeof FormSchema>>({ resolver: zodResolver(FormSchema) });
    const onSubmit = () => {
        console.log("sumited");

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`shadow-md  space-y-3 text-font-color rounded-xl p-8 md:w-[35vw] ${className}  `}>
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem className="">
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your full name" className="border-nagitive-color rounded-xl" {...field} />
                            </FormControl>
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your email " type="email" className="border-nagitive-color rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter your phone no." className="border-nagitive-color rounded-xl" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>message</FormLabel>
                            <FormControl>
                                <Textarea className="border-nagitive-color rounded-xl" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )}
                />
                <Button type="submit" variant={"submit"} className="text-font-color rounded-xl w-full">Submit</Button>
            </form>
        </Form>

    )
}

export default ContactForm