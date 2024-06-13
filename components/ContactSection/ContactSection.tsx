"use client"
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '../ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from '../ui/button'
import axios from "axios"
import { Contact } from 'lucide-react'
import SubmitSuccess from './SubmitSuccess'
import { useToast } from '../ui/use-toast'
import useSWR from 'swr'
import { fetcher } from '@/lib'
import { baseURL } from '@/constant'


const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];



const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', contact: '', service: '', message: '',
    });

    const [testimonials, setTeatimonials] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/testimonial`, { cache: "force-cache" })
            if (!res.ok) {
                console.log("failed to fetch data")
            }
            const data = await res.json()
            setTeatimonials(data.testimonials)

        }
        getData()
    }, [])



    // const testimonials = data.testimonials
    const [isSend, setIsSend] = useState(true);

    const { toast } = useToast()
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelectChange = (value: any) => {
        setFormData({ ...formData, service: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            setIsSend(false);
        }


        const data = await res.json();
        if (!data) setIsSend(false)
        setIsSend(true);
        setFormData({
            name: '', email: '', contact: '', service: '', message: '',
        })
        toast({
            title: `I got your message! ${formData.name} 👍 I'll be in touch soon.`
        })

    };


    return (

        <>
            {/* <div id="testimonial" className="h-[40rem]  mt-[12rem] rounded-xl flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                    className=''
                />
            </div> */}
            <div id='contact' className='container p-8 flex flex-col-reverse lg:flex-row-reverse md:justify-around items-center gap-12'>


                <div id='contactsection' className='w-[80vw]'>
                    <form onSubmit={handleSubmit} className='text-sm md:text-base'>
                        <Label>
                            Name
                        </Label>
                        <Input type='text' placeholder="Name" value={formData.name} name='name' onChange={handleChange} />
                        <Label>
                            Email
                        </Label>
                        <Input placeholder="Email" type='email' name='email' value={formData.email} onChange={handleChange} />
                        <Label>
                            Contact
                        </Label>
                        <Input placeholder="contact" type='number' name="contact" value={formData.contact} onChange={handleChange} />
                        <Select name='service' onValueChange={(e) => handleSelectChange(e)} value={formData.service}>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Frontend">Frontend</SelectItem>
                                <SelectItem value="Backend">Backend</SelectItem>
                                <SelectItem value="FullStack">FullStack</SelectItem>
                            </SelectContent>
                        </Select>
                        <Textarea placeholder="message" className='mt-4' name='message' value={formData.message} onChange={handleChange} />
                        <Button type='submit' onClick={handleSubmit} className='mt-4 w-full'>
                            {isSend ? "Send message" : "Sending..."}
                        </Button>
                    </form>
                </div>
                <div className="flex justify-center items-center tracking-wider">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-center">I&apos;m passionate about design and
                        <span className="text-orange-400">
                            {" "} I&apos;m always looking for new projects.{" "}
                        </span>
                        Let&apos;s chat and see how I can help bring your vision to life</h1>
                </div>
            </div>
        </>
    )
}

export default ContactSection